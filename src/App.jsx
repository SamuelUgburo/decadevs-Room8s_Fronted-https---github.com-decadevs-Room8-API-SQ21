import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ConfirmPassword from "./pages/ConfirmPassword";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";
import RegisterNumber from "./pages/RegisterNumber";
import SignupPage from "./pages/SignupPage";
import ProfileLayout from "./layout/ProfileLayout";
import AboutMePage from "./pages/AboutMePage";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/confirmpassword" element={<ConfirmPassword />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/registernumber" element={<RegisterNumber/>} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/profile" element={<ProfileLayout />}>
        <Route path="/profile/about-me" element={<AboutMePage />} />
      </Route>
    </Route>
  )
);


function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
