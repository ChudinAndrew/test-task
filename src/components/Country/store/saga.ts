import { getStatistic } from "../../../api/api";
import {
  all,
  AllEffect,
  call,
  ForkEffect,
  put,
  takeLatest,
} from "redux-saga/effects";
import { countryTypes } from "./actionTypes";
import { IStatisticResponce } from "./types";

function* fetchData({country}: any) {
  try {
    const response: IStatisticResponce = yield call(getStatistic);
    
    if (country === "World") {
      yield put({
        type: countryTypes.SET_DATA,
        data: {
          newConfirmed: response.data.Global.NewConfirmed,
          newDeaths: response.data.Global.NewDeaths,
          totalConfirmed: response.data.Global.TotalConfirmed,
          totalDeaths: response.data.Global.TotalDeaths,
          country:country
        },
        
      });
    } else {
      const result = response.data.Countries.filter(
        (item) => item.Country === country
      );
      
      yield put({
        type: countryTypes.SET_DATA,
        data: {
          newConfirmed: result[0].NewConfirmed,
          newDeaths: result[0].NewDeaths,
          totalConfirmed: result[0].TotalConfirmed,
          totalDeaths: result[0].TotalDeaths,
          country:country
        },
        
      });
    }
  } catch (error:any) {
    console.log(error);
    
    yield put({
      type: countryTypes.ERROR_DATA,
      error: error.message,
    });
  }
}

export default function* countrySaga(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([takeLatest(countryTypes.FETCH_DATA, fetchData)]);
}
// function* fetchWorldData() {
//   try {
//     const response: IWorldResponce = yield call(getStatistic);
//     if (response.data)
//     yield put({
//       type: worldTypes.SET_DATA,
//       data: {
//         newConfirmed: response.data.Global.NewConfirmed,
//         newDeaths: response.data.Global.NewDeaths,
//         totalConfirmed: response.data.Global.TotalConfirmed,
//         totalDeaths: response.data.Global.TotalDeaths,
//       },
//     });
//   } catch (error:any) {

//     yield put ({
//       type: worldTypes.ERROR_DATA,
//       error: error.message
//     })

//   }
// }
