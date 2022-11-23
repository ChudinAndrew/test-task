import { getStatistic } from './../../../api/api';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ukraineTypes } from './actionTypes';
import { IUkraineResponce } from './types';


function* fetchUkraineData() {
  try {
    const response: IUkraineResponce = yield call(getStatistic);
    const result = response.data.Countries.filter(
      (country) => country.Country === "Ukraine"
    );
    yield put({
      type: ukraineTypes.SET_DATA,
      data: {
        newConfirmed: result[0].NewConfirmed,
        newDeaths: result[0].NewDeaths,
        totalConfirmed: result[0].TotalConfirmed,
        totalDeaths: result[0].TotalDeaths,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
  export default function* ukraineSaga() {
    yield all([
      takeLatest(ukraineTypes.FETCH_DATA, fetchUkraineData),
    ]);
  }