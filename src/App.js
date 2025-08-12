import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// UI Components
import { Navigationbar } from './components/UI/Navigationbar.jsx';
import { Footer } from './components/UI/Footer.jsx';

// Pages
import { Home } from './components/Pages/Home.jsx';
import { About } from './components/Pages/About.jsx';
import { Contact } from './components/Pages/Contact.jsx';
import { Loginpage } from './components/Pages/Loginpage.jsx';
import { RegistrationForm } from './components/Pages/RegistrationForm.jsx';

// Admin Panel
import { SignInAdmin } from './components/AdminPanel/SignInAdmin.jsx';
import { Admin } from './components/AdminPanel/Admin.jsx';
import { EditForm } from './components/AdminPanel/EditForm.jsx';
import { LearnerList } from './components/AdminPanel/LearnerList.jsx';

// Topics
import { Cplusplus } from './components/Topics/Cplusplus.jsx';
import { Java } from './components/Topics/Java.jsx';
import { Python } from './components/Topics/Python.jsx';
import { HTML } from './components/Topics/HTML.jsx';
import { CSS } from './components/Topics/CSS.jsx';
import { JavaScript } from './components/Topics/JavaScript.jsx';

function App() {
  return (
    <BrowserRouter>
    
    <Navigationbar></Navigationbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/registration" element={<RegistrationForm/>}></Route>
        <Route path="/signinadmin" element={<SignInAdmin/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/edit/:Phone" element={<EditForm/>}></Route>
        <Route path="/cplusplus" element={<Cplusplus/>}></Route>
        <Route path="/java" element={<Java/>}></Route>
        <Route path="/python" element={<Python/>}></Route>
        <Route path="/html" element={<HTML/>}></Route>
        <Route path="/css" element={<CSS/>}></Route>
        <Route path="/javascript" element={<JavaScript/>}></Route>
        <Route path="/learnerlist" element={<LearnerList/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
