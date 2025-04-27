import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmailService } from '../../services/email.service';
import { loadEmailTemplate, loadEmailTemplateSuccess, loadEmailTemplateFailure } from './email.actions';
import { switchMap, map, catchError, of } from 'rxjs';

@Injectable()
export class EmailEffects {
  private actions$ = inject(Actions);
  private emailService = inject(EmailService);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmailTemplate),
      switchMap(() =>
        this.emailService.fetchTemplateFromAssets().pipe(
          map((html) => loadEmailTemplateSuccess({ html })),
          catchError((error) =>
            of(
              loadEmailTemplateFailure({
                error: error.message || 'Erro desconhecido',
              })
            )
          )
        )
      )
    )
  );
}
