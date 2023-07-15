import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity('escuela')
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
    
}
