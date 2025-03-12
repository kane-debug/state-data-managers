import { PrismaClient } from '@prisma/client';
import { FiAlertCircle, FiCheckCircle, FiClock, FiRefreshCw } from 'react-icons/fi';

interface Update {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  entityType: string;
  entityId: string;
  field: string;
  oldValue: string | null;
  newValue: string;
  source: string;
  verifiedBy: string | null;
}

const prisma = new PrismaClient();

async function getStats() {
  const [
    pendingUpdates,
    approvedUpdates,
    totalStates,
    recentUpdates
  ] = await Promise.all([
    prisma.dataUpdate.count({
      where: { status: 'pending' }
    }),
    prisma.dataUpdate.count({
      where: { status: 'approved' }
    }),
    prisma.state.count(),
    prisma.dataUpdate.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' }
    })
  ]);

  return {
    pendingUpdates,
    approvedUpdates,
    totalStates,
    recentUpdates
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Dashboard Overview
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
          >
            <FiRefreshCw className="mr-2" />
            Check for Updates
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FiAlertCircle className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Pending Updates
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.pendingUpdates}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FiCheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Approved Updates
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.approvedUpdates}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FiClock className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total States
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats.totalStates}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Recent Updates
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {stats.recentUpdates.map((update) => (
              <li key={update.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="truncate text-sm font-medium text-indigo-600">
                      {update.entityType} Update
                    </p>
                  </div>
                  <div className="ml-2 flex flex-shrink-0">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      update.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {update.status}
                    </span>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      {update.field}: {update.oldValue ?? 'N/A'} → {update.newValue}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {new Date(update.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 