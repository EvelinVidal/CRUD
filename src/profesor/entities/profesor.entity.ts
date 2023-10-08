import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'profesor' }) // decorador entity, typeORM lo reconoce como entidad.
export class Profesor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  @IsNotEmpty() // -> no puede estar vacío, not empty. 
  apellido: string;

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  public getId(): number {
    return this.id;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }
  public getApellido(): string {
    return this.apellido;
  }
  public setApellido(apellido: string) {
    this.apellido = apellido;
  }
}


