import React, { useState } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import ConfirmPassword from './pages/ConfirmPassword';
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import RegisterNumber from './pages/RegisterNumber';
import SignupPage from './pages/SignupPage';
import UserProfilePage from './pages/UserProfilePage';
import ProfileLayout from './layout/ProfileLayout';
import AboutMePage from './pages/AboutMePage';
import ApartmentPage from './pages/ApartmentPage';
import ApartmentDetailPage from './pages/ApartmentDetailPage';

import ProfileModal from './components/modal/ProfileModal';
import KYCModal from './components/modal/KycModal';
import SuccessfulPasswdResetModal from './components/modal/SuccessfulPasswdResetModal';
import ProfilePage from './pages/ProfilePage';

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showKYCModal, setShowKYCModal] = useState(false);
  const [showSuccessfulPasswdResetModal, setShowSuccessfulPasswdResetModal] = useState(false);

  const handleOpenProfileModal = () => setShowProfileModal(true);
  const handleCloseProfileModal = () => setShowProfileModal(false);

  const handleOpenKYCModal = () => setShowKYCModal(true);
  const handleCloseKYCModal = () => setShowKYCModal(false);

  const handleOpenSuccessfulPasswdResetModal = () => setShowSuccessfulPasswdResetModal(true);
  const handleCloseSuccessfulPasswdResetModal = () => setShowSuccessfulPasswdResetModal(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/confirmpassword" element={<ConfirmPassword />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/registernumber" element={<RegisterNumber />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profilepage" element={
          <ProfilePage
            onOpenProfileModal={handleOpenProfileModal}
            onOpenKYCModal={handleOpenKYCModal}
            onOpenSuccessfulPasswdResetModal={handleOpenSuccessfulPasswdResetModal}
          />
        } />
        <Route path="/userProfile" element={<UserProfilePage />} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route path="/profile/about-me" element={<AboutMePage />} />
        </Route>
        <Route path="/apartment" element={<ApartmentPage />} />
        <Route path="/ApartmentDetail" element={<ApartmentDetailPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ProfileModal show={showProfileModal} onClose={handleCloseProfileModal} />
      <KYCModal show={showKYCModal} onClose={handleCloseKYCModal} />
      <SuccessfulPasswdResetModal show={showSuccessfulPasswdResetModal} onClose={handleCloseSuccessfulPasswdResetModal} />
    </>
  );
}

export default App;
