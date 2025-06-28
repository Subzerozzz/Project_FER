
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home/Home';
import { LayoutDefault } from './layouts/LayoutDefault';
import { LoginPage } from './pages/Authen/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault/>} >
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
