import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmailService } from '../../services/email.service';
import { loadEmailTemplate, loadEmailTemplateSuccess } from './email.actions';
import { switchMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectUserId } from '../user/user.selectors';

@Injectable()
export class EmailEffects {
  private actions$ = inject(Actions);
  private emailService = inject(EmailService);
  private store = inject(Store);

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadEmailTemplate),
      withLatestFrom(this.store.select(selectUserId)),
      filter(([_, userId]) => typeof userId === 'string' && userId.length > 0),
      switchMap(([_, userId]) =>
        this.emailService.fetchTemplate(userId as string)
      ),
      map(html => loadEmailTemplateSuccess({ html }))
    )
  );
}
