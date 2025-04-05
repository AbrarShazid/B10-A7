import { Suspense, useState } from "react";
import "./App.css";
import FreeCredit from "./Components/Free_Credit/FreeCredit";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";
import Footer from "./Components/Footer/Footer";



const playersData= fetch("/data.json").then(res=>res.json())

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
      <Suspense fallback={<h1 className="text-center text-red-600 text-5xl mb-10">Data is loading...</h1>}>
      <Players coins={coin} setCoin={setCoin}  playersData={playersData}></Players>

      </Suspense>
 
     

      <Footer></Footer>

 
      
    </>
  );
}

export default App;
