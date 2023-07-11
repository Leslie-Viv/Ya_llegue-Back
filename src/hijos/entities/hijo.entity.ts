import { Padre } from "src/padres/entities/padre.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('hijo')
export class Hijo {
    @PrimaryGeneratedColumn()
    id: number
    @Column('text')
    nombre: string
    @Column('text')
    apellidos: string
    @Column('text')
    grupo: string
    @Column('text')
    matricula: string
    @Column('text')
    observaciones: string
    
    //foto pendiente
    //Relaciones
    @ManyToOne(()=>Padre, (p)=>p.hijos)
    padre: Padre

}
