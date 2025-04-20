import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { UserService } from '../../services/user.service';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map(user => UserActions.loadUserSuccess({ user })),
          catchError(() => of(UserActions.loadUserSuccess({ user: { id: '0', name: 'Fallback', email: '-' } })))
        )
      )
    )
  );
}
