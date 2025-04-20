// store/email/email.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadEmailTemplateSuccess } from './email.actions';
import { EmailTemplateState } from './email.model';

const initialState: EmailTemplateState = {
  html: null,
};

export const emailReducer = createReducer(
  initialState,
  on(loadEmailTemplateSuccess, (state, { html }) => ({ ...state, html }))
);
