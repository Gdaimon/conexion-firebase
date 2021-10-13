import './App.css';
import { actualizarDocumentoDatabase, consultarDatabase, consultarDocumentoDatabase, crearUsuario, datosUsuario, eliminarDocumentoDatabase, guardarDatabase, loginUsuario, logOutUsuario, usuario } from './config/firebase';

function App() {

  const handleClick = async () => {
    console.log('Entro');

    // const usuario = {
    //   nombre: 'Pedro',
    //   edad: 30
    // }

    // CRUD => CREATE, READ, UPDATE, DELETE
    //  CREAR, LEER, ACTUALIZAR, BORRAR

    // Guardar en base de datos
    // guardarDatabase('usuarios', usuario);

    // Obtener todos los documentos de la colleccion
    // consultarDatabase('usuarios')
    // console.log(await consultarDatabase('usuarios'));

    // Obtener un documento id=CEqaCqjBFnI0SQKRj0tI
    // consultarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI')

    const usuarioDos = {
      nombre: 'Martha',
      edad: 15
    }

    // Actualizacion documento  id=CEqaCqjBFnI0SQKRj0tI
    // actualizarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI', usuarioDos)

    // Eliminar documento  id=CEqaCqjBFnI0SQKRj0tI
    // eliminarDocumentoDatabase('usuarios', 'CEqaCqjBFnI0SQKRj0tI', usuarioDos)

    // Creacion Usuario
    // crearUsuario('darkklitos@gmail.com', '123456')

    // Login
    // await loginUsuario('darkklitos@gmail.com', '123456')
    console.log('datos usuario: ', usuario);

    //  salir -> LogOut
    // logOutUsuario()

    //  Datos Usuario
    // datosUsuario()


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
