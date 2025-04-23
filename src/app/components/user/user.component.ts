import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEmailHTML } from '../../store/email/email.selector';
import { EmailTemplateComponent } from '../email-template/email-template.component';
import { loadEmailTemplate } from '../../store/email/email.actions';
import { CommonModule } from '@angular/common';
import { UserActions } from '../../store/user/user.actions';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, EmailTemplateComponent],
  template: `
    <div>
        <app-email-template></app-email-template>
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
