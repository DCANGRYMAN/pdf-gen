import { createReducer, on } from '@ngrx/store';
import {
  loadEmailTemplate,
  loadEmailTemplateSuccess,
  loadEmailTemplateFailure,
} from './email.actions';
import { Action } from '@ngrx/store';

export interface EmailState {
  html: string | null;
  error: string | null;
  loading: boolean;
  loaded: boolean;
}

export const initialState: EmailState = {
  html: null,
  error: null,
  loading: false,
  loaded: false,
};

const _emailReducer = createReducer(
  initialState,
  on(loadEmailTemplate, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
    html: null,
  })),
  on(loadEmailTemplateSuccess, (state, { html }) => ({
    ...state,
    html,
    loading: false,
    loaded: true,
  })),
  on(loadEmailTemplateFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
    loaded: false,
    html: null,
  }))
);

export function emailReducer(state: EmailState | undefined, action: Action) {
  return _emailReducer(state, action);
}
