// src/app/user/user.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEmailHTML } from '../../store/email/email.selector';
import { EmailPdfComponent } from '../pdf-generator/pdf-generator.component';
import { loadEmailTemplate } from '../../store/email/email.actions';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule ,EmailPdfComponent],
  template: `
    <div>
      <h1>User Information</h1>
      <div *ngIf="emailHtml$ | async as html">
        <p>Here is the email template:</p>
        <div [innerHTML]="html"></div>
        <app-email-pdf></app-email-pdf>
      </div>
    </div>
  `
})
export class UserComponent implements OnInit {
  private store = inject(Store);
  emailHtml$ = this.store.select(selectEmailHTML);

  ngOnInit() {
    this.store.dispatch(loadEmailTemplate());
  }
}
