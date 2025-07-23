
// app/api/timelog/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { taskId, projectId, userId, organizationId, startedAt, endedAt, note } = body

  const duration = endedAt ? Math.floor((new Date(endedAt).getTime() - new Date(startedAt).getTime()) / 1000) : null

  const timelog = await prisma.timeLog.create({
    data: {
      taskId,
      projectId,
      userId,
      organizationId,
      startedAt: new Date(startedAt),
      endedAt: endedAt ? new Date(endedAt) : null,
      duration,
      note,
    }
  })

  return NextResponse.json({ timelog })
}
