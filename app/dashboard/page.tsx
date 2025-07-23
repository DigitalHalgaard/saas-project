
// app/dashboard/page.tsx
'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function DashboardPage() {
  const { data, error } = useSWR('/api/projects', fetcher)

  if (error) return <div>Error loading projects</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Projects</h1>
      <ul>
        {data.projects.map((project: any) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  )
}
