import "./App.css";
import Statistic from "./components/Country/CountryStatistic";
import InfoPage from "./components/InfoPage";
import { AppWrapper } from "./style";

const App = () => {
  return (
    <AppWrapper>
      <InfoPage />
      <Statistic />
    </AppWrapper>
  );
};

export default App;
