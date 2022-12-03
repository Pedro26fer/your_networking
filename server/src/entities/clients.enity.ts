import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm';
import { v4 as uuid} from 'uuid'
import { Contacts } from './contacts.entity';


@Entity()
export class Clients{

    @PrimaryGeneratedColumn('uuid')
    readonly id!: string


    @Column({nullable: false})
    name!: string;


    @Column({unique: true, nullable: false})
    email!: string


    @CreateDateColumn()
    registerDate!: Date;


    @ManyToMany(type => Contacts, {
        eager: true,
    })
    @JoinTable()
    contacts!: Contacts[];




    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}