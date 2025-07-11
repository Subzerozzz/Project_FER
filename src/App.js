import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutDefault } from "./layouts/LayoutDefault";
import { NotFound } from "./pages/404NotFound/404NotFound";
import { LoginPage } from "./pages/Authen/Login";
import { RegisterPage } from "./pages/Authen/Register";
import { Categories } from "./pages/Categories/Categories";
import { CategoriesLayout } from "./pages/Categories/CategoriesLayout";
import { CategoryItem } from "./pages/Categories/CategoryItem";
import { HomePage } from "./pages/Home/Home";
import { SearchPage } from "./pages/Search/SearchPage";
import { SingerDeatail } from "./pages/Singers/SingerDetail";
import { SingerLayout } from "./pages/Singers/SingerLayout";
import { SingersPage } from "./pages/Singers/SingersPage";
import { SongDetail } from "./pages/Song/SongDetail";
import { SongLayout } from "./pages/Song/SongLayout";
import { Wishlist } from "./pages/Wishlist/Wishlist";

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
            <Route path="singers" element={<SingerLayout />}>
              <Route index element={<SingersPage />}></Route>
              <Route path=":singerID" element={<SingerDeatail />}></Route>
            </Route>
            <Route path="search" element={<SearchPage />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;