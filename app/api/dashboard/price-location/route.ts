import { NextResponse } from 'next/server';
import DashboardService from '@/lib/dashboard-service';

export async function GET() {
  try {
    const data = await DashboardService.getPriceLocationData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Price Location API Error:', error);
    
    // Fallback to mock data if database error
    const mockData = {
      priceDistribution: [
        { priceRange: "$0-50", count: 1250 },
        { priceRange: "$51-100", count: 2340 },
        { priceRange: "$101-200", count: 1890 },
        { priceRange: "$201-300", count: 980 },
        { priceRange: "$301-500", count: 650 },
        { priceRange: "$500+", count: 320 }
      ],
      avgPriceByArea: [
        { area: "Manhattan", avgPrice: 185, listingCount: 15420 },
        { area: "Brooklyn", avgPrice: 125, listingCount: 20350 },
        { area: "Queens", avgPrice: 95, listingCount: 8960 },
        { area: "Bronx", avgPrice: 78, listingCount: 1080 },
        { area: "Staten Island", avgPrice: 110, listingCount: 373 }
      ]
    };
    
    return NextResponse.json(mockData);
  }
}
