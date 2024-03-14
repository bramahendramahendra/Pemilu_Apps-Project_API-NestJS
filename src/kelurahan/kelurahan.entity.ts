import { Kecamatan } from 'src/kecamatan/kecamatan.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('kelurahan')
export class Kelurahan {
    @PrimaryGeneratedColumn({ 
        type: 'int', 
        unsigned: true 
    })
    id: number;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_kecamatan: number;

    @Column({ 
        type: 'varchar', 
        length: 25, 
        charset: 'utf8mb4', 
        collation: 'utf8mb4_unicode_ci', 
        nullable: true, 
        default: null 
    })
    nama: string;

    @CreateDateColumn({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'NULL',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'NULL',
    })
    updated_at: Date;

    @ManyToOne(() => Kecamatan, kecamatan => kecamatan.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_kecamatan' })
    kecamatan: Kecamatan;
}