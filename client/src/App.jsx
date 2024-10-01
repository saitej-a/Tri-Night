
import {useState,useEffect} from 'react';
import './index.css';
import './App.css';

function App() {

    const [quey,setQuery]=useState('');
    const [patterns,setPatterns]=useState([]);
    const submitQuery=async (quey)=>{
        let history=document.getElementById('history')
        history.innerHTML+=`<div class='right msg'>${quey}</div>`;
        try{
            const arr={query:quey};
            let a = await fetch(`http://127.0.0.1:8000/api/get/`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(arr)}).then((v)=>{ return v.json()});
            setQuery('');
            document.getElementById('query').value='';
            getall();
            history.innerHTML+=`<div class="left msg">${a.message}</div>`;
            history.lastChild.scrollIntoView({'behavior':'smooth'})
        }catch(e){
            alert(`Please Ask Somethig About College or Invalid access may Found `)

        }
        
    }
    const getall=async ()=>{
        await fetch('https://27saitejaankam.pythonanywhere.com/api/getallpatterns/').then((data)=>{return data.json()}).then((data)=>{setPatterns(data['data'])});
    }
    useEffect(()=>{getall()},[]);
   const submit=(p)=>{
    submitQuery(p);
    
   }
 return <>
  <div className="container">
        <div id="history"><div>
            
            <div className="left msg">Hello How can i help u ?</div></div>
        </div>
        <div className='suggestions-container'>{patterns.map((pattern)=>{ return <div className='suggestion' onClick={()=>{submit(pattern)}}>{pattern}</div>})}</div>
        <div id='inputs'>
        
        <input type="text" id="query" autoFocus={true} placeholder="Query" onChange={(e)=>{ setQuery(e.target.value);}} onKeyDown={(e)=>{if(e.key==='Enter'){submitQuery(quey);}}}></input>
        <button id="b" onClick={()=>{submitQuery(quey)}}>Send</button>
        </div>
    </div>
 </>
  

}

export default App
