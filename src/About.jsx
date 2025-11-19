import React from 'react'
import { Outlet } from "react-router"
import ProfileClass from './ProfileClass'
import { ProfileFunction } from './ProfileFunction'


export const About = () => {
  return (
    <div className='min-80 min-h-80 flex flex-col m-10'>About
      {/* <Outlet /> */}
      <ProfileClass name={"class"} two="x" />
      <br />
      <ProfileFunction name={"function"} />

    </div>
  )
}
