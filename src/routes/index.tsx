import { getSession } from '#/lib/auth.functions'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { Textarea } from '#/components/ui/textarea'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  beforeLoad:async({location})=>{
    const session = await getSession();

    if(!session){
      throw redirect({
        to:"/login",
        search:{redirect:location.href}
      })
    }
    return {user:session.user}
  }, 
  component: Home 
})

function Home() {
  const [form, setForm] = useState({
    content: '',
    slideCount: 8,
    style: 'minimal',
    tone: 'formal',
    layout: 'balanced',
  })

  return (
    <div className="min-h-screen pt-24 pb-24 px-4">
      <div className='max-w-4xl mx-auto'>
          {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            What do you want to{' '}
            <span className="text-gradient-peach">create?</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Enter your content and we'll generate a beautiful presentation
          </p>
        </div>

         {/* Main input card */}
        <div className="glass rounded-3xl p-6 md:p-8 space-y-6">
          {/* Textarea */}
          <div className="space-y-2">
            <Textarea
              placeholder="Describe your presentation topic, paste your notes, or outline your key points..."
              value={form.content}
              onChange={(e) =>
                setForm((s) => ({
                  ...s,
                  content: e.target.value,
                }))
              }
              className="h-[200px] min-h-[200px] max-h-[200px] overflow-y-auto text-base bg-background/50 border-border/50 rounded-2xl resize-none focus-visible:ring-primary/30"
            />
            <div className="flex justify-between text-xs text-muted-foreground px-1">
              <span>{form.content.length.toLocaleString()} characters</span>
              <span>Markdown supported</span>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}
