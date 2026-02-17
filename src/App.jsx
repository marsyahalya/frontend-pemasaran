import { lazy, Suspense } from 'react'

const Dashboard = lazy(() => import("./pages/Dashboard"))

function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Loading Dashboard...</p>
        </div>
      </div>
    }>
      <Dashboard />
    </Suspense>
  )
}

export default App
