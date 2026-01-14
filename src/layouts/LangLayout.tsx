import React from 'react'

interface LangLayoutProps {
  children: React.ReactNode
}

export default function LangLayout({ children }: LangLayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
