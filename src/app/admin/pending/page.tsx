import { PrismaClient } from '@prisma/client';
import { FiCheck, FiX } from 'react-icons/fi';
import PendingUpdateActions from './actions';

const prisma = new PrismaClient();

interface PendingUpdate {
  id: string;
  entityType: string;
  entityId: string;
  field: string;
  oldValue: string | null;
  newValue: string;
  source: string;
  status: string;
  createdAt: Date;
}

async function getPendingUpdates() {
  const updates = await prisma.dataUpdate.findMany({
    where: { status: 'pending' },
    orderBy: { createdAt: 'desc' }
  });

  return updates;
}

export default async function PendingUpdates() {
  const updates = await getPendingUpdates();

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Pending Updates
          </h2>
        </div>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <ul role="list" className="divide-y divide-gray-200">
          {updates.map((update: PendingUpdate) => (
            <li key={update.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="truncate text-sm font-medium text-indigo-600">
                    {update.entityType} Update
                  </p>
                  <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    {update.source}
                  </span>
                </div>
                <div className="ml-2 flex space-x-2">
                  <form action={PendingUpdateActions.approve}>
                    <input type="hidden" name="updateId" value={update.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-full bg-green-100 p-1.5 text-green-600 hover:bg-green-200"
                    >
                      <FiCheck className="h-5 w-5" />
                    </button>
                  </form>
                  <form action={PendingUpdateActions.reject}>
                    <input type="hidden" name="updateId" value={update.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-full bg-red-100 p-1.5 text-red-600 hover:bg-red-200"
                    >
                      <FiX className="h-5 w-5" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-2">
                <div className="sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      Field: {update.field}
                    </p>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Old Value:</span>
                    <span>{update.oldValue || 'N/A'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">New Value:</span>
                    <span>{update.newValue}</span>
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Created: {new Date(update.createdAt).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
          {updates.length === 0 && (
            <li className="px-4 py-5 sm:px-6 text-center text-gray-500">
              No pending updates
            </li>
          )}
        </ul>
      </div>
    </div>
  );
} 