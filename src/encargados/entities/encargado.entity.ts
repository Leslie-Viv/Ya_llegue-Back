export class Encargado {}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn()
    id:number;
    @Column('text')
    nombre:string;
    @Column('text')
    apellidos:string;
    @Column('text')
    foto:string;

}
