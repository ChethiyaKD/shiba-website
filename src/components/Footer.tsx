'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">About SHIBA</h3>
            <p className="text-gray-400">
              Track and analyze SHIBA token performance with our advanced analytics platform.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-400">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400">Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400">Token Info</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-orange-400">Telegram</a>
              <a href="#" className="text-gray-400 hover:text-orange-400">Discord</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 SHIBA Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 