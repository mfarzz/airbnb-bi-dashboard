"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Home, Crown, TrendingUp } from "lucide-react";

interface HostListingData {
  hostDistribution: Array<{ hostType: string; count: number; percentage: number }>;
  topHosts: Array<{ name: string; listings: number; totalReviews: number; avgRating: number; revenue: number }>;
  listingsByHost: Array<{ range: string; hosts: number; totalListings: number }>;
}

const COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

export function HostListingDashboard() {
  const [data, setData] = useState<HostListingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard/host-listing');
        const apiData = await response.json();
        
        setData(apiData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching host listing data:', error);
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

  const totalHosts = data.hostDistribution.reduce((sum, item) => sum + item.count, 0);
  const totalListings = data.listingsByHost.reduce((sum, item) => sum + item.totalListings, 0);
  const avgListingsPerHost = (totalListings / totalHosts).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Host</p>
              <p className="text-2xl font-bold text-gray-900">{totalHosts.toLocaleString()}</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Listing</p>
              <p className="text-2xl font-bold text-gray-900">{totalListings.toLocaleString()}</p>
            </div>
            <Home className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rata-rata Listing/Host</p>
              <p className="text-2xl font-bold text-gray-900">{avgListingsPerHost}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Super Host</p>
              <p className="text-2xl font-bold text-gray-900">3,240</p>
            </div>
            <Crown className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Host Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Distribusi Host berdasarkan Jumlah Listing
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.hostDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ hostType, percentage }) => `${hostType}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {data.hostDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value.toLocaleString(), 'Host']} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Listings by Host Range */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Total Listing per Kategori Host
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.listingsByHost}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalListings" fill="#3b82f6" name="Total Listing" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Hosts Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Host dengan Jumlah Listing Terbanyak
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ranking
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nama Host
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Jumlah Listing
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Review
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rata-rata Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estimasi Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.topHosts.map((host, index) => (
                <tr key={host.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        index === 0 ? 'bg-yellow-500' : 
                        index === 1 ? 'bg-gray-400' : 
                        index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">
                          {host.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{host.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{host.listings} listings</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{host.totalReviews.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm font-medium text-gray-900">{host.avgRating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-green-600">
                      ${host.revenue.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      host.avgRating >= 4.8 ? 'bg-yellow-100 text-yellow-800' : 
                      host.avgRating >= 4.5 ? 'bg-green-100 text-green-800' : 
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {host.avgRating >= 4.8 ? 'Superhost' : 
                       host.avgRating >= 4.5 ? 'Host Plus' : 'Host'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Host Performance Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
          <h4 className="text-lg font-semibold mb-2">Single Host Dominance</h4>
          <p className="text-3xl font-bold mb-2">62%</p>
          <p className="text-sm opacity-90">
            Mayoritas host (62%) hanya memiliki satu listing, menunjukkan karakteristik 
            marketplace yang didominasi host individual.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
          <h4 className="text-lg font-semibold mb-2">Professional Hosts</h4>
          <p className="text-3xl font-bold mb-2">10%</p>
          <p className="text-sm opacity-90">
            10% host memiliki 6+ listing dan menghasilkan 40% dari total revenue, 
            menunjukkan profesionalisasi yang berkembang.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
          <h4 className="text-lg font-semibold mb-2">Average Performance</h4>
          <p className="text-3xl font-bold mb-2">{avgListingsPerHost}</p>
          <p className="text-sm opacity-90">
            Rata-rata listing per host menunjukkan keseimbangan yang baik antara 
            host individual dan profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
