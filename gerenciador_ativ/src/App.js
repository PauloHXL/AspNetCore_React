import {useState} from 'react'
import './App.css';

let initialState = [
  {
    id: 1,
    prioridade: '1',
    titulo: "Vaca loca",
    descricao: "Primeira Atividade"
  },
  {
    id: 2,
    prioridade: '1',
    titulo: "Boi loco",
    descricao: "Segunda Atividade"
  }


]


function App() {
  
  const  [atividades, setatividades] = useState(initialState) 
  function addAtividade(e){
    e.preventDefault();
    
    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value, 
      descricao: document.getElementById('descricao').value, 
    };
    setatividades([...atividades, {...atividade}]);
    
  };
  function prioridadelabel(param){
    switch(param)
    {
      case '1':
        return 'Baixa'
      case '2':
        return 'Normal'
      case '3':
        return 'Alta'
      default:
        return 'Não definido' 
    }
  };
  function prioridadeStyle(param, icone){
    switch(param)
    {
      case '1':
        return icone ? 'smile' : 'success'
      case '2':
        return icone ? 'meh' : 'dark'
      case '3':
        return icone ? 'frown' : 'warning'
      default:
        return 'Não definido' 
    }
  };
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label  className="form-label">ID</label>
          <input id='id' type="text" className="form-control" ></input>
        </div>
        <div className="col-md-6">
          <label  className="form-label">Prioridade</label>
            <select id="prioridade" className="form-select">
              <option defaultValue='0'>Selecionar...</option>
              <option value='1'>Baixa</option>
              <option value='2'>Normal</option>
              <option value='3'>Alta</option>
            </select>
        </div>
        <div className="col-md-6">
          <label  className="form-label">Título</label>
          <input id='titulo' type="text" className="form-control" ></input>
        </div>
        <div className="col-md-6">
          <label  className="form-label">Descrição</label>
          <input id='descricao' type="text" className="form-control" ></input>
        </div>
        <hr />
        <div className="col-12">
          <button className='btn btn-outline-secondary' onClick={addAtividade}>+ Atividade</button>
       </div>
          
      </form>
      <div className="mt-3">
          
            {atividades.map(ativ => (
            
        <div className={"card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade)}>
           <div key={ativ.id} className="card-body">
             <div className="d-flex justify-content-between">
               <h5 className="card-title">
               <span className="badge rounded-pill bg-secondary me-1">{ativ.id}</span>
                - {ativ.titulo}
               </h5>
               <h6>
                    Prioridade: 
                    <span className={'ms-1 text-' + prioridadeStyle(ativ.prioridade)}>
                      <i className={
                        'me-1 far fa-' + prioridadeStyle(ativ.prioridade)
                    
                    }></i>
                      {prioridadelabel(ativ.prioridade)}
                    </span>
                    
               </h6>
             </div>
            <p className="card-text">
              {ativ.id} - {ativ.descricao}
            </p>
            <div className='d-flex justify-content-end pt-2 m-0 border-top'>
              <button className='btn btn-sm btn-outline-primary me-2 '>
                <i className='fas fa-pen me-2'></i>
                Editar
              </button>
              <button className='btn btn-sm btn-outline-danger'>
              <i className='fas fa-trash me-2'></i>
                Deletar
              </button>
            </div>
           </div>
        </div>    
            ))}
         
      </div>
    </>
  );
}

export default App;
