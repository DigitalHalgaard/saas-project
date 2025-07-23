// lib/access.ts
import { prisma } from './prisma'

export async function canViewProject(userId: string, projectId: string) {
  const access = await prisma.projectAccess.findFirst({
    where: { userId, projectId }
  })
  return !!access
}

export async function canViewTask(userId: string, taskId: string) {
  const access = await prisma.taskAccess.findFirst({
    where: { userId, taskId }
  })
  return !!access
}
