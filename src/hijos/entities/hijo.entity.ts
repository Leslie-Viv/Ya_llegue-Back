import { Encargado } from "src/encargados/entities/encargado.entity"
import { Escuela } from "src/escuela/entities/escuela.entity"
import { Padre } from "src/padres/entities/padre.entity"
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

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
    @Column('text')
    foto: string;
    
    //Relaciones
    //relacion hijo-padre
    @ManyToOne(()=>Padre, (p)=>p.hijos)
    padre: Padre
    //relacion hijo-encargado
    @ManyToMany(()=>Encargado, (e)=>e.hijos)
    encargados: Encargado[]
    //relacion hijo-trabajador (maestro)
    @ManyToOne(()=>Escuela, (es)=>es.hijos)
    escuela: Escuela
}
