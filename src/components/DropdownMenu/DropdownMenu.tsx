import { useState } from 'react'
import { Link } from 'react-router-dom'

import './DropdownMenu.css'

export function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState("Choose project")

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const handleLinkClick = (label:string) => {
    setSelectedProject(label)
    closeDropdown()
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
    <nav>
      <button className='dropdownButton' onClick={toggleDropdown}>
        {selectedProject}
      </button>
      {isDropdownOpen && (
        <ul className='navbarList'>
          {menuItems.map((item) => (
            <li key={item.value} className='navbarItem'>
              <Link 
                to={item.value}
                onClick={() => handleLinkClick(item.label)}
              >{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
