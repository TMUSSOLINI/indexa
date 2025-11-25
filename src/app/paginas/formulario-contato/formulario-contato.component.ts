import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css',
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Thiago'),
      telefone: new FormControl('11 1111 1111'),
      email: new FormControl('mamama@gmail.com'),
      aniversario: new FormControl('31/03/1994'),
      redes: new FormControl('google.com'),
      observacoes: new FormControl('teste do teste'),
    });
  }

  salvarContato() {
    console.log(this.contatoForm.value);
  }

  cancelar() {
    console.log('Submissao cancelada!')
  }
}
