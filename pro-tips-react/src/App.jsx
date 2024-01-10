import './App.css'
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contacts.jsx'
import Home from './components/HomePage.jsx'
import Registr from './Components/RegistrationForm.jsx'
import { Link } from 'react-router-dom';

function App() {


  return (
    <>
      <nav>
        <Link to="/"><h3 className='kal'>Kalvium ❤️</h3></Link>
        <div className='right'>
        <Link to="/contacts"><h3>Contacts</h3></Link>
        <Link to="/registration"><h3>Registration Form</h3></Link>
        </div>
      </nav>

      <hr />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/registration" element={<Registr />} />
        </Routes>
      </div>
    </>

  )
}

export default App
