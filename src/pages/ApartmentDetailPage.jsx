import React from 'react'
import ApartmentImage2 from '../components/ApartmentImage2'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'
import PagePath from '../components/PagePath'
import ApartmentImage1 from '../components/ApartmentImage1'
import AptDescription from '../components/AptDescription'
import AvailableRooms from '../components/AvailableRooms'
import ApartmentNavbar from '../components/ApartmentNavbar'
const ApartmentDetailPage = () => {
  return (
    <>
    <ApartmentNavbar />
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