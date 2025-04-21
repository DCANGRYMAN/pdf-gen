import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEmailHTML } from '../../store/email/email.selector';
import { EmailPdfComponent } from '../pdf-generator/pdf-generator.component';
import { loadEmailTemplate } from '../../store/email/email.actions';
import { CommonModule } from '@angular/common';
import { UserActions } from '../../store/user/user.actions';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, EmailPdfComponent],
  template: `
    <div>
        <app-email-pdf></app-email-pdf>
    </div>
  `,
})
export class UserComponent implements OnInit {
  private store = inject(Store);
  emailHtml$ = this.store.select(selectEmailHTML);

  ngOnInit() {
    this.store.dispatch(UserActions.loadUser());
    this.store.dispatch(loadEmailTemplate());
  }
}
