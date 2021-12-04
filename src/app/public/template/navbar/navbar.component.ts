import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionData } from 'src/app/models/session-data.model';
import { SeguridadService } from 'src/app/services/compartido/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  session: boolean = false;

  subscription: Subscription = new Subscription();

  constructor(
    private servicioSeguridad: SeguridadService
    ) {

     }

  ngOnInit(): void {
    this.subscription = this.servicioSeguridad.GetSessionStatus().subscribe({
      next: (data: SessionData) => {
        this.session = data.isLoggedIn;
      },
      error: (err) => {
        
      }
    });
  }

}
