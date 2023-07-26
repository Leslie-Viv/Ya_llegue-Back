import { Hijo } from "src/hijos/entities/hijo.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";



@Entity('escuela')
export class Escuela {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    nombre: string

    @Column('text')
    apellidos: string

    @Column('text', {select: false})
    password: string;

    @Column('bool',{default:true})
    estado: boolean;

    @Column('text')
    matricula: string

    @Column('text')
    puesto: string
    
    @Column('text')
    foto: string

        //Relacion trabajador-alumnno
        @OneToMany(()=>Hijo, (h)=>h.escuela)
        hijos: Hijo[]
}
