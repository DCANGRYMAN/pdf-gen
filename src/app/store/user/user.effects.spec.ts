import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { UserEffects } from './user.effects';
import { UserService } from '../../services/user.service';
import { UserActions } from './user.actions';
import { User } from './user.interface';

describe('UserEffects', () => {
  let actions$: Observable<Action>;
  let effects: UserEffects;
  let userService: jasmine.SpyObj<UserService>;

  const mockUser: User = {
    id: '123',
    name: 'Test User',
    email: 'test@email.com'
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['getUser']);

    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions$),
        { provide: UserService, useValue: spy }
      ]
    });

    effects = TestBed.inject(UserEffects);
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should dispatch loadUserSuccess on success', (done) => {
    userService.getUser.and.returnValue(of(mockUser));

    actions$ = of(UserActions.loadUser());

    effects.loadUser$.subscribe(action => {
      expect(action).toEqual(UserActions.loadUserSuccess({ user: mockUser }));
      done();
    });
  });

  it('should dispatch loadUserFailure on error', (done) => {
    const error = { message: 'Falha na API' };
    userService.getUser.and.returnValue(throwError(() => error));

    actions$ = of(UserActions.loadUser());

    effects.loadUser$.subscribe(action => {
      expect(action).toEqual(UserActions.loadUserFailure({ error }));
      done();
    });
  });
});
