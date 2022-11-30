import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import Header from './Components/Header';

const App = () => {
  return (  
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
