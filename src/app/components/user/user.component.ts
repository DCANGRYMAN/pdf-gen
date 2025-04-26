import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmailTemplate } from '../../store/email/email.actions';
import { selectEmailHTML } from '../../store/email/email.selector';
import { UserActions } from '../../store/user/user.actions';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>User Component</h1>
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
