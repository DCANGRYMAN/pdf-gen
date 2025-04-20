// email-pdf.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadEmailTemplate } from '../../store/email/email.actions';
import { selectEmailHTML } from '../../store/email/email.selector'

@Component({
  selector: 'app-email-pdf',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="html$ | async as html">
      <div [innerHTML]="html" #content></div>
      <button (click)="generatePDF(content)">Download PDF</button>
    </div>
  `,
})
export class EmailPdfComponent implements OnInit {
  private store = inject(Store);
  html$ = this.store.select(selectEmailHTML);

  ngOnInit() {
    this.store.dispatch(loadEmailTemplate());
  }

// email-pdf.component.ts
generatePDF(content: HTMLElement) {
  import('html2pdf.js').then(html2pdf => {
    html2pdf.default().from(content).save();
  });
}

}
