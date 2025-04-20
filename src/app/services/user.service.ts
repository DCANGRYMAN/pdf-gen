import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUser() {
    return of({ id: '123', name: 'Mock User', email: 'mock@email.com' }).pipe(delay(500));
  }
}
