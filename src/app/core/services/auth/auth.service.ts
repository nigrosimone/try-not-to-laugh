import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../shared/models/user';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public readonly currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(null);
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    async load(): Promise<User> {
        const user = this.currentUserValue;
        if (!user) {
            try {
                const result = await this.http.get<{ data: User }>(environment.api + 'auth/facebook/profile', { withCredentials: true }).toPromise();
                this.currentUserSubject.next(result.data);
            } catch (error) {
                if (error.status !== 401) {
                    throw error;
                }
            }
            return this.currentUserValue;
        }
        return user;
    }

    login(): void {
        window.location.href = environment.api + 'auth/facebook';
    }

    async logout(): Promise<void> {
        const result = await this.http.get<{ data: User }>(environment.api + 'auth/logout', { withCredentials: true }).toPromise();
        this.currentUserSubject.next(result.data);
    }
}
