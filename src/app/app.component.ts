import { Component } from '@angular/core';
import { UserData } from './interface';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usersData: UserData[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {}
}
 