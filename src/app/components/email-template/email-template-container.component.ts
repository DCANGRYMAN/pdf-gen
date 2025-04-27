import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmailTemplateComponent } from './email-template.component';
import { loadEmailTemplate } from '../../store/email/email.actions';
import {
  selectEmailHtml,
  selectEmailError,
} from '../../store/email/email.selector';
import { CommonModule } from '@angular/common';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-email-template-container',
  standalone: true,
  imports: [CommonModule, EmailTemplateComponent],
  template: `
    <ng-container *ngIf="generatedLink; else loading">
      <app-email-template
        [input]="generatedLink"
        ($output)="output($event)"
      ></app-email-template>
    </ng-container>

    <ng-template #loading>
      <p>Carregando template...</p>
    </ng-template>

    <ng-container *ngIf="error$ | async as error">
      <p>{{ error }}</p>
    </ng-container>
  `,
})
export class EmailTemplateContainerComponent implements OnInit {
  html$: Observable<string | null>;
  error$: Observable<string | null>;
  generatedLink: string | null = null;

  constructor(private store: Store, private managerService: ManagerService) {}

  ngOnInit() {
    this.store.dispatch(loadEmailTemplate());
    this.initUrl();
  }

  initUrl(): void {
    this.html$ = this.store.select(selectEmailHtml);
    this.error$ = this.store.select(selectEmailError);
    this.managerService.getEmailTemplate().then((url) => {
      this.generatedLink = url;
    });
  }

  output($event: any): void {
    console.log('Output received:', $event);
  }
}
