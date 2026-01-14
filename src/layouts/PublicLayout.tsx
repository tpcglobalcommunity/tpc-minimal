import React from 'react'

interface PublicLayoutProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">TPC Minimal</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}
