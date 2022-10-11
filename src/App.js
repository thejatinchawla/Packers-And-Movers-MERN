import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Login from './components/Login';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import About from './components/About';
import Help from './components/Help';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <hr />
      <Footer />
    </>
  );
}
export default App;




          
         
