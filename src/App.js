import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import PdfCont from './PdfCont/PdfCont';

const App = () => (
  <div className='AppContainer'>
    <PdfCont></PdfCont>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
