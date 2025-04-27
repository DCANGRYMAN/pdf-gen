import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmailTemplate } from '../../store/email/email.actions';
import { selectEmailHtml } from '../../store/email/email.selector';
import { UserActions } from '../../store/user/user.actions';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  template: ``,
})
export class UserComponent implements OnInit {
  private store = inject(Store);
  emailHtml$ = this.store.select(selectEmailHtml);

  ngOnInit() {
    this.store.dispatch(UserActions.loadUser());
    this.store.dispatch(loadEmailTemplate());
  }
}
