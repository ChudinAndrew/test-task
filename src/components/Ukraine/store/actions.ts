import { ukraineTypes } from "./actionTypes";

export const setData = (data: any) => ({ type: ukraineTypes.SET_DATA, data });
export const fetchData = () => {
  return { type: ukraineTypes.FETCH_DATA };
};
export const errorData = (error: any) => ({ type: ukraineTypes.ERROR_DATA, error });