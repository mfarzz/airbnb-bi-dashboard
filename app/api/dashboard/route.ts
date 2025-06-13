import { NextResponse } from 'next/server';
import DashboardService from '@/lib/dashboard-service';

export async function GET() {
  try {
    // Fetch all dashboard data
    const [
      priceLocationData,
      availabilityPerformanceData,
      reviewTrendData,
      hostListingData
    ] = await Promise.all([
      DashboardService.getPriceLocationData(),
      DashboardService.getAvailabilityPerformanceData(),
      DashboardService.getReviewTrendData(),
      DashboardService.getHostListingData()
    ]);

    const dashboardData = {
      priceLocation: priceLocationData,
      availabilityPerformance: availabilityPerformanceData,
      reviewTrends: reviewTrendData,
      hostListing: hostListingData,
      timestamp: new Date().toISOString()
    };

    return NextResponse.json(dashboardData);
  } catch (error) {
    console.error('Dashboard API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
