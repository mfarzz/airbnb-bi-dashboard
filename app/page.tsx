import Link from "next/link";
import { BarChart3, TrendingUp, Users, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="flex-1 w-full flex flex-col gap-12 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white shadow-sm">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-lg font-bold text-gray-900">Airbnb Analytics</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard" 
                className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <BarChart3 className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            </div>
          </div>
        </nav>
        
        <div className="flex-1 flex flex-col gap-16 max-w-7xl p-5 w-full">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900">
                Airbnb Business Intelligence
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Analisis komprehensif data Airbnb untuk insights bisnis yang mendalam. 
                Pantau performa harga, lokasi, review, dan distribusi host secara real-time.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href="/dashboard" 
                className="inline-flex items-center space-x-3 px-8 py-4 bg-red-500 text-white text-lg font-semibold rounded-xl hover:bg-red-600 transition-colors shadow-lg"
              >
                <BarChart3 className="w-6 h-6" />
                <span>Lihat Dashboard</span>
              </Link>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-gray-900">Harga & Lokasi</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Peta sebaran listing berdasarkan harga</li>
                <li>• Perbandingan harga rata-rata antar wilayah</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-semibold text-gray-900">Ketersediaan & Performa</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Grafik ketersediaan properti per wilayah</li>
                <li>• Listing dengan review terbanyak dan rating tertinggi</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="font-semibold text-gray-900">Review & Tren</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tren review bulanan</li>
                <li>• Korelasi antara harga dan jumlah review</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="font-semibold text-gray-900">Host & Listing</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Host dengan jumlah listing terbanyak</li>
                <li>• Distribusi host</li>
              </ul>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-white p-8 rounded-xl shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Statistik Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">46,183</div>
                <div className="text-sm text-gray-600">Total Listing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">46,000</div>
                <div className="text-sm text-gray-600">Total Host</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">20,430</div>
                <div className="text-sm text-gray-600">Total Review</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">5</div>
                <div className="text-sm text-gray-600">Wilayah</div>
              </div>
            </div>
          </section>
        </div>

        <footer className="w-full bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-semibold">Airbnb Analytics BI</span>
              </div>
              <div className="text-sm text-gray-400">
                © 2024 Business Intelligence Dashboard. Built for data-driven insights.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
