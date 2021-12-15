import './App.css';

function App() {
  const atividade = [
    {
      id: 1,
      descricao: "Primeira Atividade"
    },
    {
      id: 1,
      descricao: "Segunda Atividade"
    }


  ];
  return (
    <>
      <form>
          <input id='id' type='text' placeholder='id'></input>
          <input id='descricao' type='text' placeholder='descricao'></input>
          <button>+ Atividade</button>
      </form>
      <div className="mt-3">
          <ul className="list-group">
            {atividade.map(ativ => (
              <li key={ativ.id} className="list-group-item">{ativ.id} - {ativ.descricao}</li>     
            ))}
          </ul>
      </div>
    </>
  );
}

export default App;
