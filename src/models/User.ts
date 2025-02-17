import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm"
import { Resource } from "./Resource"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    phone: string

    @Column({ default: 0 })
    balance: number

    @OneToMany(() => Resource, resource => resource.owner)
    resources: Resource[]

    @OneToOne(() => User, { nullable: true })
    inviter: User

    @Column({ default: 1023 })
    privilege: number

    @Column({ default: "127.0.0.1" })
    registerIP: string

    @Column()
    registerTime: Date
}