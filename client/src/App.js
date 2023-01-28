import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Index.jsx";
import Home from "./Pages/Home/Index.jsx";
import Footer from "./Components/Footer/Index.jsx";
import AddPage from "./Pages/AddPage/Index.jsx";
import Details from "./Pages/Details/Index.jsx";
import WishList from "./Pages/WishList/Index.jsx";
import { useState } from "react";
function App() {
  let [wishList, setWishList] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar wishList={wishList} setWishList={setWishList} />

        <Routes>
          <Route
            path="/"
            element={<Home wishList={wishList} setWishList={setWishList} />}
          />
          <Route path="/AddPage" element={<AddPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route
            path="/WishList"
            element={<WishList wishList={wishList} setWishList={setWishList} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
