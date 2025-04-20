import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  user: { id: string; name: string; email: string } | null;
}

export const initialState: UserState = {
  user: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUserSuccess, (state, { user }) => ({ ...state, user }))
);
