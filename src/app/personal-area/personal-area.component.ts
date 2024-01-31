import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Announcement, NewUser } from './../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css'],
})
export class PersonalAreaComponent implements OnInit {
  user: NewUser | null = null;
  name: string = '';
  login: string = '';
  number: string | null = null;
  age: number | null = null;
  id: number | null = null;
  mail: string = '';
  password: string = '';

  favorites: Announcement[] = [];
  constructor(private Service: DataService, private router: Router) {}
  ngOnInit(): void {
    if (!this.Service.checkToken()) {
      this.router.navigateByUrl('');
    }

    this.user = this.Service.getCurrentUser();
    if (this.user) {
      this.login = this.user.login ? this.user.login : '';
      this.name = this.user.name ? this.user.name : '';
      this.number = this.user.number ? this.user.number : '';
      this.mail = this.user.mail ? this.user.mail : '';
      this.password = this.user.password ? this.user.password : '';
      this.favorites = this.user.favorites ? this.user.favorites : [];
      this.id = this.user.id ? this.user.id : null;
      this.age =
        this.user.age !== undefined && this.user.age !== null
          ? this.user.age
          : null;
    }
  }
  update() {
    if (this.id) {
      const newUser = {
        id: this.id,
        password: this.password,
        login: this.login,
        name: this.name,
        number: this.number,
        age: this.age,
        mail: this.mail,
        favorites: this.favorites,
      };
      this.id && this.Service.updateUserData(this.id, newUser);
      alert('Изменено');
    }
  }
}
