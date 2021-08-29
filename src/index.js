import React from "react"
import ReactDOM  from "react-dom"
import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-Bold.ttf';
import './fonts/Montserrat-SemiBold.ttf';
import './img/wallpaper.jpeg';
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
              {/* TODO List of Shoes */}
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
  