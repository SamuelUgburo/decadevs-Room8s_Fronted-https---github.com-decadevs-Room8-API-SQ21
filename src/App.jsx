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
import ResetPassword from "./pages/ResetPassword";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import RegisterNumber from "./pages/RegisterNumber";
import SignupPage from "./pages/SignupPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProfileLayout from "./layout/ProfileLayout";
import AboutMePage from "./pages/AboutMePage";
import { AuthProvider } from "./context/AuthContext";
import ApartmentPage from "./pages/ApartmentPage";
import RealtorsProfile from "./pages/RealtorsProfile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/registernumber" element={<RegisterNumber/>} />
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/apartment" element={<ApartmentPage/>} />
      <Route path="/realtorsprofile" element={<RealtorsProfile/>} />
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
  );
}

export default App;
