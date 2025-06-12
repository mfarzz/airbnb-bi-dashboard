import { NextResponse } from 'next/server';
import DashboardService from '@/lib/dashboard-service';

export async function GET() {
  try {
    const data = await DashboardService.getHostListingData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Host Listing API Error:', error);
    
    // Fallback to mock data if database error
    const mockData = {
      hostDistribution: [
        { hostType: "Single Listing", count: 28450, percentage: 62 },
        { hostType: "2-5 Listings", count: 12890, percentage: 28 },
        { hostType: "6-10 Listings", count: 3240, percentage: 7 },
        { hostType: "11+ Listings", count: 1420, percentage: 3 }
      ],
      topHosts: [
        { name: "Sarah Johnson", listings: 24, totalReviews: 1250, avgRating: 4.8, revenue: 185000 },
        { name: "Michael Chen", listings: 18, totalReviews: 890, avgRating: 4.7, revenue: 142000 },
        { name: "Emma Wilson", listings: 15, totalReviews: 756, avgRating: 4.9, revenue: 128000 },
        { name: "David Rodriguez", listings: 12, totalReviews: 634, avgRating: 4.6, revenue: 98000 },
        { name: "Lisa Anderson", listings: 11, totalReviews: 523, avgRating: 4.8, revenue: 87000 }
      ],
      listingsByHost: [
        { range: "1 Listing", hosts: 28450, totalListings: 28450 },
        { range: "2-3 Listings", hosts: 8960, totalListings: 22400 },
        { range: "4-5 Listings", hosts: 3930, totalListings: 17655 },
        { range: "6-10 Listings", hosts: 3240, totalListings: 25920 },
        { range: "11+ Listings", hosts: 1420, totalListings: 19880 }
      ]
    };
    
    return NextResponse.json(mockData);
  }
}
