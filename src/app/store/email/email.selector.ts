import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmailTemplateState } from './email.interface';

export const selectEmailState = createFeatureSelector<EmailTemplateState>('email');

export const selectEmailHTML = createSelector(
  selectEmailState,
  (state) => state.html
);
