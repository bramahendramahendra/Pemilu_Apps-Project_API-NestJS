import { Kabupaten } from "src/kabupaten/kabupaten.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('kecamatan')
export class Kecamatan {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
    })
    id: number;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_kabupaten: number;

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

    @ManyToOne(() => Kabupaten, kabupaten => kabupaten.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_kabupaten' })
    kabupaten: Kabupaten;
}