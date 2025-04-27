import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface EmailState {
  html: string | null;
  error: string | null;
  loading: boolean | null;
}

export const selectEmailState = createFeatureSelector<EmailState>('email-template');

export const selectEmailHtml = createSelector(
  selectEmailState,
  (state) => state?.html || null  
);

export const selectEmailError = createSelector(
  selectEmailState,
  (state) => state?.error || null  
);

export const selectEmailLoading = createSelector(
  selectEmailState,
  (state) => state?.loading || false
);
