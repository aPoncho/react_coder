import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import NavBar from './components/Navbar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';

let titulo = 'Zebra Store'
let saludo = 'hola, soy saludo'

function App() {
  return (
    <div className="App">
      {/*Titulo ( {titulo: '', subtitulo: ''})*/}
        <Titulo tituloProps={ titulo } subTituloProps='Soy subtitulo'/>
        <NavBar>
          <CartWidget/>
        </NavBar>
        <ItemListContainer greeting='Hola soy saludo'/>
    </div>
  );
}

export default App;
