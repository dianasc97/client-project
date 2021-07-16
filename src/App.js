import React, {Fragment} from 'react';
import './App.css';
import "rbx/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";




function App() {
  return (
    <Fragment>
        <Header/>
        <Body/>
        <Footer/>
    </Fragment>
  );
}

export default App;
