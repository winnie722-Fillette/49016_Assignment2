import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import CheckOut from "./pages/checkout";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<CheckOut />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
