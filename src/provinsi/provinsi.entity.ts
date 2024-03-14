import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('provinsi')
export class Provinsi {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
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
}