import React, {useState} from 'react';
import './index.css';

export default function Conversor(props){
    const [ moedaAValor, setMoedaValorA] = useState("");
    const [ moedaBValor, setMoedaValorB] = useState(0);

    function converter(){
        let url = `https://api.exchangeratesapi.io/latest?base=${props.moedaA}`;

        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(json=>{
            let cotacao = json['rates'][`${props.moedaB}`];
            let moedaBValor = ( parseFloat(moedaAValor) * cotacao ).toFixed(2);
            setMoedaValorB(moedaBValor);
        })
    }

    return(
        <div className="conversor">
            <h2> {props.moedaA} para {props.moedaB} </h2>
            <input type="number" onChange={(event)=>{setMoedaValorA(event.target.value)}}></input>
            <input type="button" value="Converter" onClick={converter}></input>
            <h2>{props.moedaB} {moedaBValor}</h2>
        </div>
    )

}