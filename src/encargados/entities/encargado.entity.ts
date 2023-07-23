import { Hijo } from "src/hijos/entities/hijo.entity";
import { Padre } from "src/padres/entities/padre.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('encargado')
export class Encargado {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    nombre: string

    @Column('text')
    apellidos: string

    @Column('text')
    foto: string

    //Relaciones
    //relacion encargado-padre
    @ManyToOne(()=>Padre,(p)=>p.encargados)
    padre:Padre
    //relacion encargado-hijo
    @ManyToMany(()=>Hijo, (h)=>h.encargados)
    hijos: Hijo[]
}
