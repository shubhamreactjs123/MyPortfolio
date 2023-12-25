import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SplashScreen from './components/splashScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SplashScreen/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
