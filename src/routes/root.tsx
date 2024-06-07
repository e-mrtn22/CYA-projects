import { Outlet } from 'react-router-dom'

import './root.css'

import { Navbar } from '../components/Navbar/Navbar'

export default function Root() {
  return (
    <div className='app'>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}