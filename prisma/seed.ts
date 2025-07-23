
// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const org = await prisma.organization.create({
    data: {
      name: 'Demo Org',
    },
  })

  const user = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      plan: 'pro',
    },
  })

  await prisma.membership.create({
    data: {
      userId: user.id,
      organizationId: org.id,
      role: 'owner',
    },
  })

  const project = await prisma.project.create({
    data: {
      name: 'Sample Project',
      description: 'This is a sample project.',
      organizationId: org.id,
      billable: true,
    },
  })

  const task = await prisma.task.create({
    data: {
      name: 'Design UI',
      status: 'todo',
      projectId: project.id,
      billable: true,
    },
  })

  await prisma.projectAccess.create({
    data: {
      userId: user.id,
      projectId: project.id,
      role: 'admin',
    },
  })

  await prisma.taskAccess.create({
    data: {
      userId: user.id,
      taskId: task.id,
      role: 'admin',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
