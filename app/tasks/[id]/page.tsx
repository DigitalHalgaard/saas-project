
// app/tasks/[id]/page.tsx
'use client'
import { useParams } from 'next/navigation'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function TaskPage() {
  const { id } = useParams()
  const { data, error } = useSWR('/api/tasks', fetcher)

  if (error) return <div>Error loading task</div>
  if (!data) return <div>Loading...</div>

  const task = data.tasks.find((t: any) => t.id === id)

  if (!task) return <div>Task not found</div>

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{task.name}</h1>
      <p>Status: {task.status}</p>
      <p>{task.description}</p>
    </div>
  )
}
