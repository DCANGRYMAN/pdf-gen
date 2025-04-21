import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  state => state.user
);

export const selectUserId = createSelector(
  selectUser,
  (user) => user?.id
);
