// when we have to share a common layout to all then we make route.tsx inside _auth

import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  return (
    <div className='min-h-screen w-full'>
      <Outlet/>
    </div>
  )
}
