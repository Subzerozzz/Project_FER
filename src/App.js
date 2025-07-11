import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LayoutDefault } from "./layouts/LayoutDefault";
import { LoginPage } from "./pages/Authen/Login";
import { RegisterPage } from "./pages/Authen/Register";
import { Categories } from "./pages/Categories/Categories";
import { HomePage } from "./pages/Home/Home";
import { Wishlist } from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<p className="text-white p-5">404 Not Found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
