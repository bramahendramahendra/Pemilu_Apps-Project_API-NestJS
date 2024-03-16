import { Kandidat } from 'src/kandidat/kandidat.entity';
import { TPS } from 'src/tps/tps.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('saksi')
export class Saksi {
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
        nullable: true
    })
    nama: string;

    @Column({
        type: 'varchar', 
        length: 15, 
        nullable: true ,
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        default: null  

    })
    kontak: string;

    @Column({
        type: 'int',
        unsigned: true
    })
    id_tps: TPS;

    @Column({
        type: 'int',
        unsigned: true
    })
    id_kandidat: Kandidat;

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

    @ManyToOne(() => TPS, (tps) => tps.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_tps' })
    tps: TPS;

    @ManyToOne(() => Kandidat, (kandidat) => kandidat.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_kandidat' })
    kandidat: Kandidat;
}
