export interface IUkraineResponce {
  data: {
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