
// app/api/tasks/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
  const tasks = await prisma.task.findMany({
    include: { project: true }
  })
  return NextResponse.json({ tasks })
}
