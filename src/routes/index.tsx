// import { Switch } from '#/components/ui/switch'
// import ThemeToggle from '#/components/ui/ThemeToggle'
import { getSession } from '#/lib/auth.functions'
import { createFileRoute, redirect } from '@tanstack/react-router'

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
  return (
    <div className="min-h-screen pt-24 pb-24 px-4">
      <div className='max-w-4xl mx-auto'>
          <h1>Hello world</h1>
      </div>  
    </div>
  )
}
