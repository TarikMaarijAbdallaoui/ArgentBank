import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>} >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
