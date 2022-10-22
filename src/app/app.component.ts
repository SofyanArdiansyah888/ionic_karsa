import { Component } from '@angular/core';
import { AuthenticationService } from './services/auth/authentication.service';
import { DatabaseService } from './services/database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(auth: AuthenticationService,
    databaseService: DatabaseService) {
     // REDIRECT LOGIN
     const token = databaseService.getAccessToken();
     if (token != null) {
       auth.setLoggedIn(true);
     }
  }
}
