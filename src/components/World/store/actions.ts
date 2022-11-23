import { worldTypes } from "./actionTypes";

export const setData = (data: any) => ({ type: worldTypes.SET_DATA, data });
export const fetchData = () => {
  return { type: worldTypes.FETCH_DATA };
};
export const errorData = (error: any) => ({ type: worldTypes.ERROR_DATA, error });