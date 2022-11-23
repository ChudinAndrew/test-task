import axios from "axios";

export const getStatistic = ():any => {
  return axios
    .get("https://api.covid19api.com/summary")
    .then((response: any) => {
      return response;
    });
};
