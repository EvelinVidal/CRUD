import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { ClaseModule } from './clase/clase.module';
import { ProfesorModule } from './profesor/profesor.module';
import { EscuelaModule } from './escuela/escuela.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { AsistenciaModule } from './asistencia/asistencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type":"mysql",
      "host":"localhost",
      "port":3306,
      "username":"root",
      "password":"Misql8",
      "database":"colegio",
      "entities":["dist/**/**.entity{.ts,.js}"],
      "synchronize":true}), // sincroniza en tiempo real los cambios de la base de datos. Si trabajamos en false esos datos se borran. true -> modo desarrollador
    CiudadModule,
    ClaseModule,
    ProfesorModule,
    EscuelaModule,
    EstudianteModule,
    AsistenciaModule // importo modulo ciudad
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}