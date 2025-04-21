// services/email.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private apiUrl = 'https://httpbin.org/post'; // pode trocar depois por sua API real

  constructor(private http: HttpClient) {}

  fetchTemplate(userId: string): Observable<string> {
    console.log('[SERVICE] Enviando requisição real para userId:', userId);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer fake-jwt-token-123456789',
    });

    const body = {
      userId,
      context: 'email-pdf',
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        // Aqui simulamos que a "resposta da API" contém o HTML gerado
        return `
          <div style="padding: 20px; font-family: sans-serif;">
            <h1>Hello, User #${userId}!</h1>
            <p>This is a personalized email from a real HTTP request for user ID <strong>${userId}</strong>.</p>
          </div>
        `;
      })
    );
  }
}
