import './App.css';
// import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
