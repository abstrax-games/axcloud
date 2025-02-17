// 产品
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User";
import { CloudServer } from "./CloudServer";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "text" })
    description: string;

    @ManyToOne(() => CloudServer, server => server.products)
    server: CloudServer;

    @Column({ default: 1 })
    cpu: number;

    @Column({ default: 1024 }) // 默认1024MB
    memory: number;

    @Column({ default: 5 }) // 默认5GB
    disk: number;

    @Column({ default: 1 }) // 默认5GB
    sqlSize: number;

    @Column({ default: 1 }) // 默认1Mbps
    bandwidth: number;

    @ManyToOne(() => User)
    creator: User;
    
    @Column({ default: 0})
    remain: number;

    @Column({ default: false })
    available: boolean;

    @Column({ default: 0 })
    price: number;

    // 最后修改的用户
    @Column({ default: 'user' })
    lastUpdateUser: string;

    // 创建时间和最后修改时间，用Unix时间戳表示
    @CreateDateColumn({ type: 'timestamp' })
    createTime: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateTime: Date;
}