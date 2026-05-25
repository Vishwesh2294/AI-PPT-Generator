// import { Switch } from '#/components/ui/switch'
import ThemeToggle from '#/components/ui/ThemeToggle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <ThemeToggle/>
    </div>
  )
}
