export interface IStatisticResponce {
  data: {
    Global: {
      NewConfirmed: number;
      NewDeaths: number;
      TotalConfirmed: number;
      TotalDeaths: number;
    };
    Countries: [
      {
        Country: string;
        NewConfirmed: number;
        NewDeaths: number;
        TotalConfirmed: number;
        TotalDeaths: number;
      }
    ];
  };
}
