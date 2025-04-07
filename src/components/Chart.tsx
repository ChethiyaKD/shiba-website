'use client';

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TimeButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface ChartDataPoint {
  time: string;
  price: string;
  volume: number;
}

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: ChartDataPoint;
  }>;
  label?: string;
}

const TimeButton = ({ label, active = false, onClick }: TimeButtonProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-lg transition-colors ${
      active ? 'bg-orange-400 text-white' : 'text-gray-500 hover:text-gray-300'
    }`}
  >
    {label}
  </button>
);

// Sample data for different time periods
const generateData = (points: number, baseValue: number, volatility: number): ChartDataPoint[] => {
  const data = [];
  for (let i = 0; i < points; i++) {
    const random = Math.random() * volatility - volatility / 2;
    data.push({
      time: new Date(Date.now() - (points - i) * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      price: (baseValue + random).toFixed(8),
      volume: Math.floor(Math.random() * 1000000)
    });
  }
  return data;
};

const timeRangeData = {
  '1H': generateData(60, 0.00002471, 0.00000050),
  '24H': generateData(24, 0.00002471, 0.00000100),
  '7D': generateData(168, 0.00002471, 0.00000200),
  '1M': generateData(30, 0.00002471, 0.00000300)
};

const Chart = () => {
  const [selectedRange, setSelectedRange] = useState('1H');
  const data = timeRangeData[selectedRange as keyof typeof timeRangeData];

  const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1e2436] p-3 rounded-lg border border-gray-700">
          <p className="text-gray-400">{label}</p>
          <p className="text-white font-bold">
            ${Number(payload[0].value).toFixed(8)}
          </p>
          <p className="text-sm text-gray-500">
            Vol: {payload[0].payload.volume.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[#1a1f2e] rounded-2xl p-6 h-full">
      <div className="flex gap-2 mb-6">
        {Object.keys(timeRangeData).map((range) => (
          <TimeButton
            key={range}
            label={range}
            active={selectedRange === range}
            onClick={() => setSelectedRange(range)}
          />
        ))}
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fb923c" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#fb923c" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a3042" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#4b5563"
              tick={{ fill: '#4b5563' }}
              tickLine={{ stroke: '#4b5563' }}
            />
            <YAxis 
              stroke="#4b5563"
              tick={{ fill: '#4b5563' }}
              tickLine={{ stroke: '#4b5563' }}
              tickFormatter={(value: number) => `$${value.toFixed(8)}`}
              width={100}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#fb923c"
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart; 