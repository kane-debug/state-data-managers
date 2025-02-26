"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PresidentialFeed from '@/components/PresidentialFeed';

export default function PresidentPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'initiatives' | 'updates'>('overview');

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="h-48 bg-gradient-to-r from-red-700 to-red-500 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-6 left-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              The President of the United States
            </h1>
            <p className="text-white text-opacity-90">Executive Branch Leadership</p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">
          <div>
            <p className="text-sm text-gray-600 font-medium">Term</p>
            <p className="text-2xl font-bold text-gray-900">2025-2029</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Inauguration</p>
            <p className="text-2xl font-bold text-gray-900">January 20, 2025</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Previous Term</p>
            <p className="text-2xl font-bold text-gray-900">2017-2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Party</p>
            <p className="text-2xl font-bold text-red-600">Republican</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* President Profile */}
        <div className="md:col-span-2 space-y-6">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-48 h-48 relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/president-trump.webp"
                  alt="President Donald J. Trump"
                  width={192}
                  height={192}
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                  priority
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900">Donald J. Trump</h2>
                <p className="text-xl text-gray-600 mt-1">47th President of the United States</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600"><span className="font-medium">Born:</span> June 14, 1946</p>
                  <p className="text-gray-600"><span className="font-medium">Home State:</span> Florida</p>
                  <p className="text-gray-600"><span className="font-medium">Previous Role:</span> 45th President, Business Executive</p>
                </div>
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://www.whitehouse.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    White House Website
                  </a>
                  <a
                    href="https://twitter.com/POTUS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                    </svg>
                    Follow on X/Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-red-500 text-red-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('initiatives')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'initiatives'
                      ? 'border-b-2 border-red-500 text-red-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Key Initiatives
                </button>
                <button
                  onClick={() => setActiveTab('updates')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'updates'
                      ? 'border-b-2 border-red-500 text-red-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Recent Updates
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Presidential Overview</h3>
                  <p className="text-gray-600">
                    Donald J. Trump was elected as the 47th President of the United States in 2024,
                    returning to office after previously serving as the 45th President from 2017 to 2021.
                    His administration focuses on economic growth, border security, and America-first policies.
                  </p>
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Administration Leadership</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-medium">Vice President</p>
                        <p className="text-gray-600">Name of Vice President</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-medium">Secretary of State</p>
                        <p className="text-gray-600">Name of Secretary</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'initiatives' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Key Initiatives</h3>
                  <div className="grid gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">Economic Policy</h4>
                      <p className="text-gray-600 mt-1">Tax reform, job creation, and trade agreement renegotiations</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">Border Security</h4>
                      <p className="text-gray-600 mt-1">Immigration reform and border control measures</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">Energy Independence</h4>
                      <p className="text-gray-600 mt-1">Domestic energy production and infrastructure development</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900">Foreign Policy</h4>
                      <p className="text-gray-600 mt-1">America First approach to international relations</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'updates' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Updates</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <p className="font-medium text-gray-900">Executive Order Signed</p>
                      <p className="text-gray-600 text-sm">New economic measures announced</p>
                      <p className="text-gray-500 text-sm mt-1">March 15, 2025</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <p className="font-medium text-gray-900">International Summit</p>
                      <p className="text-gray-600 text-sm">Meeting with world leaders on trade</p>
                      <p className="text-gray-500 text-sm mt-1">March 10, 2025</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4 py-2">
                      <p className="font-medium text-gray-900">Infrastructure Bill</p>
                      <p className="text-gray-600 text-sm">Major infrastructure package announced</p>
                      <p className="text-gray-500 text-sm mt-1">March 5, 2025</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="block p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
              >
                <p className="font-medium text-gray-900">Presidential Schedule</p>
                <p className="text-sm text-gray-600">View upcoming events</p>
              </a>
              <a
                href="#"
                className="block p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
              >
                <p className="font-medium text-gray-900">Press Briefings</p>
                <p className="text-sm text-gray-600">Latest news and updates</p>
              </a>
              <a
                href="#"
                className="block p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
              >
                <p className="font-medium text-gray-900">Executive Orders</p>
                <p className="text-sm text-gray-600">Recent presidential actions</p>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>The White House</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1600 Pennsylvania Avenue NW</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>202-456-1111</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Feed Section */}
      <div className="mt-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Live Presidential Updates
            </h2>
            <p className="text-gray-600 mt-1">
              Real-time updates from official White House sources, including press briefings, speeches, and executive actions.
            </p>
          </div>
          <div className="p-6">
            <PresidentialFeed />
          </div>
        </div>
      </div>
    </div>
  );
} 