import './root.css'

import { Navbar } from '../components/Navbar/Navbar'

export default function Root() {
  return (
    <div className='app'>
      <Navbar/>
      <main>
        <h1>Root</h1>
      </main>
    </div>
  )
}