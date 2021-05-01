import './App.css';
import LotteryProvider from './contexts/LotteryContext';
import Routes from "./routes"

function App() {
  return (
    <div className="App">
      <LotteryProvider>
        <Routes/>
      </LotteryProvider>
    </div>
  );
}

export default App;
