// 产品
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class CloudServer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    serverIp: string;

    @Column({ type: "varchar", length: 255 })
    area: string;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "text" })
    description: string;

    @ManyToOne(() => User)
    creator: User;

    @OneToMany(() => Product, product => product.server)
    products: Product[];

    @Column({ default: false })
    available: boolean;

    // 创建时间和最后修改时间，用Unix时间戳表示
    @CreateDateColumn({ type: 'timestamp' })
    createTime: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateTime: Date;
}