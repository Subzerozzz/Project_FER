import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutDefault } from "./layouts/LayoutDefault";
import { LoginPage } from "./pages/Authen/Login";
import { RegisterPage } from "./pages/Authen/Register";
import { Categories } from "./pages/Categories/Categories";
import { CategoriesLayout } from "./pages/Categories/CategoriesLayout";
import { CategoryItem } from "./pages/Categories/CategoryItem";
import { HomePage } from "./pages/Home/Home";
import { SearchPage } from "./pages/Search/Search";
import { SingersPage } from "./pages/Singers/Singers";
import { SongDetail } from "./pages/Song/SongDetail";
import { SongLayout } from "./pages/Song/SongLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="categories" element={<CategoriesLayout />}>
              <Route index element={<Categories />}></Route>
              <Route path=":categoryID" element={<CategoryItem />}></Route>
            </Route>
            <Route path="song" element={<SongLayout />}>
              <Route path=":songID" element={<SongDetail />}></Route>
            </Route>
            <Route path="singers" element={<SingersPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
