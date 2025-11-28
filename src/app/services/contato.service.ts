import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420', email: 'email@emal.com' },
  ]; // Lista padrão para a primeira inicialização

  constructor() {
    const contatosLocalStorageString = localStorage.getItem('contatos');

    // Se o Local Storage retornar null, contatos obtidos será null.
    const contatosObtidos = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    // Se contatosObtidos for null, ele usa a lista padrão (this.contatos, que tem 'Ana').
    // O operador de Coalescência Nula (??) é ideal aqui.
    // Use Array.isArray para garantir que o que foi lido seja um array válido.
    this.contatos =
      (Array.isArray(contatosObtidos) ? contatosObtidos : null) ??
      this.contatos; // Salva a lista carregada (que agora é um array) no localStorage.

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos(): Contato[] {
    // Definir o tipo de retorno explicitamente
    const contatosDoStorage = localStorage.getItem('contatos');
    // Garante que o retorno é um array mesmo se JSON.parse("null") for executado.
    const contatos = contatosDoStorage ? JSON.parse(contatosDoStorage) : [];

    // Confirma que é um array, caso contrário, retorna um array vazio.
    return Array.isArray(contatos) ? contatos : [];
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
