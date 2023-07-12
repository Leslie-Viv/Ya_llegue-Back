import { Hijo } from "src/hijos/entities/hijo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('padre')
export class Padre {
@PrimaryGeneratedColumn()
id: number
@Column('text')
nombre: string
@Column('text')
apellidos: string

//foto pendiente
//Relaciones
@OneToMany(()=>Hijo, (h)=>h.padre)
hijos: Hijo[]

//Agregar relaciones con encargados
}
