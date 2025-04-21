import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from './user.interface';

export const UserActions = createActionGroup({ 
  source: 'User',
  events: {
    'Load User': emptyProps(),
    'Load User Success': props<{ user: User }>(),
    'Load User Failure': props<{ error: any }>(),
  }
});
