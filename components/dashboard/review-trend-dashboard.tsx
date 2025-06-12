"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, ScatterChart, Scatter } from "recharts";
import { MessageSquare, TrendingUp, Users, Calendar } from "lucide-react";

interface ReviewTrendData {
  monthlyReviews: Array<{ month: string; reviews: number; avgRating: number }>;
  priceVsReviews: Array<{ price: number; reviews: number; neighbourhood: string }>;
  reviewTrends: Array<{ date: string; reviews: number; newListings: number }>;
}

export function ReviewTrendDashboard() {
  const [data, setData] = useState<ReviewTrendData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard/review-trends');
        const apiData = await response.json();
        
        // Add mock review trends data since it's not from database
        const enrichedData: ReviewTrendData = {
          ...apiData,
          reviewTrends: [
            { date: "2024-01", reviews: 1250, newListings: 45 },
            { date: "2024-02", reviews: 1180, newListings: 32 },
            { date: "2024-03", reviews: 1420, newListings: 67 },
            { date: "2024-04", reviews: 1650, newListings: 89 },
            { date: "2024-05", reviews: 1890, newListings: 112 },
            { date: "2024-06", reviews: 2100, newListings: 134 }
          ]
        };
        
        setData(enrichedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching review trend data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="animate-pulse space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 bg-gray-200 rounded-lg"></div>
        <div className="h-64 bg-gray-200 rounded-lg"></div>
      </div>
    </div>;
  }

  if (!data) return null;

  const totalReviews = data.monthlyReviews.reduce((sum, item) => sum + item.reviews, 0);
  const avgRating = data.monthlyReviews.reduce((sum, item) => sum + item.avgRating, 0) / data.monthlyReviews.length;
  const reviewGrowth = ((data.monthlyReviews[data.monthlyReviews.length - 1].reviews - data.monthlyReviews[0].reviews) / data.monthlyReviews[0].reviews * 100);

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Review</p>
              <p className="text-2xl font-bold text-gray-900">{totalReviews.toLocaleString()}</p>
            </div>
            <MessageSquare className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rata-rata Rating</p>
              <p className="text-2xl font-bold text-gray-900">{avgRating.toFixed(1)}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pertumbuhan Review</p>
              <p className="text-2xl font-bold text-gray-900">+{reviewGrowth.toFixed(1)}%</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Review Bulan Ini</p>
              <p className="text-2xl font-bold text-gray-900">{data.monthlyReviews[data.monthlyReviews.length - 1].reviews}</p>
            </div>
            <Users className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Review Trend */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tren Review Bulanan
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data.monthlyReviews}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="reviews" 
                stackId="1"
                stroke="#3b82f6" 
                fill="#3b82f6"
                fillOpacity={0.6}
                name="Total Review"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Rating Trend */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tren Rating Bulanan
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.monthlyReviews}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[3.5, 5]} />
              <Tooltip formatter={(value) => [value, 'Rating']} />
              <Line 
                type="monotone" 
                dataKey="avgRating" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Rata-rata Rating"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Price vs Reviews Correlation */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Korelasi antara Harga dan Jumlah Review
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={data.priceVsReviews}>
              <CartesianGrid />
              <XAxis dataKey="price" name="Harga" unit="$" />
              <YAxis dataKey="reviews" name="Reviews" />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                formatter={(value, name, ) => {
                  if (name === 'reviews') return [value, 'Total Review'];
                  return [value, name];
                }}
                labelFormatter={(label, payload) => {
                  if (payload && payload[0]) {
                    return `${payload[0].payload.neighbourhood}`;
                  }
                  return label;
                }}
              />
              <Scatter dataKey="reviews" fill="#ef4444" />
            </ScatterChart>
          </ResponsiveContainer>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Insight Korelasi</h4>
            <div className="space-y-3">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900">Tren Positif</h5>
                <p className="text-sm text-blue-700 mt-1">
                  Wilayah dengan harga lebih tinggi cenderung memiliki lebih banyak review, 
                  menunjukkan tingkat okupansi yang baik.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-medium text-green-900">Performance Terbaik</h5>
                <p className="text-sm text-green-700 mt-1">
                  Tribeca ($285) dan SoHo ($220) menunjukkan performa terbaik dengan 
                  review terbanyak meski harga tinggi.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h5 className="font-medium text-yellow-900">Opportunity</h5>
                <p className="text-sm text-yellow-700 mt-1">
                  Brooklyn dan Queens memiliki potensi pertumbuhan dengan harga kompetitif 
                  dan review yang terus meningkat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Growth Analysis */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Analisis Pertumbuhan Review dan Listing Baru
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.reviewTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="reviews" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="Total Review"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="newListings" 
              stroke="#10b981" 
              strokeWidth={3}
              name="Listing Baru"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
