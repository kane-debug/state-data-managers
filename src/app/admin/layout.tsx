import { Metadata } from 'next';
import Link from 'next/link';
import { FiHome, FiList, FiCheckSquare, FiSettings } from 'react-icons/fi';
import { ReactNode } from 'react';
import LogoutButton from './logout-button';

export const metadata: Metadata = {
  title: 'Admin Dashboard - State Data Manager',
  description: 'Manage and update state government data',
};

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/admin" className="text-xl font-bold text-gray-800">
                  Admin Dashboard
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  href="/admin"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                >
                  <FiHome className="mr-2" />
                  Overview
                </Link>
                <Link
                  href="/admin/pending"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  <FiList className="mr-2" />
                  Pending Updates
                </Link>
                <Link
                  href="/admin/approved"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  <FiCheckSquare className="mr-2" />
                  Approved Updates
                </Link>
                <Link
                  href="/admin/settings"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                >
                  <FiSettings className="mr-2" />
                  Settings
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
} 