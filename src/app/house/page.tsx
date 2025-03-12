"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HousePage() {
  const [selectedParty, setSelectedParty] = useState<'all' | 'D' | 'R'>('all');

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-500 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-6 left-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              U.S. House of Representatives
            </h1>
            <p className="text-white text-opacity-90">119th Congress (2025-2027)</p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">
          <div>
            <p className="text-sm text-gray-600 font-medium">Total Seats</p>
            <p className="text-2xl font-bold text-gray-900">435</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Majority Party</p>
            <p className="text-2xl font-bold text-red-600">Republican</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Speaker</p>
            <p className="text-2xl font-bold text-gray-900">Mike Johnson</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Next Election</p>
            <p className="text-2xl font-bold text-gray-900">2026</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Current Composition */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Current Composition
          </h2>
          <div className="space-y-4">
            {/* Republicans */}
            <div className="relative pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Republicans</span>
                <span className="text-red-600 font-bold">224 seats</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-600" style={{ width: '51.5%' }}></div>
              </div>
            </div>
            {/* Democrats */}
            <div className="relative pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Democrats</span>
                <span className="text-blue-600 font-bold">211 seats</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '48.5%' }}></div>
              </div>
            </div>
            {/* Vacancies */}
            <div className="relative pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Vacancies</span>
                <span className="text-gray-600 font-bold">0 seats</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            House Leadership
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900">Majority Leadership</h3>
              <div className="mt-2 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Speaker</span>
                  <span className="font-medium text-gray-900">Mike Johnson</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Majority Leader</span>
                  <span className="font-medium text-gray-900">Steve Scalise</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Majority Whip</span>
                  <span className="font-medium text-gray-900">Tom Emmer</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Minority Leadership</h3>
              <div className="mt-2 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Minority Leader</span>
                  <span className="font-medium text-gray-900">Hakeem Jeffries</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Minority Whip</span>
                  <span className="font-medium text-gray-900">Katherine Clark</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity and Resources */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="font-medium text-gray-900">Latest Vote: H.R. 7201</p>
              <p className="text-gray-600 text-sm">Infrastructure Development Act of 2025</p>
              <div className="mt-1 flex items-center">
                <span className="text-green-600 font-medium text-sm">Passed: 289-146</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 text-sm">March 18, 2025</span>
              </div>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <p className="font-medium text-gray-900">Committee Hearing</p>
              <p className="text-gray-600 text-sm">House Committee on Energy and Commerce</p>
              <div className="mt-1 flex items-center">
                <span className="text-blue-600 font-medium text-sm">Upcoming</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 text-sm">March 25, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links and Resources */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Quick Links
          </h2>
          <div className="grid gap-4">
            <a
              href="https://www.house.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-gray-700 group-hover:text-blue-600">Official House Website</span>
            </a>
            <a
              href="https://www.congress.gov/bills-with-chamber-action/119th-congress/browse-by-chamber/house"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-gray-700 group-hover:text-blue-600">Current Legislation</span>
            </a>
            <a
              href="https://www.house.gov/watch-houselive"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
            >
              <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-700 group-hover:text-blue-600">Watch Live Sessions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Find Your Representative */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Find Your Representative</h2>
          <p className="text-gray-600 mb-6">Enter your ZIP code to find and connect with your district&apos;s representative</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter ZIP code"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 