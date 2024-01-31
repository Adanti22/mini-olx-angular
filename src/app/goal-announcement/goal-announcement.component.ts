import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserData, Announcement } from './../interface';
@Component({
  selector: 'app-goal-announcement',
  templateUrl: './goal-announcement.component.html',
  styleUrls: ['./goal-announcement.component.css'],
})
export class GoalAnnouncementComponent implements OnInit {
  announcement: Announcement | null = null;
  userId: number | null = null;

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

      this.service.getAnnouncementById(id).subscribe(
        (announcement) => {
          this.announcement = announcement;
          console.log(`Announcement for ID ${id}:`, announcement);
        },
        (error: any) => {
          console.error(error);
        }
      );

      this.service.getUserIdByAnnouncementId(id).subscribe(
        (userId: number | null) => {
          this.userId = userId;
          console.log(`User ID for announcement ${id}: ${userId}`);
        },
        (error: any) => {
          console.error(error);
        }
      );
    });
  }
}
