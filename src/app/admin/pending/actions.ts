'use server';

import { PrismaClient, Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function approve(updateId: string) {
  try {
    const update = await prisma.dataUpdate.findUnique({
      where: { id: updateId },
    });

    if (!update) {
      throw new Error('Update not found');
    }

    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // Update the entity
      if (update.entityType === 'senator') {
        await tx.senator.update({
          where: { id: update.entityId },
          data: {
            [update.field]: update.newValue,
          },
        });
      } else {
        await tx.representative.update({
          where: { id: update.entityId },
          data: {
            [update.field]: update.newValue,
          },
        });
      }

      // Mark update as approved
      await tx.dataUpdate.update({
        where: { id: updateId },
        data: { status: 'APPROVED' },
      });
    });

    revalidatePath('/admin/pending');
    return { success: true };
  } catch (error) {
    console.error('Error approving update:', error);
    throw error;
  }
}

export async function reject(updateId: string) {
  try {
    await prisma.dataUpdate.update({
      where: { id: updateId },
      data: { status: 'REJECTED' },
    });

    revalidatePath('/admin/pending');
    return { success: true };
  } catch (error) {
    console.error('Error rejecting update:', error);
    throw error;
  }
} 