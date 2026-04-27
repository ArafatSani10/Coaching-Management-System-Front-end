import Navbar from '@/components/shared/navbar'
import React from 'react'
export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}