import React from 'react';
import './assets/css/global.css';
import Rotas from './routes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
  return (
    <Rotas/>
  );
}

export default App;
