import { useState } from 'react'
import { Link } from 'react-router-dom'

import './DropdownMenu.css'

export function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const menuItems = [
    { value: '/p1_strings', label: 'Strings' },
    { value: '/p2_languages', label: 'Languages' },
    { value: '/p3_calculator', label: 'Calculator' },
    { value: '/p4_code_analizer', label: 'C++ Code Analyzer' },
    { value: '/p5_autamata_simulator', label: 'Automata Simulator' },
    { value: '/p6_dfa2grammar', label: 'DFA to Grammar' },
    { value: '/p7_grammar2cnf', label: 'Grammar to CNF' },
  ];

  return (
    <>
      <div className='dropdownContainer'>
        <div className='showZone'>
          <label className='dropdownLabel'>Projects</label>
          <button className='dropdownButton' onClick={toggleDropdown}>
            {isDropdownOpen ? 'V' : '<'}
          </button>
        </div>
        <nav>
          {isDropdownOpen && (
            <ul className='navList'>
              {menuItems.map((item) => (
                <Link 
                  to={item.value}
                  onClick={() => closeDropdown()}
                >
                  <li key={item.value} className='navItem'>
                  {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}
