import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Chefs from './Components/Chefs/Chefs';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import MealContextProvider from './Components/Context/Store';

function App() {
  return (
    <>
    <Router basename={'/meal'}>
        <MealContextProvider>
          <Navbar />
          
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='home' element={<Home />} ></Route>
                <Route path='about' element={<About />} ></Route>
                <Route path='menu' element={<Menu />} ></Route>
                <Route path='chefs' element={<Chefs />} ></Route>
                <Route path='cart' element={<Cart />} ></Route>
                <Route path='*' element={<NotFound />} ></Route>
            </Routes>
          
          <Footer />
          </MealContextProvider>
     </Router>
    </>

  );
}

export default App;
