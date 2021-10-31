
import './App.css';
/*import {Link} from 'react-router-dom';*/
function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
        <div className="menu">
          <div className="logo">
            </div>
            <div className="item-menu">
              <a href='#'>LOGIN</a>
              <a href="#">CADASTRAR</a>
              <a href="#">GARANTIA</a>
              <a href="#">SOBRE-NÓS</a>
              <a href="#">FALE-CONOSCO</a>
              <a href="#">CARRINHO</a>
              
            </div>
            </div>
    </div>
    </div>
    <div className="pesquisa">
      <input type="search" id="texto" list="historico" placeholder="Busque aqui"/>
    <img src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-magnifying-glass-icon-png-image_889405.jpg"className="btn" />
    </div>
    </div>
  );
}

export default App;
