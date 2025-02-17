// 用户购买的产品资源
import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, ManyToOne, ManyToMany } from "typeorm"
import { Application } from "./Application"
import { User } from "./User";
import { CloudServer } from "./CloudServer";
import { Product } from "./Product";
import { Domain } from "./Domain";

@Entity()
export class Resource {
    // 主键，自增
    @PrimaryGeneratedColumn()
    id: number

    // Application
    @OneToOne(() => Application)
    application: Application;

    // Server
    @OneToOne(() => CloudServer)
    server: CloudServer;

    // Product
    @OneToOne(() => Product)
    product: Product;

    // 用户ID
    @ManyToOne(() => User)
    owner: User;

    @ManyToMany(() => Domain, domain => domain.resources)
    domains: Domain[];

    // 购买时间
    @Column({ type: 'timestamp' })
    buyTime: Date;

    // 过期时间
    @Column({ type: 'timestamp' })
    expireTime: Date;
}