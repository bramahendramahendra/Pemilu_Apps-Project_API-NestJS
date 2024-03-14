import { Kelurahan } from 'src/kelurahan/kelurahan.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tps')
export class TPS {
    @PrimaryGeneratedColumn({ 
        type: 'int', 
        unsigned: true 
    })
    id: number;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_kelurahan: number;

    @Column({ 
        type: 'varchar', 
        length: 25, charset: 'utf8mb4', 
        collation: 'utf8mb4_unicode_ci', 
        nullable: true, 
        default: null 
    })
    nama: string;

    @Column({ 
        type: 'text', 
        charset: 'utf8mb4', 
        collation: 'utf8mb4_unicode_ci', 
        nullable: true 
    })
    alamat: string;

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

    @ManyToOne(() => Kelurahan, kelurahan => kelurahan.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_kelurahan' })
    kelurahan: Kelurahan;
}
