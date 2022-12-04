import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { v4 as uuid } from 'uuid'


@Entity()
export class Contacts{

    @PrimaryGeneratedColumn('uuid')
    readonly id!: string


    @Column()
    name!: string


    @Column({unique: true, nullable: false})
    email!: string


    @Column({unique: true, nullable: false})
    phone!: string


    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}