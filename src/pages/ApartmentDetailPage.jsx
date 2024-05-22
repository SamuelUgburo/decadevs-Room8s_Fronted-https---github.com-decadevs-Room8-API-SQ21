import React from 'react'
import Navbar2 from '../components/Navbar2'
import ApartmentImage2 from '../components/ApartmentImage2'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'
import PagePath from '../components/PagePath'
import ApartmentImage1 from '../components/ApartmentImage1'
import AptDescription from '../components/AptDescription'
import AvailableRooms from '../components/AvailableRooms'
const ApartmentDetailPage = () => {
  return (
    <>
    <Navbar2/>
    <PagePath/>
    <ApartmentImage1/>
    <AptDescription/>
    <AvailableRooms/>
    <ApartmentImage2/>
    <Footer />
    <FooterNav /> 
    </>
  )
}

export default ApartmentDetailPage