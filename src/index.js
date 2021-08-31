import React from "react"
import ReactDOM  from "react-dom"
import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-Bold.ttf';
import './fonts/Montserrat-SemiBold.ttf';
import './wallpaper.jpeg';
import './reset.css';
import './index.css';
class Principal extends React.Component {
    render() {
      return (
        <main className="content">
          <header>
            <div className="black-block"> Ganhe R$ 10,00 de desconto no frete</div>
            <h2 className="white-block"> Jordan Shoes</h2>
            <div className="content-wallpaper">
              <div className="filter">
                <h2 > A melhor loja de Jordan</h2>
                <p> O tênis Jordan é fruto de uma velha e forte <br/> parceria entre a Nike e o jogador Michael Jordan.</p>      
              </div>
            </div>

          </header>
          <section>
            <h2>Destaques</h2>
            <span>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </span>
            <div>
              <ul className="container">
                <li><img src='img/shoe-1.png' alt="Sapato 1" /></li>
                <li><img src='img/shoe-2.png' alt="Sapato 2" /></li>
                <li><img src='img/shoe-3.png' alt="Sapato 3" /></li>
                <li><img src='img/shoe-4.png' alt="Sapato 4" /></li>
                <li><img src='img/shoe-5.png' alt="Sapato 5" /></li>
                <li><img src='img/shoe-6.png' alt="Sapato 6" /></li>
                <li><img src='img/shoe-7.png' alt="Sapato 7" /></li>
                <li><img src='img/shoe-8.png' alt="Sapato 8" /></li>
              </ul>
            </div>
          </section>
          <footer className="black-block">
            <span>Todos os direitos reservados.</span>
          </footer>
        </main>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Principal />,
    document.getElementById('root')
  );
  