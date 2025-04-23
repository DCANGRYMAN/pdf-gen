import { userReducer, initialState, UserState } from './user.reducer';
import { UserActions } from './user.actions';
import { User } from './user.interface';

describe('User Reducer', () => {
  it('should load user successfully', () => {
    const newUser: User = {
      id: '999999999',
      name: 'Daniel',
      email: 'daniel@email.com'
    };

    const action = UserActions.loadUserSuccess({ user: newUser });
    const state = userReducer(initialState, action);

    expect(state).toEqual({
      user: newUser,
      error: false
    });
  });

  it('should handle load user failure', () => {
    const error = { message: 'Failed to load user' };

    const action = UserActions.loadUserFailure({ error });
    const state = userReducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      error
    });
  });

  it('should return the default state when no action matches', () => {
    const action = { type: 'Unknown' } as any;
    const state = userReducer(initialState, action);

    expect(state).toBe(initialState);
  });
});
