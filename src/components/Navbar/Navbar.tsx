import { Link } from 'react-router-dom'

import './Navbar.css'


export function Navbar() {
  return (
    <aside>
      <h1>Proyects</h1>
      <hr/>
      <nav>
        <ol>
          <li className='navbarItem'>
            <Link to='/p1_strings'>Strings</Link>
          </li>
          <li className='navbarItem'>
            <Link to='/p2_lenguages'>Lenguages</Link>
          </li>
          <li className='navbarItem'>
            <Link to='p3_calculator'>Calculator</Link>
          </li>
          <li className='navbarItem'>
            <Link to='p4_code_analizer'>C++ Code Analyzer</Link>
          </li>
          <li className='navbarItem'>
            <Link to='p5_autamata_simulator'>Automata Simulator</Link>
          </li>
          <li className='navbarItem'>
            <Link to='p6_dfa2grammar'>DFA to Grammar</Link>
          </li>
          <li className='navbarItem'>
            <Link to='p7_grammar2cnf'>Grammar to CNF</Link>
          </li>
        </ol>
      </nav>
      <p className='autor'>Made by: Edgar Joel Martín Melián</p>
    </aside>
  )
}