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
<<<<<<< HEAD
import UserProfilePage from "./pages/UserProfilePage";
=======
import ProfileLayout from "./layout/ProfileLayout";
import AboutMePage from "./pages/AboutMePage";
>>>>>>> ce269f2a7d89dfa4429426d9646dadc89f603ad5

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/confirmpassword" element={<ConfirmPassword />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/registernumber" element={<RegisterNumber/>} />
      <Route path="/signup" element={<SignupPage/>}/>
<<<<<<< HEAD
      <Route path="/userProfile" element={<UserProfilePage/>}/>
=======
      <Route path="/profile" element={<ProfileLayout />}>
        <Route path="/profile/about-me" element={<AboutMePage />} />
      </Route>
>>>>>>> ce269f2a7d89dfa4429426d9646dadc89f603ad5
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
