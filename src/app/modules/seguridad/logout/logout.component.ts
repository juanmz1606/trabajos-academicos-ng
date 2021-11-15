import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionData } from 'src/app/models/session-data.model';
import { LocalStorageService } from 'src/app/services/compartido/local-storage.service';
import { SeguridadService } from 'src/app/services/compartido/seguridad.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.localStorageService.removeSessionData();
    this.servicioSeguridad.RefreshSessionData(new SessionData());
    this.router.navigate(["/home"])
  }

}
