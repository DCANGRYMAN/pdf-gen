// services/email.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailService {
  fetchTemplate() {
    const mockHTML = `
      <div style="padding: 20px; font-family: sans-serif;">
        <h1>Welcome to the Course!</h1>
        <p>This is a mock email template ready to convert into PDF.</p>
      </div>
    `;
    return of(mockHTML);
  }
}
