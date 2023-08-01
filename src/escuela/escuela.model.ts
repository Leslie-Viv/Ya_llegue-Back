export class Escuela{
    id: number;
    nombre: string
    apellidos: string;
    matricula: string;
    puesto: string;
    foto : string;

    constructor(data: Partial<Escuela>){
        Object.assign(this, data);
    }
}