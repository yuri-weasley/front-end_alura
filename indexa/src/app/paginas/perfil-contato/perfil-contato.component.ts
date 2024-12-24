import { Component } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { CommonModule } from '@angular/common';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@mail.com',
    aniversario: '12/10/1990',
    redes: ''
  }
}
