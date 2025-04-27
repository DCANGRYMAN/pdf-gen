import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { EmailTemplateContainerComponent } from './components/email-template/email-template-container.component';
import { SimpleTestComponent } from '../app/components/signal-test/simple-test.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserComponent,
    EmailTemplateContainerComponent,
  ],
  template: `<app-user></app-user>
    <app-email-template-container></app-email-template-container>`,
})
export class AppComponent {}
