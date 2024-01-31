import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Announcement } from '../interface';
import { map } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private service: DataService, private router: Router) {}
  announcements: Announcement[] = [];
  updatedAnnouncements: Announcement[] = [];
  valueDesc: string = '';
  valueName: string = '';

  ngOnInit(): void {
    if (!this.service.checkToken()) {
      this.router.navigateByUrl('');
    }
    this.service.getAnnouncments().subscribe(
      (announcements) => {
        this.announcements = announcements;
        this.updatedAnnouncements = this.announcements.map((item) => ({
          ...item,
        }));
      },
      (error) => {
        console.error(error);
      }
    );
  }
  search(type: string) {
    this.updatedAnnouncements = this.announcements.map((item) => ({ ...item }));
    if (type === 'byName') {
      this.valueDesc = '';
      this.updatedAnnouncements = this.updatedAnnouncements
        .map((item) => ({ ...item }))
        .filter((item) =>
          item.title.toLowerCase().includes(this.valueName.toLowerCase())
        );
    } else if (type === 'byDesc') {
      this.valueName = '';
      this.updatedAnnouncements = this.updatedAnnouncements
        .map((item) => ({ ...item }))
        .filter((item) =>
          item.description.toLowerCase().includes(this.valueDesc.toLowerCase())
        );
    }
  }
}
