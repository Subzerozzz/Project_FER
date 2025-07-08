
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home/Home';
import { LayoutDefault } from './layouts/LayoutDefault';
import { LoginPage } from './pages/Authen/Login';
import { RegisterPage } from './pages/Authen/Register';
import { Categories } from './pages/Categories/Categories';
import { SingersPage } from './pages/Singers/Singers';
import Favorite from './pages/Favorite/Favorite';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault/>} >
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage/>} />
            <Route path='register' element={<RegisterPage/>} />
            <Route path='categories' element={<Categories/>} />
            <Route path='singers' element={<SingersPage />} />
            <Route path='wishlist' element={<Favorite />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
