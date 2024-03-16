import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('partai')
export class Partai {
    @PrimaryGeneratedColumn({ 
        type: 'int', 
        unsigned: true 
    })
    id: number;

    @Column({ 
        type: 'varchar', 
        length: 25, 
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null 
    })
    nama: string;

    @Column({ 
        type: 'varchar',
        length: 2000,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null 
    })
    logo: string;

    @Column({ 
        type: 'varchar',
        length: 191,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null 
    })
    logo_mime: string;

    @Column({ 
        type: 'int',
        nullable: true,
        default: null
    })
    logo_size: number;

    @Column({ 
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null 
    })
    deskripsi: string;

    @CreateDateColumn({ 
        type: 'timestamp', 
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)' 
    })
    created_at: Date;

    @UpdateDateColumn({ 
        type: 'timestamp', 
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)', 
        onUpdate: 'CURRENT_TIMESTAMP(6)' 
    })
    updated_at: Date;
}
