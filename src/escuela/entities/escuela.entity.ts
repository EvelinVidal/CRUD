import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "escuela"})

export class Escuela {
    // 1. atributos
@PrimaryGeneratedColumn()
id:number;

@Column()
nombre:string;

@Column()
domicilio:string;
    // 2. constructor
constructor(nombre:string, domicilio:string){
    nombre = this.nombre;
    domicilio = this.domicilio;
}
    // 3. métodos
public getId(): number {
    return this.id;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string) {
    this.nombre = nombre;
  }
  public getDomicilio(): string {
    return this.domicilio;
  }
  public setDomicilio(domicilio: string) {
    this.domicilio = domicilio;
  }
}
