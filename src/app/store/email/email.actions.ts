import { createAction, props } from '@ngrx/store';

export const loadEmailTemplate = createAction('[Email] Load Template');

export const loadEmailTemplateSuccess = createAction(
  '[Email] Load Template Success',
  props<{ html: string }>()
);

export const loadEmailTemplateFailure = createAction(
  '[Email] Load Template Failure',
  props<{ error: string }>()
);
