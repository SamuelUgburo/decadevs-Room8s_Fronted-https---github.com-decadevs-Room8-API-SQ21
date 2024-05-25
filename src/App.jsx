import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ConfirmPassword from "./pages/ConfirmPassword";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";
import RegisterNumber from "./pages/RegisterNumber";
import SignupPage from "./pages/SignupPage";
import ProfileLayout from "./layout/ProfileLayout";
import AboutMePage from "./pages/AboutMePage";
import Saved from "./pages/Saved";
import ProfileSettings from "./pages/ProfileSettings";
import PropertyListing from "./pages/PropertyListing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="confirmpassword" element={<ConfirmPassword />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="registernumber" element={<RegisterNumber />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="profile" element={<ProfileLayout />}>
        <Route index element={<ProfileSettings />} />
        <Route path="propertylisting" element={<PropertyListing />} />
        <Route path="saved" element={<Saved />} />
        <Route path="about-me" element={<AboutMePage />} />
      </Route>
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
