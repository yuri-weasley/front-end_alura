import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "email@mail.com"}
  ];

  constructor() {
    // Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    // Na primeira execução, o localStorage estará vazio, logo this.contatos será substituido por null e ocerrerá o erro...
    if (contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || null;
    }
    
    // Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));

   }

   obterContatos() {
    return this.contatos;
   }

   salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
   }
}
