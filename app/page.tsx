'use client';

import Link from "next/link";
import { BarChart3, Home as HomeIcon, MapPin, Star, Heart, Users, Calendar } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Houses */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <HomeIcon className="w-8 h-8 text-red-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow delay-1000">
          <HomeIcon className="w-6 h-6 text-pink-300 opacity-50" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce-slow delay-2000">
          <HomeIcon className="w-10 h-10 text-orange-300 opacity-40" />
        </div>
        
        {/* Floating Location Pins */}
        <div className="absolute top-60 right-1/3 animate-float">
          <MapPin className="w-7 h-7 text-red-400 opacity-60" />
        </div>
        <div className="absolute bottom-60 right-10 animate-float delay-500">
          <MapPin className="w-5 h-5 text-pink-400 opacity-50" />
        </div>
        <div className="absolute top-32 left-1/3 animate-float delay-1500">
          <MapPin className="w-9 h-9 text-orange-400 opacity-40" />
        </div>
        
        {/* Floating Stars */}
        <div className="absolute top-16 right-1/4 animate-pulse-slow">
          <Star className="w-6 h-6 text-yellow-400 opacity-70" />
        </div>
        <div className="absolute bottom-20 left-1/2 animate-pulse-slow delay-700">
          <Star className="w-4 h-4 text-yellow-300 opacity-60" />
        </div>
        <div className="absolute top-3/4 left-16 animate-pulse-slow delay-1200">
          <Star className="w-8 h-8 text-yellow-500 opacity-50" />
        </div>
        
        {/* Floating Hearts */}
        <div className="absolute top-1/3 right-12 animate-float-reverse">
          <Heart className="w-5 h-5 text-red-400 opacity-50" />
        </div>
        <div className="absolute bottom-1/3 left-20 animate-float-reverse delay-800">
          <Heart className="w-7 h-7 text-pink-400 opacity-40" />
        </div>
        
        {/* Users and Calendar Icons */}
        <div className="absolute top-1/2 left-8 animate-bounce-slow delay-500">
          <Users className="w-6 h-6 text-blue-400 opacity-50" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-bounce-slow delay-1800">
          <Calendar className="w-8 h-8 text-green-400 opacity-40" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-1/2 w-32 h-32 bg-gradient-to-r from-red-200 to-pink-200 rounded-full opacity-30 animate-float blur-sm"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-r from-orange-200 to-red-200 rounded-full opacity-25 animate-float-reverse blur-sm delay-1000"></div>
        <div className="absolute top-1/2 right-16 w-20 h-20 bg-gradient-to-r from-pink-200 to-red-200 rounded-full opacity-20 animate-pulse-slow blur-sm"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center space-y-12 max-w-4xl px-6">
          {/* Airbnb Logo with Animation */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-4xl">A</span>
              </div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-red-400 to-red-500 rounded-3xl animate-pulse opacity-75 -z-10"></div>
            </div>
          </div>
          
          {/* Brand Title with Enhanced Animation */}
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
              Airbnb
            </h1>
            <div className="relative">
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                Business Intelligence Dashboard
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <BarChart3 className="w-8 h-8 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Analytics</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 delay-100">
              <MapPin className="w-8 h-8 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">Locations</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 delay-200">
              <Star className="w-8 h-8 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Reviews</span>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 delay-300">
              <HomeIcon className="w-8 h-8 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Properties</span>
            </div>
          </div>
          
          {/* Enhanced Dashboard Button */}
          <div className="pt-6">
            <Link 
              href="/dashboard" 
              className="group relative inline-flex items-center space-x-4 px-12 py-6 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xl font-semibold rounded-full hover:from-red-600 hover:to-pink-600 transition-all duration-500 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 hover:scale-105"
            >
              <BarChart3 className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              <span>Open Dashboard</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </Link>
          </div>
          
          {/* Enhanced Subtitle */}
          <div className="space-y-4 pt-6">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Analisis komprehensif data Airbnb untuk insights bisnis yang mendalam
            </p>
            <div className="flex justify-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">Multi-User</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Real-time</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span className="text-sm">Easy to Use</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(10px) rotate(-2deg); }
          66% { transform: translateY(5px) rotate(1deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-1800 { animation-delay: 1.8s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </main>
  );
}
