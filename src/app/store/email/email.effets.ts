// store/email/email.effects.ts
import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmailService } from '../../services/email.service';
import { loadEmailTemplate, loadEmailTemplateSuccess } from './email.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class EmailEffects {
  private actions$ = inject(Actions);
  private emailService = inject(EmailService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmailTemplate),
      switchMap(() => this.emailService.fetchTemplate()),
      map(html => loadEmailTemplateSuccess({ html }))
    )
  );
}
