import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authentication = {
    email: "test",
    password: "test"
  }

  private log: boolean = false;

  constructor(private router: Router) { }

  login(email: string, password: string): Observable<boolean> {
    if (email === this.authentication.email && password === this.authentication.password) {
      this.log = true;
      return of(true)
    } else {
      this.log = false;
      return of(false);
    }
  }

  canActivate(): boolean {
    if (!this.log) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
