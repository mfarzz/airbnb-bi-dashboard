import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ReviewTrendDashboard } from "@/components/dashboard/review-trend-dashboard";
import { DashboardSkeleton } from "@/components/dashboard/dashboard-skeleton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ReviewTrendPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Link 
            href="/dashboard" 
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Dashboard</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Review & Tren Pelanggan</h1>
          <p className="text-lg text-gray-600">
            Analisis tren review bulanan dan korelasi harga dengan kepuasan pelanggan
          </p>
        </div>

        {/* Dashboard Content */}
        <Suspense fallback={<DashboardSkeleton />}>
          <ReviewTrendDashboard />
        </Suspense>
      </main>
    </div>
  );
}
