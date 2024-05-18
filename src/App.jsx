import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage/>}/>
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
