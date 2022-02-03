import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { environment } from "../../environments/environment";

@Component({
  selector: 'mds-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.sass']
})
export class AuthButtonComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService,) {}

  login() {
    this.auth.loginWithRedirect({ redirect_uri: environment.authRedirectUri })
  }

  logout() {
    this.auth.logout({ returnTo: environment.authLogoutUri })
  }

  signup() {
    this.auth.loginWithPopup({ redirect_uri: environment.authRedirectUri, screen_hint: "signup" });
  }

}
