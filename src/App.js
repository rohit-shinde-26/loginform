import './App.css';
import Login from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Company from './Components/Company';
import Companyinfo from './Components/Companyinfo';
import Weather from './api';
import StudentForm from './Components/students';


function App() {
 
  return (
    <div className="App">

      <Company />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/companyinfo' element={<Companyinfo />} />
      </Routes> 
      {/* <Weather /> */}
    </div>
  );
}

export default App;
