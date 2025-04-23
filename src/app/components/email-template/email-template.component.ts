import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email-template',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <div *ngIf="html">
      <a [href]="generatedLink" target="_blank">Abrir Template</a>
    </div>
  `,
})
export class EmailTemplateComponent implements OnInit {
  private http = inject(HttpClient);
  html: string | null = null;
  generatedLink: string | null = null;

  ngOnInit() {
    this.http
      .get('assets/template.html', { responseType: 'text' })
      .subscribe((data) => {
        this.html = data;
        const blob = new Blob([this.html], { type: 'text/html' });
        this.generatedLink = URL.createObjectURL(blob);
      });
  }

  ngOnDestroy() {
    if (this.generatedLink) {
      URL.revokeObjectURL(this.generatedLink);
    }
  }
}
