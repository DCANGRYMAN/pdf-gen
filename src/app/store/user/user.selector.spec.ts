import { selectUserState, selectUser, selectUserId } from './user.selectors';
import { UserState } from './user.reducer';

describe('User Selectors', () => {
  const mockState = {
    user: {
      user: {
        id: '3409583403',
        name: 'Darlan',
        email: 'darlan@email.com'
      },
      error: null
    }
  };

  it('should select the user state', () => {
    const result = selectUserState(mockState as any);
    expect(result).toEqual(mockState.user);
  });

  it('should select the user', () => {
    const result = selectUser(mockState as any);
    expect(result).toEqual(mockState.user.user);
  });

  it('should select the user id', () => {
    const result = selectUserId(mockState as any);
    expect(result).toBe('3409583403');
  });

  it('should return undefined for user id if user is null', () => {
    const nullUserState: any = {
      user: {
        user: null,
        error: null
      }
    };

    const result = selectUserId(nullUserState);
    expect(result).toBeUndefined();
  });
});
