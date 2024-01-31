import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map, pipe } from 'rxjs';
import { UserData, Announcement, NewUser } from './interface';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = './../assets/data.json';
  private userData$ = new BehaviorSubject<UserData[]>([]);
  private isAccessed = false;
  private currentUser: NewUser | null = null;
  private newUsers: NewUser[] = [];
  getNewUsers() {
    return this.newUsers;
  }
  registration(user: NewUser): boolean {
    const existingUser = this.newUsers.find((u) => u.login === user.login);

    if (existingUser) {
      return false;
    } else {
      this.newUsers.push(user);
      return true;
    }
  }
  getCurrentUser(): NewUser | null {
    if (this.currentUser) {
      return this.currentUser;
    }
    return null;
  }

  updateCurrentUser(user: NewUser) {
    this.currentUser = user;
  }
  logIn(login: string, password: string): boolean | null {
    const user = this.newUsers.find(
      (u) => u.login === login && u.password === password
    );
    if (user) {
      this.isAccessed = true;
      this.currentUser = user;
      return true;
    }
    return null;
  }
  updateUserData(id: number, newUser: any): void {
    this.currentUser = newUser;
    const userIndex = this.newUsers.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.newUsers[userIndex] = { ...this.newUsers[userIndex], ...newUser };
    } else {
      console.error(`Пользователь не найден.`);
    }
  }

  constructor(private http: HttpClient) {
    this.getData().subscribe(
      (data) => this.userData$.next(data),
      (error) => console.error(error)
    );
  }

  getData(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiUrl);
  }
  getUserData(): Observable<UserData[]> {
    return this.userData$.asObservable();
  }
  private user: UserData | null = null;
  getUser() {
    return this.user;
  }

  getAnnouncments(): Observable<Announcement[]> {
    return this.userData$.pipe(
      map((users) => users.flatMap((user) => user.announcements)),
      map((announcements) =>
        announcements.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      )
    );
  }

  checkToken() {
    return this.isAccessed;
  }
  getAnnouncementById(annId: number): Observable<Announcement | null> {
    return this.userData$.pipe(
      map((users) => users.flatMap((user) => user.announcements)),
      map(
        (announcements) =>
          announcements.find((announcement) => announcement.annId === annId) ||
          null
      )
    );
  }

  getUserIdByAnnouncementId(annId: number): Observable<number | null> {
    return this.userData$.pipe(
      map((users) => {
        for (const user of users) {
          const foundAnnouncement = user.announcements.find(
            (announcement) => announcement.annId === annId
          );

          if (foundAnnouncement) {
            return user.userId;
          }
        }
        return null;
      })
    );
  }
  getUserById(userId: number): Observable<UserData | null> {
    return this.userData$.pipe(
      map((users) => users.find((u) => u.userId === userId) || null)
    );
  }
}
