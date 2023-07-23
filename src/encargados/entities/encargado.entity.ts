import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

     //Relaciones
    /*  @ManyToOne(()=>Padre, (p)=>p.encargado)
    padre: Padre

    @OneToMany(()=>Hijo, (h)=>h.encargado)
    hijos: Hijo[] */
}


