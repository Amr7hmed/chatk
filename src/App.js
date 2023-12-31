import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/sign-up";
import ForgotPassword from "./pages/auth/forgot-password";
import Conversations from "./pages/dashboard/conversations";
import Bots from "./pages/dashboard/bots";
import Directories from "./pages/dashboard/directories";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/auth/login" element={<Login />} exact />
            <Route path="/auth/sign-up" element={<SignUp />} exact />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} exact />
            <Route path="/dashboard/conversations" element={<Conversations />} exact />
            <Route path="/dashboard/bots" element={<Bots />} exact />
            <Route path="/dashboard/directories" element={<Directories />} exact />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
