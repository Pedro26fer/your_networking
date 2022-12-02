import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { v4 as uuid} from 'uuid'
import { Contacts } from './contacts.entity';


@Entity()
export class Clients{

    @PrimaryGeneratedColumn('uuid')
    readonly id!: string


    @Column()
    name!: string;


    @Column()
    emails!: string


    @Column()
    registerDate!: string;


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