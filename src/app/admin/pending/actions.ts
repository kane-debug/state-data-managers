'use server';

import { PrismaClient, Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

async function approve(formData: FormData) {
  const updateId = formData.get('updateId') as string;

  try {
    // Get the update details
    const update = await prisma.dataUpdate.findUnique({
      where: { id: updateId }
    });

    if (!update) {
      throw new Error('Update not found');
    }

    // Start a transaction
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update the entity based on the type
      switch (update.entityType) {
        case 'governor':
          await tx.governor.update({
            where: { id: update.entityId },
            data: {
              [update.field]: update.newValue,
              lastVerified: new Date()
            }
          });
          break;
        case 'senator':
          await tx.senator.update({
            where: { id: update.entityId },
            data: {
              [update.field]: update.newValue,
              lastVerified: new Date()
            }
          });
          break;
        case 'representative':
          await tx.representative.update({
            where: { id: update.entityId },
            data: {
              [update.field]: update.newValue,
              lastVerified: new Date()
            }
          });
          break;
        default:
          throw new Error(`Unknown entity type: ${update.entityType}`);
      }

      // Mark the update as approved
      await tx.dataUpdate.update({
        where: { id: updateId },
        data: {
          status: 'approved',
          verifiedBy: 'admin', // TODO: Add proper user authentication
        }
      });
    });

    revalidatePath('/admin/pending');
    return { success: true };
  } catch (error) {
    console.error('Error approving update:', error);
    return { success: false, error: 'Failed to approve update' };
  }
}

async function reject(formData: FormData) {
  const updateId = formData.get('updateId') as string;

  try {
    await prisma.dataUpdate.update({
      where: { id: updateId },
      data: {
        status: 'rejected',
        verifiedBy: 'admin', // TODO: Add proper user authentication
      }
    });

    revalidatePath('/admin/pending');
    return { success: true };
  } catch (error) {
    console.error('Error rejecting update:', error);
    return { success: false, error: 'Failed to reject update' };
  }
}

export default {
  approve,
  reject
}; 