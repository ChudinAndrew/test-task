import { countryTypes } from "./actionTypes";

export const setData = (data: any) => ({ type: countryTypes.SET_DATA, data });
export const fetchData = (country:string) => {
  return { type: countryTypes.FETCH_DATA, country };
};
export const errorData = (error: any) => ({ type: countryTypes.ERROR_DATA, error });