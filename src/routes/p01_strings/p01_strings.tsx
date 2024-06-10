import { useState } from 'react'
import { Symbol, Alphabet } from '../../types'

import './p01_strings.css'

const representation = {
  symbol: 'σ',
  alphabet: 'Σ',
  chain: 'w',
  empty_chain: 'λ',
}

export function PStrings() {

  const [chain, setChain] = useState<Symbol[]>([])
  const [alphabet, setAlphabet] = useState<Symbol[]>([])

  const [alphabetInputValue, setAlphabetInputValue] = useState('')

  const addInputSymbolToAlphabet = (new_symbol: Symbol) => {
    setAlphabet([...alphabet, new_symbol])
  }

  const handleAddButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (alphabetInputValue.trim().length > 0) {
      const new_symbol : Symbol = {data: alphabetInputValue} 
      setAlphabet([...alphabet, new_symbol])
      setAlphabetInputValue('')
    }
  }

  return (
    <>
      <section className='alphabetCreator'>
        <h2>Alphabet</h2>
        <form className='newSymbolForm'>
          <input
            type='text'
            placeholder="Add a new Symbol"
            value={alphabetInputValue}
            onChange={(event) => setAlphabetInputValue(event.target.value)}
          />
          <button className='addSymbolButton' onClick={handleAddButtonClick}>
            <img src='/icons/plus.svg' alt='Add symbol icon'></img> 
          </button>
        </form>
        <text>
          <ul className='alphabet'>
            {`${representation.alphabet} = {`}
            {alphabet.map((symbol, index) => (
              <li key={index}>{`${symbol.data}${index < alphabet.length - 1 ? ',':''}`}</li>
            ))}
            {`}`}
          </ul>
        </text>
      </section>
    </>
  )
}