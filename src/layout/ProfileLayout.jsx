import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileNav from '../components/ProfileNav'

function ProfileLayout() {
  return (
    <div>
        <ProfileNav />
        <Outlet />
    </div>
  )
}

export default ProfileLayout