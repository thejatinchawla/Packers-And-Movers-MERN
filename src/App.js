import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Login from './components/Login';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './components/Signup';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          
          <Route path='/login' element={<Login/>}/>
         
        </Routes>
      </BrowserRouter>
      <hr />
      <Footer />
    </>
  );
}
export default App;




