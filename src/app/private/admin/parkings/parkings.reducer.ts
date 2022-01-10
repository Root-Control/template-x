import { Action, createReducer, on } from '@ngrx/store';
import * as ParkingsActions from './parkings.actions';

export const parkingsFeatureKey = 'parkings';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ParkingsActions.loadParkingss, state => state),
  on(ParkingsActions.loadParkingssSuccess, (state, action) => state),
  on(ParkingsActions.loadParkingssFailure, (state, action) => state),

);

