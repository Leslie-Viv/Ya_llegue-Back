import { Hijo } from "src/hijos/entities/hijo.entity";
import { Padre } from "src/padres/entities/padre.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('encargado')
export class Encargado {

    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    nombre:string;

    @Column('text')
    apellidos:string;

    @Column('text')
    foto:string;
    @Column('text',{unique:true})
    email:string
    @Column('text',{select:false})
    password:string

     //Relaciones
    /*  @ManyToOne(()=>Padre, (p)=>p.encargado)
    padre: Padre

    @OneToMany(()=>Hijo, (h)=>h.encargado)
    hijos: Hijo[] */

    //Relaciones
    //relacion encargado-padre
    @ManyToOne(()=>Padre,(p)=>p.encargados)
    padre:Padre
    //relacion encargado-hijo
    @ManyToMany(()=>Hijo, (h)=>h.encargados)
    hijos: Hijo[]
}


