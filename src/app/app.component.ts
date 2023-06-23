import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(this.formData);
  }
}