'use client';

import React from 'react';

interface TokenomicsItemProps {
  label: string;
  value: string;
  color: string;
  percentage: number;
}

const TokenomicsItem = ({ label, value, color, percentage }: TokenomicsItemProps) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <span className="text-gray-400">{label}</span>
    </div>
    <div className="flex items-center gap-4">
      <span className="text-white">{value}</span>
      <span className="text-gray-500 w-8">{percentage}%</span>
    </div>
  </div>
);

const Tokenomics = () => {
  const tokenomicsData: TokenomicsItemProps[] = [
    { label: "Burn", value: "500M", percentage: 50, color: "bg-orange-400" },
    { label: "Liquidity", value: "300M", percentage: 30, color: "bg-blue-400" },
    { label: "Rewards", value: "150M", percentage: 15, color: "bg-purple-400" },
    { label: "Development", value: "50M", percentage: 5, color: "bg-green-400" }
  ];

  return (
    <div className="bg-[#1a1f2e] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Tokenomics</h2>
        <div className="text-gray-400 text-sm">Total Supply: 1B</div>
      </div>
      
      <div className="space-y-4">
        {tokenomicsData.map((item) => (
          <TokenomicsItem key={item.label} {...item} />
        ))}
        
        <div className="mt-8 pt-4 border-t border-gray-800">
          <div className="text-sm text-gray-400 mb-3">Token Details</div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-1">
            <div className="text-gray-400">Network</div>
            <div className="text-white">Ethereum</div>
            <div className="text-gray-400">Token Type</div>
            <div className="text-white">ERC-20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics; 