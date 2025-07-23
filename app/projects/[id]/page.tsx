
// app/projects/[id]/page.tsx
'use client'
import { useParams } from 'next/navigation'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function ProjectPage() {
  const { id } = useParams()
  const { data, error } = useSWR('/api/projects', fetcher)

  if (error) return <div>Error loading project</div>
  if (!data) return <div>Loading...</div>

  const project = data.projects.find((p: any) => p.id === id)

  if (!project) return <div>Project not found</div>

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{project.name}</h1>
      <p>{project.description}</p>
    </div>
  )
}
