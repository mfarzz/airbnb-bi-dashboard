"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import { MapPin, DollarSign } from "lucide-react";

interface PriceLocationData {
  priceDistribution: Array<{ priceRange: string; count: number }>;
  avgPriceByArea: Array<{ area: string; avgPrice: number; listingCount: number }>;
  priceMap: Array<{ neighbourhood: string; avgPrice: number; latitude: number; longitude: number }>;
}

export function PriceLocationDashboard() {
  const [data, setData] = useState<PriceLocationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard/price-location');
        const apiData = await response.json();
        
        // Add mock price map data since it's not from database
        const enrichedData: PriceLocationData = {
          ...apiData,
          priceMap: [
            { neighbourhood: "Tribeca", avgPrice: 285, latitude: 40.7195, longitude: -74.0089 },
            { neighbourhood: "SoHo", avgPrice: 245, latitude: 40.7241, longitude: -74.0024 },
            { neighbourhood: "Greenwich Village", avgPrice: 195, latitude: 40.7336, longitude: -74.0027 },
            { neighbourhood: "Williamsburg", avgPrice: 145, latitude: 40.7081, longitude: -73.9571 },
            { neighbourhood: "Park Slope", avgPrice: 165, latitude: 40.6782, longitude: -73.9442 }
          ]
        };
        
        setData(enrichedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching price location data:', error);
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
      <div className="h-64 bg-gray-200 rounded-lg"></div>
    </div>;
  }

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Rata-rata Harga</p>
              <p className="text-2xl font-bold text-gray-900">$142</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Harga Tertinggi</p>
              <p className="text-2xl font-bold text-gray-900">$285</p>
            </div>
            <DollarSign className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Harga Terendah</p>
              <p className="text-2xl font-bold text-gray-900">$78</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Wilayah</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
            </div>
            <MapPin className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Peta Sebaran Listing Berdasarkan Harga
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.priceDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="priceRange" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Average Price by Area */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Perbandingan Harga Rata-rata Antar Wilayah
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.avgPriceByArea}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, 'Rata-rata Harga']} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="avgPrice" 
                stroke="#3b82f6" 
                strokeWidth={3}
                name="Rata-rata Harga"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Price Map Visualization */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Visualisasi Harga per Neighbourhood
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={data.priceMap}>
                <CartesianGrid />
                <XAxis dataKey="longitude" name="Longitude" />
                <YAxis dataKey="latitude" name="Latitude" />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name) => {
                    if (name === 'avgPrice') return [`$${value}`, 'Rata-rata Harga'];
                    return [value, name];
                  }}
                />
                <Scatter dataKey="avgPrice" fill="#ef4444" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-gray-900">Top Neighbourhoods by Price</h4>
            {data.priceMap
              .sort((a, b) => b.avgPrice - a.avgPrice)
              .map((item, index) => (
                <div key={item.neighbourhood} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="font-medium text-gray-900">{item.neighbourhood}</span>
                  </div>
                  <span className="text-lg font-bold text-green-600">${item.avgPrice}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
