import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  async login() {
    const swalWithCustomTitle = Swal.mixin({
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        htmlContainer: 'custom-swal-html-container',
        confirmButton: 'custom-swal-confirm-button',
        cancelButton: 'custom-swal-cancel-button'
      },
      didOpen: () => {
        Swal.showLoading();
        Swal.getPopup().style.background = 'linear-gradient(120deg,rgba(39, 12, 192, 1),rgba(6, 5, 68, 1))';
        Swal.getPopup().style.color = '#fff';
        Swal.getPopup().style.borderRadius = '15px';
        Swal.getPopup().style.boxShadow = '0 20px 30px rgba(0,0,0,0.4)';
        document.querySelector('.custom-swal-title').textContent = 'Iniciando Sesión';
      }
    });

    // Mostrar SweetAlert de carga
    swalWithCustomTitle.fire({
      html: '<div style="font-family: Arial, sans-serif; font-size: 22px; color: #fff;">Verificando credenciales...</div>',
      timerProgressBar: true,
      allowOutsideClick: false
    });

    // Simular verificación de login
    const isLoginSuccessful = await this.login1();

    // Cerrar SweetAlert de carga
    Swal.close();

    if (isLoginSuccessful) {
      this.router.navigate(['inicio']);
      Swal.fire('Bienvenido mi Amor', `${this.usuario}`, 'success');
    } else {
      Swal.fire('Alerta', 'Usuario o contraseña incorrectos', 'warning');
    }
  }

  login1(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.usuario == "EVELIN" && this.password == "140724") {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1500); // Simula retardo de red
    });
  }

  convertirAMayusculas() {
    if (this.usuario) {
      this.usuario = this.usuario.toUpperCase();
    }
  }
}
