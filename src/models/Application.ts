// 应用镜像
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from "typeorm"
import { User } from "./User";
import { ApplicationVersion } from "./ApplicationVersion";

@Entity()
@Index('idx_name', ['name'])
export class Application {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @ManyToOne(() => User)
    creator: User;
    
    @CreateDateColumn({ type: 'timestamp' })
    createdTime: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedTime: Date;

    @OneToMany(() => ApplicationVersion, version => version.application)
    versions: ApplicationVersion[];

    @Column({ type: 'varchar', length: 255, default: '' })
    tags: string;

    @Column({ type: "varchar", length: 255 })
    imageName: string;

    @Column({ type: "varchar", length: 255, default: "" })
    icon: string;
}