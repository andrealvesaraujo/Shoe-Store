import React from "react"
import ReactDOM  from "react-dom"
import Typed from "typed.js";
import ScrollReveal from 'scrollreveal'
import './fonts/Montserrat-Medium.ttf';
import './fonts/Montserrat-Bold.ttf';
import './fonts/Montserrat-SemiBold.ttf';
import './background-desktop.jpeg';
import './background-mobile.jpg';
import './reset.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
class Principal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  

    componentDidMount() {
      this.typed = new Typed("#descricao-background",  {
        strings: [
          'The Jordan sneaker is the result of an old and strong <br/> partnership between Nike and the player Michael Jordan.',
        ],
        typeSpeed: 50,
      });

      this.sr = ScrollReveal({
            origin: 'top',
            distance: '50px',
            duration: 2000,
            reset: true
      });

      ScrollReveal().reveal('.content', { delay: 350});

    }

    render() {
     
      return (
        
        <main className="content">
          <header>
            <div className="black-block"> Get $10.00 off shipping</div>
            <h2 className="white-block"> Jordan Shoes</h2>
            <div className="content-wallpaper">
              <div className="area">
                <h2 > Jordan's best store</h2>
                <p id="descricao-background"></p>      
              </div>
            </div>

          </header>
          <section>
            <h2>Our Products</h2>
            <>

      <Modal show={this.state.show} onHide={()=> this.setState({show:true})}>
        <Modal.Header closeButton>
          <Modal.Title>SAMPLE HEADING</Modal.Title>    {/*SHOWS MODAL HEADING*/}
        </Modal.Header>
        <Modal.Body>YOU CLICKED ON AN ITEM</Modal.Body> {/*SHOWS MODAL DESCRIPTION */}
        <Modal.Footer>
          <Button variant="primary" onClick={()=> this.setState({show:false})}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            <span>Free shipping and toast slipper is here, enjoy for a limited time.</span>
            <div>
              <ul className="container">
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-1.png' alt="Sapato 1" /></li>
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-2.png' alt="Sapato 2" /></li>
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-3.png' alt="Sapato 3" /></li>
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-4.png' alt="Sapato 4" /></li>
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-5.png' alt="Sapato 5" /></li>
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-6.png' alt="Sapato 6" /></li>
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-7.png' alt="Sapato 7" /></li>
                <li onClick={()=> this.setState({show:true})}><img src='img/shoe-8.png' alt="Sapato 8" /></li>
              </ul>
            </div>
          </section>
          <footer className="black-block">
            <span>All rights reserved.</span>
          </footer>
        </main>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Principal/>,
    document.getElementById('root')
  );
  