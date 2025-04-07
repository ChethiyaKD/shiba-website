'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import PriceDisplay from '@/components/PriceDisplay';
import Chart from '@/components/Chart';
import Tokenomics from '@/components/Tokenomics';
import HypeMeter from '@/components/HypeMeter';
import Footer from '@/components/Footer';
import { Star, Sparkle, Wave, ShibaFace, Bone, PawPrint } from '@/components/Doodles';
import Image from 'next/image';

const FeatureCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }) => (
  <div className="bg-[#1a1f2e] rounded-2xl p-6 hover:scale-105 transition-transform group">
    <div className="mb-4">
      <Icon className="w-12 h-12 text-orange-400 group-hover:text-orange-500 transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-[#1a1f2e] rounded-2xl p-6 text-center relative overflow-hidden group hover:bg-[#1e2436] transition-colors">
    <div className="absolute -right-6 -top-6 text-orange-400/10 transform rotate-12 group-hover:rotate-45 transition-transform">
      <PawPrint className="w-24 h-24" />
    </div>
    <div className="relative z-10">
      <div className="text-3xl font-bold text-orange-400 mb-2">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1623] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Decorative elements */}
        <Star className="text-orange-400/30 absolute top-12 right-12 w-8 h-8 animate-pulse" />
        <Star className="text-orange-400/30 absolute top-24 left-12 w-8 h-8 animate-pulse" />
        <Sparkle className="text-orange-400/30 absolute bottom-12 right-24 w-8 h-8 animate-pulse" />
        <Wave className="text-orange-400/10 absolute -top-8 right-0 w-32" />
        <Wave className="text-orange-400/10 absolute top-1/2 -left-16 w-32 transform rotate-180" />
        <Bone className="text-orange-400/10 absolute top-96 right-8 w-16 h-16 rotate-45" />
        <Bone className="text-orange-400/10 absolute bottom-64 left-8 w-16 h-16 -rotate-12" />
        
        {/* Hero Section */}
        <div className="relative py-16 lg:py-24 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The Future of 
                <span className="text-orange-400 block mt-2">Meme Finance</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                Join the pack and be part of the most vibrant crypto community. SHIBA isn't just a token, it's a movement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-orange-400 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 group">
                  Get Started
                  <PawPrint className="w-5 h-5 inline-block ml-2 transform group-hover:rotate-45 transition-transform" />
                </button>
                <button className="border-2 border-orange-400 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-400/10 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">100K+</div>
                  <div className="text-gray-400">Community Members</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-400">Active Trading</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">$2.8B</div>
                  <div className="text-gray-400">Market Cap</div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-3xl transform -rotate-12"></div>
              <div className="relative z-10 flex justify-center items-center">
                <div className="relative w-64 h-64 md:w-96 md:h-96">
                  <ShibaFace className="w-full h-full text-orange-400 animate-float" />
                  <div className="absolute -top-8 -right-8 animate-bounce-slow">
                    <Star className="w-12 h-12 text-orange-400" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 animate-bounce-delayed">
                    <Sparkle className="w-12 h-12 text-orange-400" />
                  </div>
                  <div className="absolute top-1/2 -right-12 animate-spin-slow">
                    <Bone className="w-16 h-16 text-orange-400/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price Display Section */}
        <div className="relative mb-12">
          <div className="absolute -top-8 -right-8">
            <ShibaFace className="w-24 h-24 text-orange-400/20 animate-bounce" />
          </div>
          <PriceDisplay />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 ">
          <div className="lg:col-span-2">
            <Chart />
          </div>
          <div>
            <Tokenomics />
          </div>
        </div>
        
        <HypeMeter />

        {/* Statistics Section */}
        <div className="mt-16 mb-16 relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <ShibaFace className="w-16 h-16 text-orange-400/20" />
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-8">SHIBA by Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard value="1.2M+" label="Total Holders" />
            <StatCard value="$2.8B" label="Market Cap" />
            <StatCard value="850K+" label="Active Wallets" />
            <StatCard value="24.5K" label="Daily Transactions" />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Choose SHIBA</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              title="Secure Trading"
              description="Advanced security measures to protect your assets with multi-layer encryption."
              icon={ShibaFace}
            />
            <FeatureCard 
              title="Community Driven"
              description="Strong and active community with regular events and governance voting."
              icon={PawPrint}
            />
            <FeatureCard 
              title="Low Fees"
              description="Optimized smart contracts ensuring minimal transaction fees."
              icon={Bone}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1a1f2e] rounded-2xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-8 -bottom-8">
            <ShibaFace className="w-32 h-32 text-orange-400/10 transform -rotate-12" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Start Trading SHIBA Today
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              Join millions of traders and investors who have already discovered the potential of SHIBA tokens.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-orange-400 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors group">
                Buy SHIBA
                <Bone className="w-4 h-4 inline-block ml-2 transform group-hover:rotate-45 transition-transform" />
              </button>
              <button className="border border-orange-400 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-400/10 transition-colors">
                View Docs
              </button>
            </div>
          </div>
        </div>
        
        {/* Community Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Join Our Community</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-[#1a1f2e] p-4 rounded-2xl hover:bg-[#1e2436] transition-colors group">
              <PawPrint className="w-8 h-8 text-orange-400 group-hover:text-orange-500 transition-colors" />
            </a>
            <a href="#" className="bg-[#1a1f2e] p-4 rounded-2xl hover:bg-[#1e2436] transition-colors group">
              <ShibaFace className="w-8 h-8 text-orange-400 group-hover:text-orange-500 transition-colors w-[32px] h-[32px]" />
            </a>
            <a href="#" className="bg-[#1a1f2e] p-4 rounded-2xl hover:bg-[#1e2436] transition-colors group">
              <Bone className="w-8 h-8 text-orange-400 group-hover:text-orange-500 transition-colors" />
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center relative">
          <button className="bg-orange-400 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-orange-500 transition-colors uppercase group">
            How to Buy
            <PawPrint className="w-6 h-6 inline-block ml-2 transform group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 