// 用户购买的产品资源
import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity()
export class Resource {
    // 主键，自增
    @PrimaryGeneratedColumn()
    id: number
}