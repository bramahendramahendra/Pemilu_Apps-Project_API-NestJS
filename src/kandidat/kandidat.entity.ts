import { Partai } from 'src/partai/partai.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('kandidat')
export class Kandidat {
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
    foto: string;

    @Column({ 
        type: 'varchar',
        length: 191, 
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci', 
        nullable: true,
        default: null
    })
    foto_mime: string;

    @Column({ 
        type: 'int', 
        nullable: true, 
        default: null 
    })
    foto_size: number;

    @Column({ 
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci', 
        nullable: true,
        default: null
    })
    biografi: string;

    @Column({
        type: 'int',
        unsigned: true
    })
    id_partai: Partai;

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

    @ManyToOne(() => Partai, (partai) => partai.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_partai' })
    partai: Partai;
}
