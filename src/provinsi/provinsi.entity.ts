import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Provinsi {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id'
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 25,
        nullable: true,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        default: () => 'NULL',
    })
    name: string;

    @CreateDateColumn({
        type: 'timestamp',
        nullable: true,
        default: () => 'NULL',
        name: 'created_at'
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        nullable: true,
        default: () => 'NULL',
        name: 'updated_at'
    })
    updated_at: Date;
}