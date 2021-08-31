import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
import StartPage from './StartPage/StartPage';
import Structure from './Structure/Structure';

const App = () => {
  return (
    <BrowserRouter>
      <div className='site-background'>
        <Route exact path="/" component={StartPage}></Route>
        <Route path="/radio" component={Structure}></Route>
        <Route path="/button" component={Structure}></Route>
      </div>
    </BrowserRouter>
  )
};
export default App;
