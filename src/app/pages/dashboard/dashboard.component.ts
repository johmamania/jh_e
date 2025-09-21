import { Component, Inject, Input, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../../environments/environment.development';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { DatePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  username: string;
  idESave:number=1;

 imagenes = Array.from({ length: 50 }, (_, i) => ({ id: i + 1 }));
 urls: { [id: number]: string } = {}; // mapa id -> url blob
  constructor(private router: Router) {}



  ngOnInit(): void {

  }

@Input() title: string = 'Para ti';
@Input() message: string = 'Te dedico estas flores amarillas. 🌼💛';
@Input() showShare: boolean = true;





    mostrarMensaje(id: number) {
    const mensaje = this.mensajes.get(id) || 'Eres increíble, mi amor ❤️';

    Swal.fire({
      title: `Te amo Mi vida`,
      text: mensaje,

      confirmButtonText: 'Aceptar',
      background: 'linear-gradient(120deg, #ffd700, #ffa500)', // fondo dorado
      color: '#5a3e00',
      confirmButtonColor: '#ffa500',
    });
  }





mensajes = new Map<number, string>([
  [1, 'Eres mi sol en un día nublado. 🌞'],
  [2, 'Tu sonrisa ilumina mi vida. 😊'],
  [3, 'Cada flor es un suspiro de mi amor por ti. 🌼'],
  [4, 'Contigo, cada día es una bendición. 💖'],
  [5, 'Gracias por ser mi fuerza y mi calma. 🌿'],
  [6, 'Juntos podemos conquistar cualquier montaña. 🏔️'],
  [7, 'Eres mi apoyo incondicional, mi hogar seguro. 🏡'],
  [8, 'Tu amor me inspira a ser mejor cada día. ✨'],
  [9, 'En ti encuentro paz y motivación. ☮️'],
  [10, 'Gracias por creer siempre en mí. 🙏'],
  [11, 'Nuestro amor es un viaje sin fin. 🌍'],
  [12, 'Eres mi alegría en los días grises. ☀️'],
  [13, 'Contigo, todo es posible. 💪'],
  [14, 'Tu abrazo es mi refugio favorito. 🤗'],
  [15, 'Me haces sentir amado y valioso. 💝'],
  [16, 'Eres la razón de mis sonrisas más sinceras. 😊'],
  [17, 'Nuestro amor crece con cada desafío. 🌱'],
  [18, 'Juntos somos invencibles. 🛡️'],
  [19, 'Tu confianza me impulsa a alcanzar mis sueños. 🌠'],
  [20, 'Gracias por ser mi compañero de vida. 🤝'],
  [21, 'Eres mi luz cuando todo parece oscuro. 💡'],
  [22, 'Nuestro amor es la fuerza que nos mueve. ⚡'],
  [23, 'Contigo, el camino es más hermoso. 🌸'],
  [24, 'Gracias por ser mi roca y mi inspiración. 🪨'],
  [25, 'Cada día a tu lado es un regalo. 🎁'],
  [26, 'Eres mi motivación para seguir adelante. 🏃‍♂️'],
  [27, 'Juntos superamos cualquier obstáculo. 🚧'],
  [28, 'Tu amor me da alas para volar. 🕊️'],
  [29, 'Gracias por hacerme sentir especial siempre. 🌟'],
  [30, 'Eres mi alegría constante. 🎉'],
  [31, 'Nuestro amor es eterno y verdadero. ♾️'],
  [32, 'Contigo aprendo a amar sin miedo. ❤️‍🔥'],
  [33, 'Tu presencia es mi paz. 🧘‍♂️'],
  [34, 'Gracias por ser mi apoyo en cada paso. 👣'],
  [35, 'Eres mi mejor amigo y mi amor. 💑'],
  [36, 'Juntos creamos recuerdos inolvidables. 📸'],
  [37, 'Tu sonrisa es mi sol diario. 🌞'],
  [38, 'Gracias por aceptarme tal como soy. 🤗'],
  [39, 'Eres mi mayor bendición. 🙌'],
  [40, 'Nuestro amor es un hogar lleno de luz. 🏠'],
  [41, 'Contigo, la vida es más dulce. 🍯'],
  [42, 'Gracias por ser mi apoyo en la tormenta. ⛈️'],
  [43, 'Eres mi inspiración constante. 🎨'],
  [44, 'Juntos podemos lograr lo imposible. 🚀'],
  [45, 'Tu amor me llena el alma. 💫'],
  [46, 'Gracias por hacerme sentir completo. 🧩'],
  [47, 'Eres mi fuerza en los momentos difíciles. 🦾'],
  [48, 'Nuestro amor es la luz que guía mi camino. 🔦'],
  [49, 'Contigo a mi lado, todo es mejor. 💕'],
  [50, 'Siempre juntos, siempre tú y yo. ❤️']
]);


salir(){
   this.router.navigate(['login']);

}

}
