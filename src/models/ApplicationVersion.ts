// 应用镜像
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User";
import { Application } from "./Application";

@Entity()
export class ApplicationVersion {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Application, application => application.versions)
    application: Application;

    @Column({ type: 'varchar', length: 255 })
    configPath: string;

    @ManyToOne(() => User)
    creator: User;
    
    @CreateDateColumn({ type: 'timestamp' })
    createdTime: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedTime: Date;
}