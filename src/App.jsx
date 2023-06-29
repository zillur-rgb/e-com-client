import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/PageNotFound";
import PrivateRoute from "./routes/Private";
import Dashboard from "./pages/user/Dashboard";
import ForgotPasssword from "./pages/Auth/ForgotPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
