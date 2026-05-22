import './App.css'
import Landing from './landing';
import Footer from './footer';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
  
    
  
}

export default App;
