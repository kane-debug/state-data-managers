import { PrismaClient } from '@prisma/client';
import { FiCheck, FiX } from 'react-icons/fi';
import { approve, reject } from './actions';

const prisma = new PrismaClient();

interface PendingUpdate {
  id: string;
  entityType: string;
  entityId: string;
  field: string;
  oldValue: string;
  newValue: string;
  createdAt: Date;
}

export default async function PendingUpdatesPage() {
  const pendingUpdates = await prisma.update.findMany({
    where: { status: 'PENDING' },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Pending Updates</h1>
      
      {pendingUpdates.length === 0 ? (
        <p className="text-gray-500">No pending updates</p>
      ) : (
        <div className="grid gap-4">
          {pendingUpdates.map((update: PendingUpdate) => (
            <div
              key={update.id}
              className="bg-white p-4 rounded-lg shadow space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">
                    {update.entityType} Update - {update.field}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Created at: {update.createdAt.toLocaleString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => approve(update.id)}
                    className="p-2 text-green-600 hover:bg-green-50 rounded-full"
                  >
                    <FiCheck className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => reject(update.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Old Value:</p>
                  <p>{update.oldValue}</p>
                </div>
                <div>
                  <p className="text-gray-500">New Value:</p>
                  <p>{update.newValue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 