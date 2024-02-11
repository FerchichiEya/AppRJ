import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import navbar from './components/Navbar';
import{Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
    </>
  );
}

export default App;
