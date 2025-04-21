
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { User } from './user.interface';

export interface UserState {
  user: User | null;
  error: any | null;
}

export const initialState: UserState = {
  user: {
    id: '3409583403',
    name: 'Darlan',
    email: 'darlan@email.com'
  },
  error: null,
};


export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    error: false
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
