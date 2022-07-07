import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavigationBar from "./routes/navigation/navigation.component";

const Shop = () => {
  return <h1>This one belongs to Shop</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
