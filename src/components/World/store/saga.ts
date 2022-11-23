import { getStatistic } from './../../../api/api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { worldTypes } from './actionTypes';
import { IWorldResponce } from './types';


function* fetchWorldData() {
    try {
      const response: IWorldResponce = yield call(getStatistic);
      yield put({
        type: worldTypes.SET_DATA,
        data: {
          newConfirmed: response.data.Global.NewConfirmed,
          newDeaths: response.data.Global.NewDeaths,
          totalConfirmed: response.data.Global.TotalConfirmed,
          totalDeaths: response.data.Global.TotalDeaths,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  export default function* worldSaga() {
    yield all([
      takeLatest(worldTypes.FETCH_DATA, fetchWorldData),
    ]);
  }