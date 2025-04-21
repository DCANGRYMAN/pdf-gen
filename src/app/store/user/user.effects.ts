import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { UserActions } from './user.actions';
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
          map(user => {
            console.log('[EFFECT] User carregado:', user);
            return UserActions.loadUserSuccess({ user });
          }),
          catchError(error => {
            console.error('[EFFECT] Erro ao carregar user:', error);
            return of(UserActions.loadUserFailure({ error }));
          })
        )
      )
    )
  );
}
