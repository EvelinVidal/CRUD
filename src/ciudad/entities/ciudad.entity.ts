import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ciudad' })
export class Ciudad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
// constructor 
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  // getters y setters -> p.ej. los usamos en el servicio para create, obtenemos el nombre. No es mala práctica ponerlos
  public getId(): number {
    return this.id;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }
}
//la tabla se debe importar en el modulo de la entidad. ciudad.module.ts
// para armar las tablas con estos getters y setters basta pero si hay cosas más complejas se puede usar protectec, private..
