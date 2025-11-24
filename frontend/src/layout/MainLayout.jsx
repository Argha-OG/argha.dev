import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

import { Spotlight } from "@/components/ui/spotlight";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20 antialiased relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
      <Navbar />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

MainLayout
