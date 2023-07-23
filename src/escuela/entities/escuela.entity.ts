import { Hijo } from "src/hijos/entities/hijo.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";



@Entity('trabajador')
export class Escuela {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;

    @Column('text')
    apellidos: string;

    @Column('text')
    matricula: string;

    @Column('text')
    puesto: string;
    
    @Column('text')
    foto: string;

    //Relacion trabajador-alumnno
    @OneToMany(()=>Hijo, (h)=>h.trabajador)
    hijos: Hijo[]
    
}
