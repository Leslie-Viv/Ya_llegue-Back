import { Encargado } from "src/encargados/entities/encargado.entity";
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

    @Column('text')
    foto: string

    @Column('text', {unique: true})
    username: string

    @Column('text')
    password: string

    
//Relaciones
//Relacion padre-hijo   
    @OneToMany(()=>Hijo, (h)=>h.padre)
    hijos: Hijo[]
    //relacion padre-encargado
    @OneToMany(()=>Encargado, (e)=>e.padre)
    encargados: Encargado[]
}
