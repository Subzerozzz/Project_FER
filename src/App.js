
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home/Home';
import { LayoutDefault } from './layouts/LayoutDefault';
import { LoginPage } from './pages/Authen/Login';
import { RegisterPage } from './pages/Authen/Register';
import { Categories } from './pages/Categories/Categories';
import { SingerDeatail } from "./pages/Singers/SingerDetail";
import { SingerLayout } from "./pages/Singers/SingerLayout";


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
            <Route path="singers" element={<SingerLayout />}>
              <Route path=":singerID" element={<SingerDeatail />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
