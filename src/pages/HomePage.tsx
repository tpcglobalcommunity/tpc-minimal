
export default function HomePage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">Welcome to TPC Minimal</h2>
      <p className="text-gray-600 mb-6">
        This is a minimal React TypeScript project with Vite and Tailwind CSS.
      </p>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium mb-2">Features</h3>
        <ul className="text-left max-w-md mx-auto space-y-2">
          <li>✅ React 19 with TypeScript</li>
          <li>✅ Vite for fast development</li>
          <li>✅ Tailwind CSS for styling</li>
          <li>✅ React Router for navigation</li>
          <li>✅ ESLint for code quality</li>
        </ul>
      </div>
    </div>
  )
}
