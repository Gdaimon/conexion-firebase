import './App.css';

function App() {

  const handleClick = () => {
    console.log('Entro');
  }

  return (
    <div className="App container mt-5">
      <h1>Integracion Firebase v9.1.2</h1>
      <hr />
      <button
        onClick={handleClick}
        className="btn btn-outline-success"
      >Click</button>
    </div>
  );
}

export default App;
