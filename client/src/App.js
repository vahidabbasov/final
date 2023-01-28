import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Index.jsx'
import Home from './Pages/Home/Index.jsx'

function App() {
  return <>
  
  <BrowserRouter>


  <Navbar/>

  <Routes>


    <Route path='/' element={<Home/>} />
  </Routes>
  

  </BrowserRouter>
  </>
}

export default App;
