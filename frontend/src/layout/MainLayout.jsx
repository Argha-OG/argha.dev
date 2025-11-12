import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

export default function MainLayout({children}) {
  return (
    <div>
      <Navbar/>
      <div>{children}</div>
    </div>
  )
}

 MainLayout
