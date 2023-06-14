import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  )
}

export default AppRoutes;