import { Component } from '@angular/core';
import { JsonPlaceholderService } from '../json-placeholder.service';
import { User } from '../constants/user';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-teste-json-placeholder',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './teste-json-placeholder.component.html',
  styleUrl: './teste-json-placeholder.component.scss'
})
export class TesteJsonPlaceholderComponent {
  userForm: FormGroup;

  constructor(private service: JsonPlaceholderService,  private fb: FormBuilder){
    this.userForm = this.fb.group({
      title: [''],
      body: [''],
      userId: ['']
    });
  }

  users: User[] = [];
  public buscaUsuarios(): void {
    this.service.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Erro ao obter usuários:', error);
      },
      complete: () => {
        console.log('Requisição completa');
      }
    });
  }

  id: number = 0;
  title: string = '';
  body: string = '';
  userId: number = 0;
  public cadastrarUsuario(): void {
    const userData = this.userForm.getRawValue();
    this.service.postUser(userData).subscribe({
      next: (res) => {
        alert("Sucesso!");
        this.id = res.id;
        this.userId = res.userId;
        this.title = res.title;
        this.body = res.body;
      },
      error: (err) => {
        alert("Não foi possível");
      }
    });
  }

}
