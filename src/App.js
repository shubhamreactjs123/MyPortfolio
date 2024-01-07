import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import SplashScreen from './components/splashScreen';
import Experiments from './components/experiments/experiments';
import Profile from './components/experiments/profile/profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/home' element={<Home />}>
          <Route index element={<Home />} />
          <Route path='experiments' element={<Experiments />} >
            <Route index element={<Experiments />} />
            <Route path='profile' element={<Profile />} ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
