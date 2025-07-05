import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutDefault } from "./layouts/LayoutDefault";
import { LoginPage } from "./pages/Authen/Login";
import { RegisterPage } from "./pages/Authen/Register";
import { Categories } from "./pages/Categories/Categories";
import { CategoryItem } from "./pages/Categories/CategoryItem/CategoryItem";
import { HomePage } from "./pages/Home/Home";
import { SingersPage } from "./pages/Singers/Singers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="categories" element={<Categories />}>
              <Route index element={<Categories />}></Route>
              <Route path=":categoryID" element={<CategoryItem />}></Route>
            </Route>
            <Route path="categories" element={<Categories />} />
            <Route path="singers" element={<SingersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
