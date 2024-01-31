import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserData, Announcement } from './../interface';
@Component({
  selector: 'app-goal-user',
  templateUrl: './goal-user.component.html',
  styleUrls: ['./goal-user.component.css'],
})
export class GoalUserComponent implements OnInit {
  user: UserData | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.service.checkToken()) {
      this.router.navigateByUrl('');
    }
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.service.getUserById(id).subscribe(
        (user) => {
          this.user = user;
          if (this.user === null) {
            console.error('Не найдено');
          }
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
