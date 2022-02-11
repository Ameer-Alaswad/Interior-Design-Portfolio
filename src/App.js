import './App.css';
import Navbar from './components/Navbar/header'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
    </div>
    </BrowserRouter>
  );
}

export default App;
