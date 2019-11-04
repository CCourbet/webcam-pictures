import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authentication = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });
  public hide: boolean = true;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const auth = this.authentication.value;
    if (auth.name && auth.password) {
      this.authenticationService.login(auth.name, auth.password)
        .subscribe(
          (isLogin) => {
            if (isLogin) {
              this.router.navigateByUrl('/');
            } else {
              alert("Credentials not valid");
            }
          }
        );
    }
  }

}
