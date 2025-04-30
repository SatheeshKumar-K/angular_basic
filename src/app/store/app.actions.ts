import { createAction, props } from '@ngrx/store';

export const setNumber = createAction(
  '[ModuleA] Set Number',
  props<{ number: number }>()
);
