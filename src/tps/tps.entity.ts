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
        default: () => 'CURRENT_TIMESTAMP(6)',
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

    @ManyToOne(() => Kelurahan, kelurahan => kelurahan.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_kelurahan' })
    kelurahan: Kelurahan;
}
