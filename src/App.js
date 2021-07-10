import { Fragment } from 'react';
import './App.css';
import "rbx/index.css";
import { Navbar } from 'rbx'


function App() {
  return (
    <Fragment>
        <Navbar color="light">
          <Navbar.Brand>
          <Navbar.Item href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
         <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
        </Navbar.Menu>
      </Navbar>
    
    <div class="field">
      <label class="label">Bogosort Information</label>
    <div class="control">
      <input class="input" type="text" placeholder="Bogosort"/>
    </div>
  </div>

  <div class="button">
    <button class="button is-light">Enviar</button>
  </div>

  <footer class="footer">
  <div class="content has-text-centered">
    <p>
    Bulma is a free, open source CSS framework based on Flexbox and built with Sass. It's 100% responsive, fully modular, and available for free.
    </p>
  </div>
</footer>
    
    </Fragment>
  );
}

export default App;
