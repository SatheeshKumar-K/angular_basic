import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectNumber = createSelector(
  selectAppState,
  (state: AppState) => state.number
);
