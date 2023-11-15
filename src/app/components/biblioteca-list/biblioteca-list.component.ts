import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { BibliotecaService } from "./src/app/services/biblioteca.service"

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class BibliotecaListComponent implements OnInit {

  bibliotecas: any[] = [];

  nombre: string = '';
  direccion: string = '';
  ciudad: string = '';

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    // Llamada a la función que obtiene las bibliotecas al inicializar el componente
    this.obtenerBibliotecas();
  }

  obtenerBibliotecas() {
    this.bibliotecaService.getBlibliotecas().subscribe(
      (bibliotecas) => {
        console.log('Bibliotecas:', bibliotecas);
        this.bibliotecas = bibliotecas;
      },
      (error) => {
        console.error('Error al obtener bibliotecas:', error);
      }
    );
  }

  agregarNuevaBiblioteca() {
    this.bibliotecaService.agregarBiblioteca(this.nombre, this.direccion, this.ciudad).subscribe(
      (response) => {
        console.log('Biblioteca agregada:', response);
        // Puedes realizar acciones adicionales después de agregar la biblioteca
        // Por ejemplo, volver a cargar la lista de bibliotecas
        this.obtenerBibliotecas();
      },
      (error) => {
        console.error('Error al agregar biblioteca:', error);
      }
    );
  }
}
