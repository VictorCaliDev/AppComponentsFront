import React from 'react';
import TopMenu from './components/TopMenu';
import './App.css';
import ButtonAppBar from './components/AppBar';
import Conversor from "./components/Conversor";

function App() {
  
  document.title = "Pagina APP";

  return (
    <div className="App">
      <ButtonAppBar />
      <ul>
        <TopMenu title="Meus Dados" desc="Dados do cliente"  />
        <TopMenu title="Minhas Vendas" desc="Vendas do cliente"  />
      </ul>

      <h1>Conversor de moedas</h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
