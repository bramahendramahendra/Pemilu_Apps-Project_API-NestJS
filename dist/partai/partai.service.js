"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartaiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const partai_entity_1 = require("./partai.entity");
const typeorm_2 = require("typeorm");
const gcloud_config_1 = require("../config/gcloud.config");
const path_1 = require("path");
const fs_1 = require("fs");
let PartaiService = class PartaiService {
    constructor(partaiRepository) {
        this.partaiRepository = partaiRepository;
    }
    async findAll() {
        const partai = await this.partaiRepository.find();
        if (!partai || partai.length === 0) {
            throw new common_1.NotFoundException(`Partai not found`);
        }
        return partai;
    }
    async findOne(id) {
        const partai = await this.partaiRepository.findOneBy({ id });
        if (!partai) {
            throw new common_1.NotFoundException(`Partai with ID "${id}" not found`);
        }
        return partai;
    }
    async findAllBySearch(search) {
        const queryBuilder = this.partaiRepository.createQueryBuilder('partai');
        if (search) {
            queryBuilder.andWhere('partai.nama LIKE :search OR partai.deskripsi LIKE :search', { search: `%${search}%` });
        }
        const partai = await queryBuilder.getMany();
        if (!partai || partai.length === 0) {
            throw new common_1.NotFoundException(`Partai not found`);
        }
        return partai;
    }
    async create(createPartaiDto, file) {
        try {
            const existing = await this.partaiRepository.findOne({
                where: { nama: createPartaiDto.nama },
            });
            if (existing) {
                throw new Error('Partai name already exists');
            }
            const partai = this.partaiRepository.create(createPartaiDto);
            if (file) {
                const fileUrl = await this.uploadFileToGCS(file);
                partai.logo = fileUrl;
                partai.logo_mime = file.mimetype;
                partai.logo_size = file.size;
            }
            await this.partaiRepository.save(partai);
            return partai;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async update(id, updatePartaiDto, file) {
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
    async remove(id) {
        try {
            await this.partaiRepository.delete(id);
        }
        catch (error) {
            if (error instanceof typeorm_2.QueryFailedError) {
                throw new Error('Cannot delete Partai as it is referenced by one or more districts');
            }
            throw error;
        }
    }
    async uploadFileToGCS_1(file) {
        const bucket = gcloud_config_1.storage.bucket(gcloud_config_1.bucketName);
        const fileName = `${Date.now()}-${file.originalname}`;
        const filePath = (0, path_1.join)(__dirname, '../../uploads', file.filename);
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
                    const publicUrl = `https://storage.googleapis.com/${gcloud_config_1.bucketName}/${fileName}`;
                    resolve(publicUrl);
                }).catch(reject);
            });
            const fileReadStream = (0, fs_1.createReadStream)(filePath);
            fileReadStream.on('error', (error) => reject(error));
            fileReadStream.pipe(blobStream);
        });
    }
    async uploadFileToGCS(file) {
        const bucket = gcloud_config_1.storage.bucket(gcloud_config_1.bucketName);
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
                    version: 'v4',
                    action: 'read',
                    expires: Date.now() + 15 * 60 * 1000,
                };
                fileUpload.getSignedUrl(options)
                    .then(signedUrls => {
                    resolve(signedUrls[0]);
                })
                    .catch(err => {
                    console.error('Error creating signed URL:', err);
                    reject(`Could not create signed URL: ${err.message}`);
                });
            });
            const fileReadStream = (0, fs_1.createReadStream)((0, path_1.join)(__dirname, '../../uploads', file.filename));
            fileReadStream.on('error', error => reject(error));
            fileReadStream.pipe(blobStream);
        });
    }
};
exports.PartaiService = PartaiService;
exports.PartaiService = PartaiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(partai_entity_1.Partai)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PartaiService);
//# sourceMappingURL=partai.service.js.map