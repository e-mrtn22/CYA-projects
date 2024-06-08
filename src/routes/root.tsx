import { Outlet } from 'react-router-dom'

import './root.css'

import { DropdownMenu } from '../components/DropdownMenu/DropdownMenu'

export default function Root() {
  return (
    <div className='app'>
      <header>
        <h1> CYA Proyects </h1>
        <DropdownMenu/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Made by Edgar Joel Martín Melián</p>
      </footer>
    </div>
  )
}