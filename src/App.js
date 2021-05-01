import LotteryProvider from './contexts/loterry';
import Routes from "./routes"

function App() {
  return (
      <LotteryProvider>
        <Routes/>
      </LotteryProvider>
  );
}

export default App;
