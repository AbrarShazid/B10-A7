import { useState } from "react";
import "./App.css";
import FreeCredit from "./Components/Free_Credit/FreeCredit";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";

const playersData= fetch("../Public/data.json").then(res=>res.json())

function App() {
  // function and state for free credit or coin starts here
  const [coin, setCoin] = useState(0);
  const addCoin = () => {
    setCoin(coin + 1600000);
  };
  // function and state for free credit or coin ends here


  




  return (
    <>
      <div className="min-h-screen">
        
        <Header totalCoin={coin}></Header>
        <FreeCredit addCoin={addCoin}></FreeCredit>
      </div>
 
      <Players playersData={playersData}></Players>
    </>
  );
}

export default App;
