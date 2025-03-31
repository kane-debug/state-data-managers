"use client";

import Image from 'next/image';
import { useState } from 'react';
import PresidentUpdates from '../components/PresidentUpdates';

interface PresidentData {
  name: string;
  party: string;
  imageUrl: string;
  url: string;
  term: {
    start: number;
    end: number;
  };
  inaugurationDate: string;
  previousTerm: {
    start: number;
    end: number;
  };
  personalInfo: {
    born: string;
    homeState: string;
    previousRole: string;
  };
  initiatives: string[];
}

export default function PresidentPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'initiatives' | 'updates'>('overview');
  const presidentData: PresidentData = {
    name: "Donald J. Trump",
    party: "Republican",
    imageUrl: "https://pbs.twimg.com/media/GHNxgFyWwAA7ZYS?format=jpg&name=large",
    url: "https://www.whitehouse.gov",
    term: {
      start: 2025,
      end: 2029
    },
    inaugurationDate: "January 20, 2025",
    previousTerm: {
      start: 2017,
      end: 2021
    },
    personalInfo: {
      born: "June 14, 1946",
      homeState: "Florida",
      previousRole: "45th President, Business Executive"
    },
    initiatives: [
      "Economic Growth and Job Creation",
      "Border Security and Immigration Reform",
      "Energy Independence",
      "Foreign Policy and National Security"
    ]
  };

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
            <p className="text-2xl font-bold text-gray-900">{presidentData.term.start}-{presidentData.term.end}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Inauguration</p>
            <p className="text-2xl font-bold text-gray-900">{presidentData.inaugurationDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Previous Term</p>
            <p className="text-2xl font-bold text-gray-900">{presidentData.previousTerm.start}-{presidentData.previousTerm.end}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 font-medium">Party</p>
            <p className="text-2xl font-bold text-red-600">{presidentData.party}</p>
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
                  src={presidentData.imageUrl}
                  alt={`President ${presidentData.name} - 47th President of the United States`}
                  width={192}
                  height={192}
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 192px"
                  priority
                  unoptimized
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900">{presidentData.name}</h2>
                <p className="text-xl text-gray-600 mt-1">47th President of the United States</p>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600"><span className="font-medium">Born:</span> {presidentData.personalInfo.born}</p>
                  <p className="text-gray-600"><span className="font-medium">Home State:</span> {presidentData.personalInfo.homeState}</p>
                  <p className="text-gray-600"><span className="font-medium">Previous Role:</span> {presidentData.personalInfo.previousRole}</p>
                </div>
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href={presidentData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    White House Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex space-x-4 border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'overview'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('initiatives')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'initiatives'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Key Initiatives
              </button>
              <button
                onClick={() => setActiveTab('updates')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === 'updates'
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Live Updates
              </button>
            </div>

            <div className="mt-6">
              {activeTab === 'overview' && (
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-600">
                    Donald J. Trump was elected as the 47th President of the United States in 2024, 
                    marking his second term in office. His administration focuses on economic growth, 
                    border security, and America-first policies.
                  </p>
                </div>
              )}

              {activeTab === 'initiatives' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {presidentData.initiatives.map((initiative, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-gray-900 font-medium">{initiative}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'updates' && (
                <PresidentUpdates />
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <a href="#" className="block text-red-600 hover:text-red-700">Executive Orders</a>
              <a href="#" className="block text-red-600 hover:text-red-700">Presidential Proclamations</a>
              <a href="#" className="block text-red-600 hover:text-red-700">Administration Officials</a>
              <a href="#" className="block text-red-600 hover:text-red-700">Press Releases</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 