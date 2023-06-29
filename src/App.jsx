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
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRoute from "./routes/Admin";
import CreateCategory from "./pages/Admin/CreateCategory";
import Users from "./pages/Admin/users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProducts";
import AllProducts from "./pages/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/users" element={<Users />} />
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
