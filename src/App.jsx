import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ConfirmPassword from "./pages/ConfirmPassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path="/ConfirmPassword" element={<ConfirmPassword/>}/> 
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
