import './App.css';
import { Outlet } from 'react-router-dom';
// import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
