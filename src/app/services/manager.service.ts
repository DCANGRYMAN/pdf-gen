import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  async getEmailTemplate(): Promise<string> {
    const data: string = await lastValueFrom(
      this.http.get('assets/template.html', { responseType: 'text' })
    );
    const blob = new Blob([data], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    return url;
  }
}
