import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Partai } from './partai.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreatePartaiDto } from './dto/create-partai.dto';
import { UpdatePartaiDto } from './dto/update-partai.dto';
import { bucketName, storage } from 'src/config/gcloud.config';
import { join } from 'path';
import { createReadStream } from 'fs';

@Injectable()
export class PartaiService {
    constructor(
        @InjectRepository(Partai)
        private partaiRepository: Repository<Partai>,
    ) { }

    async findAll(): Promise<Partai[]> {
        const partai = await this.partaiRepository.find();
        if (!partai || partai.length === 0) {
            throw new NotFoundException(`Partai not found`);
        }
        return partai;
    }

    async findOne(id: number): Promise<Partai> {
        const partai = await this.partaiRepository.findOneBy({ id });
        if (!partai) {
            throw new NotFoundException(`Partai with ID "${id}" not found`);
        }
        return partai;
    }

    async findAllBySearch(search: string): Promise<Partai[]> {
        const queryBuilder = this.partaiRepository.createQueryBuilder('partai');
        if (search) {
            queryBuilder.andWhere('partai.nama LIKE :search OR partai.deskripsi LIKE :search', { search: `%${search}%` });
        }
        const partai = await queryBuilder.getMany();
        if (!partai || partai.length === 0) {
            throw new NotFoundException(`Partai not found`);
        }
        return partai;
    }

    async create(createPartaiDto: CreatePartaiDto, file: Express.Multer.File): Promise<Partai> {
        try {
            const existing = await this.partaiRepository.findOne({
                where: { nama: createPartaiDto.nama },
            });
            if (existing) {
                throw new Error('Partai name already exists');
            }
            const partai = this.partaiRepository.create(createPartaiDto);
            // console.log(file);

            if (file) {
                const fileUrl = await this.uploadFileToGCS(file);
                partai.logo = fileUrl; // Simpan URL dari GCS
                // partai.logo = file.filename; loccal upload
                partai.logo_mime = file.mimetype;
                partai.logo_size = file.size;
            }
            // console.log(partai);


            await this.partaiRepository.save(partai);
            return partai;
        } catch (error) {
            // Handle errors that might occur during the creation process
            throw new Error(error.message);
        }
    }

    async update(id: number, updatePartaiDto: UpdatePartaiDto, file: Express.Multer.File): Promise<Partai> {
        const existing = await this.partaiRepository.findOne({
            where: { nama: updatePartaiDto.nama },
        });
        if (existing && existing.id !== id) {
            throw new Error('Partai name already exists');
        }
        const partai = await this.findOne(id);
        Object.assign(partai, updatePartaiDto);

        if (file) {
            const fileUrl = await this.uploadFileToGCS(file);
            console.log(fileUrl);

            partai.logo = fileUrl; 
            partai.logo_mime = file.mimetype;
            partai.logo_size = file.size;
        }

        await this.partaiRepository.save(partai);
        return partai;
    }

    async remove(id: number): Promise<void> {
        try {
            await this.partaiRepository.delete(id);
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new Error('Cannot delete Partai as it is referenced by one or more districts');
            }
            throw error;
        }
    }

    async uploadFileToGCS_1(file: Express.Multer.File): Promise<string> {
        const bucket = storage.bucket(bucketName);
        const fileName = `${Date.now()}-${file.originalname}`;
        const filePath = join(__dirname, '../../uploads', file.filename); // Pastikan ini adalah path yang benar
        const fileUpload = bucket.file(fileName);

        return new Promise((resolve, reject) => {
            const blobStream = fileUpload.createWriteStream({
                metadata: {
                    contentType: file.mimetype,
                },
            });

            blobStream.on('error', (error) => reject(error));
            blobStream.on('finish', () => {
                fileUpload.makePublic().then(() => {
                    const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
                    resolve(publicUrl);
                }).catch(reject);
            });

            const fileReadStream = createReadStream(filePath);
            fileReadStream.on('error', (error) => reject(error));
            fileReadStream.pipe(blobStream);

        });
    }

    async uploadFileToGCS(file: Express.Multer.File): Promise<string> {
        const bucket = storage.bucket(bucketName);
        const fileName = `${Date.now()}-${file.originalname}`;
        const fileUpload = bucket.file(fileName);
    
        return new Promise((resolve, reject) => {
            const blobStream = fileUpload.createWriteStream({
                metadata: {
                    contentType: file.mimetype,
                },
            });
    
            blobStream.on('error', error => reject(error));
            blobStream.on('finish', () => {
                const options = {
                    version: 'v4' as 'v4', // Explicitly tell TypeScript that version is 'v4' and not just any string
                    action: 'read' as const, // 'as const' asserts that 'read' is a literal type
                    expires: Date.now() + 15 * 60 * 1000, // Set the signed URL to expire in 15 minutes
                };
    
                fileUpload.getSignedUrl(options)
                    .then(signedUrls => {
                        resolve(signedUrls[0]); // Return the signed URL
                    })
                    .catch(err => {
                        console.error('Error creating signed URL:', err);
                        reject(`Could not create signed URL: ${err.message}`);
                    });
            });
    
            const fileReadStream = createReadStream(join(__dirname, '../../uploads', file.filename));
            fileReadStream.on('error', error => reject(error));
            fileReadStream.pipe(blobStream);
        });
    }
  
}
