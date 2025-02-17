// 应用分类
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Index, ManyToMany } from "typeorm"
import { User } from "./User";
import { ApplicationVersion } from "./ApplicationVersion";
import { Application } from "./Application";

@Entity()
export class ApplicationCategory {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @ManyToMany(() => Application, application => application.categories)
    applications: Application[];

    @ManyToOne(() => User)
    creator: User;
    
    @CreateDateColumn({ type: 'timestamp' })
    createdTime: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedTime: Date;
}