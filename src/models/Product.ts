// 产品
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, JoinColumn } from "typeorm"
import { ProductGroup } from "./ProductGroup";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: "" })
    creator: string;
    
    @Column({ default: 0})
    remain: number;

    @Column({ default: false })
    available: boolean;

    @ManyToOne(() => ProductGroup, (group) => group.products)
    @JoinColumn()
    group: ProductGroup;

    // 最后修改的用户
    @Column({ default: 'user' })
    lastUpdateUser: string;

    // 创建时间和最后修改时间，用Unix时间戳表示
    @Column()
    createTime: Date;

    @Column()
    updateTime: Date;
}