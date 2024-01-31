import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { UserData } from './../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  usersData: UserData[] = [];
  ngOnInit(): void {
    
    this.dataService.getUserData().subscribe((data) => {
      this.usersData = data;
    });
  }
  constructor(private dataService: DataService, private router: Router) {}
  login: string = '';
  password: string = '';
  repPass: string = '';
  registr() {
    if (this.login.length > 2 && this.password.length > 2) {
      if (this.password == this.repPass) {
        const newUser = {
          id: new Date().getTime(),
          login: this.login,
          password: this.password,
        };
        console.log(this.dataService.getNewUsers());
        if (this.dataService.registration(newUser)) {
          console.log(this.dataService.getNewUsers());
          alert('Успешно зарегистрированы!');
          setTimeout(() => {
            this.router.navigateByUrl('');
          }, 1000);
        } else {
          alert('Такой логин уже есть');
        }
      } else {
        alert('Пароли не совпадают');
      }
    } else {
      alert('Минимальная длина логина и пароля = 3 символа');
    }
  }
}
