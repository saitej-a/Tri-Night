
import {useState,useEffect} from 'react';
import './index.css';
import './App.css';

function App() {

    const [quey,setQuery]=useState('')
    const submitQuery=async ()=>{
        let history=document.getElementById('history')
        history.innerHTML+=`<div class='right msg'>${quey}</div>`;
        try{
            let a = await fetch(`https://27saitejaankam.pythonanywhere.com/api/get/${quey}`).then((v)=>{ return v.json()});
            setQuery('');
            document.getElementById('query').value='';
            history.innerHTML+=`<div class="left msg">${a.message}</div>`;
            history.lastChild.scrollIntoView({'behavior':'smooth'})
        }catch(e){
            alert(`Please Ask Somethig About College or Invalid access may Found `)

        }
        
    }
 return <>
  <div className="container">
        <div id="history"><div>
            
            <div className="left msg">Hello How can i help u ?</div></div>
        </div>
        <div id='inputs'>
        <input type="text" id="query" autoFocus={true} placeholder="Query" onChange={(e)=>{ setQuery(e.target.value);}} onKeyDown={(e)=>{if(e.key==='Enter'){submitQuery();}}}></input>
        <button id="b" onClick={submitQuery}>Send</button>
        </div>
    </div>
 </>
  

}

export default App
