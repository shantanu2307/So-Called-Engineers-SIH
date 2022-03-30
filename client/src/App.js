import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Otp from './components/Otp';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route exact path='/otpverify' element={<Otp />}/>
      </Routes>
      
    </div>
  );
}

export default App;
