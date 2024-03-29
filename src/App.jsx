import "./App.scss";
import "./Chart.scss";

import TurbidityChart from "./components/TurbidityChart";
import PHChart from "./components/PHChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <b>Water Sentinel Dashboard</b>
        </p>
      </header>
      <main className="App-main">
        <div className="dataCard customerCard">
          <TurbidityChart />
        </div>
        <div className="dataCard customerCard">
          <PHChart />
        </div>
        <div className="dataCard customerCard">
          <TurbidityChart />
        </div>
        <div className="dataCard customerCard">
          <TurbidityChart />
        </div>
        <div className="dataCard customerCard">
          <PHChart />
        </div>
        <div className="dataCard customerCard">
          <TurbidityChart />
        </div>
      </main>
    </div>
  );
}

export default App;
