"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import { useState } from 'react'

export default function Home() {

  const [quantia, setQuantia] = useState(0);
  const [deMoeda, setDeMoeda] = useState("BRL");
  const [paraMoeda, setParaMoeda] = useState("JPY");

  const [resultado, setResultado] = useState(0);

  function converterMoeda(){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${quantia}&from=${deMoeda}&to=${paraMoeda}`)
      .then(resp => resp.json())
      .then((data) => setResultado(data.rates[paraMoeda]));
  }

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.central}>
            <label>Valor</label><br></br>
            <input type="number" value={quantia} onChange={(e)=>{setQuantia(e.target.value)}}/>
          
          <div className={styles.opcoes}>
            <select value={deMoeda} onChange={(e)=> setDeMoeda(e.target.value)}>
              <option value="JPY">Yen</option>
              <option value="BRL">Real</option>
            </select>
          

          
            <select value={paraMoeda} onChange={(e)=> setParaMoeda(e.target.value)}>
              <option value="JPY">Yen</option>
              <option value="BRL">Real</option>
            </select>
          </div>
            
          
            <button onClick={()=>converterMoeda()}>Converter</button>
            <p>{resultado}</p>
        </div>
      </div>
    </main>
  )
}
