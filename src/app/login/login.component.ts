import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  constructor(private service: DataService, private router: Router) {}
  logIn() {
    if (this.service.logIn(this.login, this.password)) {
      this.router.navigateByUrl('main');
    } else {
      alert('Невалидные значения');
    }
  }
}
