import LotteryProvider from './contexts/LotteryContext';
import Routes from "./routes"

function App() {
  return (
      <LotteryProvider>
        <Routes/>
      </LotteryProvider>
  );
}

export default App;
