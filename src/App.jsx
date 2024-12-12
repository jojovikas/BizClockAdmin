import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardDetals from "./components/cardDetails/CardDetals";
import LineChart from "./components/LineGraph/LineChart";
import CollectionD from "./components/collection/CollectionD";
import TeamManage from "./components/Tmanagement/TeamManage";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-3">navigation section</div>
          <div className="col-md-9">
            <CardDetals />
            <LineChart />
            <CollectionD />
            <TeamManage />
          </div>
        </div>
      </div> */}
      <Sidebar />
    </>
  );
}

export default App;
