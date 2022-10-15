import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Login from './components/client/Clogin';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './components/client/Signup';
import About from './components/About';
import Help from './components/Help';
import Alogin from './components/contractor/Alogin';
import AdminSignup from './components/contractor/AdminSignup';
import BothSignup from './components/contractor/BothSignup';
import ClientPage from './components/client/ClientPage';
import Order from './components/client/Order';
import AdminPage from './components/contractor/AdminPage';
import AdminOrder from './components/contractor/AdminOrder';
import Services from './components/Services';
import Clientmainpage from './components/client/Clientmainpage';
function App() {
  return (
    <div className='bg2img'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Alogin/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/adminsignup' element={<AdminSignup/>}/>
          <Route path='/bothsignup' element={<BothSignup/>}/>
          <Route path='/client' element={<ClientPage/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/adminpage' element={<AdminPage/>}/>
          <Route path='/adminorder' element={<AdminOrder/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/clientmain' element={<Clientmainpage/>}/>
        </Routes>
      </BrowserRouter>
      <hr />
      <Footer />
    </div>
  );
}
export default App;






          
         


