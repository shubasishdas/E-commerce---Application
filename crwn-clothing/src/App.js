import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>This one belongs to Shop</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
