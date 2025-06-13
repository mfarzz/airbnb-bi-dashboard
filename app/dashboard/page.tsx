import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MapPin, TrendingUp, MessageSquare, Users, ArrowRight, BarChart3, Bot } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Overview Section */}
        <section>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-lg text-gray-600 mb-8">
            Pilih kategori analisis yang ingin Anda lihat untuk mendapatkan insights mendalam
          </p>
          
          {/* Dashboard Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Harga & Lokasi */}
            <Link href="/dashboard/price-location" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Harga & Lokasi</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Analisis distribusi harga dan perbandingan antar wilayah
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Peta sebaran listing berdasarkan harga</li>
                  <li>• Perbandingan harga rata-rata antar wilayah</li>
                  <li>• Visualisasi harga per neighbourhood</li>
                </ul>
              </div>
            </Link>

            {/* Ketersediaan & Performa */}
            <Link href="/dashboard/availability-performance" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ketersediaan & Performa</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Analisis ketersediaan properti dan performa listing
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Grafik ketersediaan properti per wilayah</li>
                  <li>• Listing dengan review terbanyak</li>
                  <li>• Analisis rating tertinggi</li>
                </ul>
              </div>
            </Link>

            {/* Review & Tren */}
            <Link href="/dashboard/review-trends" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageSquare className="w-6 h-6 text-green-500" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Review & Tren</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Analisis tren review dan kepuasan pelanggan
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Tren review bulanan</li>
                  <li>• Korelasi harga dan jumlah review</li>
                  <li>• Analisis pertumbuhan review</li>
                </ul>
              </div>
            </Link>

            {/* Host & Listing */}
            <Link href="/dashboard/host-listing" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Host & Listing</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Analisis distribusi host dan performa listing
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Host dengan listing terbanyak</li>
                  <li>• Distribusi host berdasarkan jumlah listing</li>
                  <li>• Insights performance host</li>
                </ul>
              </div>
            </Link>

            {/* ML Price Prediction */}
            <Link href="/dashboard/price-prediction" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Bot className="w-6 h-6 text-blue-500" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ML Price Prediction</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Prediksi harga listing menggunakan Machine Learning
                </p>
                <ul className="space-y-1 text-xs text-gray-500">
                  <li>• Prediksi harga berdasarkan fitur listing</li>
                  <li>• Batch prediction untuk multiple listing</li>
                  <li>• Model insights dan performance metrics</li>
                </ul>
              </div>
            </Link>
          </div>
        </section>

        {/* Quick Stats Overview */}
        <section className="bg-white p-8 rounded-xl shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistik Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">46,183</div>
              <div className="text-sm text-gray-600">Total Listing</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">46,000</div>
              <div className="text-sm text-gray-600">Total Host</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">20,430</div>
              <div className="text-sm text-gray-600">Total Review</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-600">Wilayah</div>
            </div>
          </div>
        </section>

        {/* Data Source Info */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Data Source</h3>
              <p className="text-gray-300">
                Dashboard ini menggunakan data real-time dari database PostgreSQL dengan 
                struktur data warehouse yang dioptimalkan untuk analisis BI.
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Last Updated</div>
              <div className="text-lg font-semibold">{new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
