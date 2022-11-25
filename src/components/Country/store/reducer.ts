import { countryTypes } from "./actionTypes";


const initialState = {
  newConfirmed: 0,
  totalConfirmed: 0,
  newDeaths: 0,
  totalDeaths: 0,
  isLoading: false,
  error: "",
  country:''
};

const countryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case countryTypes.SET_DATA:
      return {
        ...action,
        ...action.data,
        isLoading: false,
      };
    case countryTypes.FETCH_DATA:
      return {
        ...action,
        isLoading: true,
      };
    case countryTypes.ERROR_DATA:
      return {
        ...action,
        ...action.error,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

// export const setUkraineData = (data: any) => ({ type: ukraineTypes.SET_DATA, data });
// export const fetchUkraineData = () => ({ type: ukraineTypes.FETCH_DATA });
// export const errorUkraineData = (error: any) => ({
//   type: ukraineTypes.ERROR_DATA,
//   error,
// });

export default countryReducer;
