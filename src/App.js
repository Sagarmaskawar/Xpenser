import React from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Addexpense from './components/pages/add-expense/Addexpense'
import Header from './components/pages/header/Header'
import Home from './components/pages/home/Home'

const App = () => {
  return (
    <BrowserRouter >
     <Header/>
     <Routes>

       <Route path='/' element={<Home/>}/>
       <Route path='addexpense' element={<Addexpense/>}/>
     </Routes>
      
     <Footer/>
    </BrowserRouter >
  )
}

export default App