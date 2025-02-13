// 产品组
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, Index, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class ProductGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn()
    creator: User;

    @Column({ type: "text" })
    description: string;

    @OneToMany(() => Product, (product) => product.group)
    @JoinColumn()
    products: Product[];

    @Column()
    createTime: Date;

    @Column()
    updateTime: Date;
}