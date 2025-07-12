import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import User from './pages/Users/User';
import Comments from './pages/Comments/Comments';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} /> 
              <Route path='/contact' element={<Contact/>}/> 
              <Route path='/users' element={<Users/>} />
              <Route path='/users/:id' element={<User/>} /> 
              <Route path='/comments' element={<Comments/>} />
              <Route path='/*' element={<NotFound/>} />
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
