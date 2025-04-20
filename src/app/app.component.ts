import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent], 
  template: `<app-user></app-user>`,
})
export class AppComponent {}
