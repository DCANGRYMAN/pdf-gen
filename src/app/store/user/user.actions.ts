import { createAction, props } from '@ngrx/store';

export const loadUser = createAction('[User] Load');

export const loadUserSuccess = createAction(
  '[User] Load Success',
  props<{ user: { id: string; name: string; email: string } }>()
);
