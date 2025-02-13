// 产品组
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, Index, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class ProductGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    creator: User;

    @Column({ type: "text" })
    description: string;

    @ManyToOne(() => ProductGroup, { nullable: true })
    parentGroup: ProductGroup;

    @OneToMany(() => Product, (product) => product.group)
    products: Product[];

    @Column()
    createTime: Date;

    @Column()
    updateTime: Date;
}