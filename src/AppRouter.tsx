import { Routes, Route, Navigate } from 'react-router-dom'
import LangLayout from './layouts/LangLayout'
import HomePage from './pages/HomePage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en/public" replace />} />
      <Route path="/:lang/public" element={
        <LangLayout>
          <HomePage />
        </LangLayout>
      } />
      <Route path="/en" element={<Navigate to="/en/public" replace />} />
      <Route path="/id" element={<Navigate to="/id/public" replace />} />
      <Route path="*" element={<Navigate to="/en/public" replace />} />
    </Routes>
  )
}
