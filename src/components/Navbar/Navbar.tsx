import './Navbar.css'

export function Navbar() {
  return (
    <aside>
      <h1>Proyects</h1>
      <nav>
        <ol>
          <li>
            <a href='/p1_strings'>Strings</a>
          </li>
          <li>
            <a href='/p2_lenguages'>Lenguages</a>
          </li>
          <li>
            <a href='p3_calculator'>Calculator</a>
          </li>
          <li>
            <a href='p4_code_analizer'>C++ Code Analyzer</a>
          </li>
          <li>
            <a href='p5_autamata_simulator'>Automata Simulator</a>
          </li>
          <li>
            <a href='p6_dfa2grammar'>DFA to Grammar</a>
          </li>
          <li>
            <a href='p7_grammar2cnf'>Grammar to CNF</a>
          </li>
        </ol>
      </nav>
    </aside>
  )
}