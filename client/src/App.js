import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Otp from './components/Otp';
import Scheme from './components/Scheme';
import SchemeId from './components/SchemeId';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/otpverify' element={<Otp />}/>
        <Route path='/scheme' element={<Scheme />}/>
        <Route path='/schemes/:schemeid' element={<SchemeId />}/>
      </Routes>
      
    </div>
  );
}

export default App;
