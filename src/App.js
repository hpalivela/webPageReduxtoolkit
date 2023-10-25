import React from 'react'
import Home from './pages/Home'
import{BrowserRouter as Router} from 'react-router-dom'
import {Routes,Route} from'react-router-dom';
import BlodDetails from './pages/BlodDetails';
import Header from './components/Header';
const App = () => {
  return (
    <div className='p-[20px]'>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          </Route>
          <Route exact path='/blogdetails/:id' element={<BlodDetails/>}>
          </Route>
        </Routes>
      </Router>

      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
    </div>
  )
}

export default App



