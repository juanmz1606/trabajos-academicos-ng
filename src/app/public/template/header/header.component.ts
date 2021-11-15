import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionData } from 'src/app/models/session-data.model';
import { SeguridadService } from 'src/app/services/compartido/seguridad.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_data:string = "";
  subscription: Subscription = new Subscription();

  constructor(private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    this.subscription = this.servicioSeguridad.GetSessionStatus().subscribe({
      next: (data: SessionData) => {
        if (data.usuario?.nombre) {
          this.user_data = data.usuario?.nombre;
        }
      },
      error: (err) => {
        
      }
    });

  }

}
