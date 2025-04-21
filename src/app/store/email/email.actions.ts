import { createAction, props } from '@ngrx/store';

export const loadEmailTemplate = createAction('[Email] Load');
export const loadEmailTemplateSuccess = createAction(
  '[Email] Load Success',
  props<{ html: string }>()
);
