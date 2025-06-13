import Link from "next/link";
import { BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-white">
      <div className="text-center space-y-8 max-w-2xl px-6">
        {/* Airbnb Logo */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-3xl">A</span>
          </div>
        </div>
        
        {/* Brand Title */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900">
            Airbnb
          </h1>
          <p className="text-xl text-gray-600">
            Business Intelligence Dashboard
          </p>
        </div>
        
        {/* Dashboard Button */}
        <div className="pt-4">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center space-x-3 px-10 py-5 bg-red-500 text-white text-xl font-semibold rounded-2xl hover:bg-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <BarChart3 className="w-7 h-7" />
            <span>Open Dashboard</span>
          </Link>
        </div>
        
        {/* Subtitle */}
        <p className="text-sm text-gray-500 pt-4">
          Analisis komprehensif data Airbnb untuk insights bisnis yang mendalam
        </p>
      </div>
    </main>
  );
}
