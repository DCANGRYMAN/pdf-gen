import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUser() {
    return of({ id: '123', name: 'Darlan', email: 'darlan@email.com' }).pipe(delay(500));
  }
}
