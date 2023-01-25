import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import User from "./pages/User";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
