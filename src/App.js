
import './App.css';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Components/Home/Home";
import Reservations from './pages/Reservations/Reservations';
import Covid19 from './pages/Covid19';
import Menu from "./pages/Menu/Menu";
import Gallery from './pages/Gallery';
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Reservations" element={<Reservations/>}> </Route>
        <Route path="/Covid19" element={<Covid19/>}> </Route>
        <Route path="/Menu" element={<Menu/>}> </Route>
        <Route path="/Gallery" element={<Gallery/>}> </Route>
        <Route path="/Contact" element={<Contact/>}> </Route>
      </Routes>
      <Footer/> 

      
      </BrowserRouter>
     </div>
  )
}

export default App;
