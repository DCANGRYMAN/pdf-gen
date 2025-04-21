// email.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as EmailActions from './email.actions';
import { EmailTemplateState, initialState } from './email.interface';

export const emailReducer = createReducer(
  initialState,
  on(EmailActions.loadEmailTemplate, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(EmailActions.loadEmailTemplateSuccess, (state, { html }) => ({
    ...state,
    html,
    loading: false,
    error: null,
  })),
  on(EmailActions.loadEmailTemplateFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(EmailActions.resetEmailTemplate, () => initialState)
);
