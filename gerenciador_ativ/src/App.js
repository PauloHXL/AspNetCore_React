import {useState} from 'react'
import './App.css';

let initialState = [
  {
    id: 1,
    descricao: "Primeira Atividade"
  },
  {
    id: 2,
    descricao: "Segunda Atividade"
  }


]


function App() {
  const  [atividades, setatividades] = useState(initialState) 
  function addAtividade(e){
    e.preventDefault();

    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value, 
    };
    setatividades([...atividades, {...atividade}]);
  };

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">ID</label>
          <input id='id' type="text" className="form-control" ></input>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Descrição</label>
          <input id='descricao' type="text" className="form-control" ></input>
        </div>
        <hr />
        <div className="col-12">
          <button className='btn btn-outline-secondary' onClick={addAtividade}>+ Atividade</button>
       </div>
          
      </form>
      <div className="mt-3">
          
            {atividades.map(ativ => (
            
        <div className="card mb-2 shadow-sm">
           <div key={ativ.id} className="card-body">
             <div className="d-flex justify-content-between">
               <h5 className="card-title">
               <span className="badge rounded-pill bg-secondary me-1">{ativ.id}</span>
                - título
               </h5>
               <h6>
                    Prioridade: Normal
               </h6>
             </div>
            <p className="card-text">
              {ativ.id} - {ativ.descricao}
            </p>
           </div>
        </div>    
            ))}
         
      </div>
    </>
  );
}

export default App;
