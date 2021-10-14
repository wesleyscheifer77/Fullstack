import './App.css';
import {useEffect, useState} from 'react';
function App() {
  
  const [tarefas, setarTarefas] = useState ([
   /* {
      id: 0,
      tarefa: 'minha tarefa do dia',
      finalizada: false
    },
    {
      id: 0,
      tarefa: 'minha tarefa do dia 2',
      finalizada: true
    },
      */
  ]);

  const [Modal, setModal] = useState (false);

  const salvarTarefa = () => {
  var tarefa = document.getElementById ('content-tarefa');

    setarTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada: false
      }
    ]);
    setModal (false);
  }
  const marcarConcluida = (id) => {
    let novasTarefas = tarefas.filter(function(val){
        if (val.id == id){
          val.finalizada = true;
        }
        return val;
    })
    setarTarefas(novasTarefas);
  }
  const abrirModal = () => {
    setModal(!Modal);
  }
  useEffect (()=>{
  },[])
  
  return (
    <div className="App">
      {
        Modal?
        <div className = "Modal">
          <div className= "ModalContent">
            <h3>adicionar sua tarefa</h3>
            <input id= "content-tarefa" type= "text"/>
            <button onClick={()=>salvarTarefa()}> salvar!</button>
            </div>
          </div>
          :
          <div></div>
      }
      <div onClick = {()=>abrirModal()} className = "addTarefa">+</div>
     <div className = "boxTarefas">
       <h2>minha tarefa do dia</h2>
       {
         tarefas.map((val) =>{
           if (!val.finalizada){
            return ( 
              <p onClick ={()=>marcarConcluida(val.id)} >{val.tarefa}</p>
            );
           }else{
            return (
              <p onClick ={()=>marcarConcluida(val.id)} style={{textDecoration:'line-through'}}>{val.tarefa}</p>
            );
           }
         })
       }
     </div>
    </div>
  );
}

export default App;
