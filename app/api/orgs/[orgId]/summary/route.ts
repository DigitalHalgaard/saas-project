
// app/api/orgs/[orgId]/summary/route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(_: Request, context: { params: { orgId: string } }) {
  const { orgId } = context.params

  const logs = await prisma.timeLog.findMany({
    where: { organizationId: orgId },
    include: {
      user: true,
      project: true,
      task: true,
    }
  })

  return NextResponse.json({ logs })
}
