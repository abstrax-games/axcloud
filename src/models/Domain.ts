// 产品
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm"
import { User } from "./User";
import { Resource } from "./Resource";

@Entity()
export class Domain {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    domain: string;

    @ManyToOne(() => User)
    creator: User;

    @ManyToMany(() => Resource, resource => resource.domains)
    resources: Resource[];

    // 创建时间和最后修改时间，用Unix时间戳表示
    @CreateDateColumn({ type: 'timestamp' })
    createTime: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateTime: Date;
}