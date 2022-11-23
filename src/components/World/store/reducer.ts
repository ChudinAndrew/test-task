import { worldTypes } from "./actionTypes";

const initialState = {
  newConfirmed: 0,
  newDeaths: 0,
  totalConfirmed: 0,
  totalDeaths: 0,
  isLoading: false,
  error: "",
};

const worldReducer = (state = initialState, action: any) => {
  
  switch (action.type) {
    case worldTypes.SET_DATA:
      return {
        ...state,

        ...action.data,
        isLoading: false,
      };
    case worldTypes.FETCH_DATA:     
      return {
        ...state,
        isLoading: true,
      };
    case worldTypes.ERROR_DATA:
      return {
        ...state,
        ...action.error,
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

// export const setData = (data: any) => ({ type: worldTypes.SET_DATA, data });
// export const fetchData = () => {
//   return { type: worldTypes.FETCH_DATA };
// };
// export const errorData = (error: any) => ({ type: worldTypes.ERROR_DATA, error });

export default worldReducer;
