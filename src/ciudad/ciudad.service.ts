import { Injectable } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CiudadService {
  private ciudades: Ciudad[] = []; // funcion que retorna los elementos de la tabla
  constructor(
    @InjectRepository(Ciudad) // -> inyecta un repositorio correspondiente a la entidad Ciudad.El repositorio se comunica con la base de datos, entidad y servicio.
    private ciudadRepository: Repository<Ciudad>,
  ) {}

  async findAllRaw(): Promise<Ciudad[]> { // se llama tipo de consulta raw.
    this.ciudades = [] // -> asi no acumula las ciudades. 
    let datos = await this.ciudadRepository.query('select * from ciudad'); // -> el repositorio permite la comunicacion con la base de datos
    // query permite hacer consultas
    datos.forEach((element) => {
      // por cada elemento que trae de la bd
      let ciudad: Ciudad = new Ciudad(element['nombre']); //-> creamos un nuevo objeto ciudad con los parametros de la tabla, en este caso solo necesitamos el nombre.
      this.ciudades.push(ciudad); //-> por cada ciudad que obtenemos, hacemos push y la agregamos,
    });
    return this.ciudades;
  }
// misma funcion usando los métodos del repositorio:
  async findAllOrm():Promise<Ciudad[]>{
    return await this.ciudadRepository.find(); //-> me devuelve los elementos en array y el tipo de dato (son objetos de tipo ciudad);
  }
}
