import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { setNumber } from './app.actions';
import { AppState } from './app.state';


export const initialState: number = 0;

export const numberReducer = createReducer(
  initialState,
  on(setNumber, (state, { number }) => number)
);
export const reducers: ActionReducerMap<AppState> = {
    number: numberReducer,
  };
