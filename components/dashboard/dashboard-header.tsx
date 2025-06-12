import { Calendar, MapPin, TrendingUp, Users } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Airbnb Analytics</h1>
              <p className="text-sm text-gray-600">Business Intelligence Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-6">
          <div className="flex items-center space-x-2 px-4 py-2 bg-red-50 rounded-lg">
            <MapPin className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-red-700">Harga & Lokasi</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-lg">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-blue-700">Ketersediaan & Performa</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-lg">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-green-700">Review & Tren</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-purple-50 rounded-lg">
            <Users className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium text-purple-700">Host & Listing</span>
          </div>
        </div>
      </div>
    </header>
  );
}
