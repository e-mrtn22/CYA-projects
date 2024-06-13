import { useState } from 'react'
import { Symbol } from '../../types'

import './p01_strings.css'

const representation = {
  symbol: 'σ',
  alphabet: 'Σ',
  chain: 'w',
  empty_chain: 'λ',
}

const spanish_alphabet:Symbol[] = [
  {data: 'a'},
  {data: 'b'},
  {data: 'c'},
  {data: 'd'},
  {data: 'e'},
  {data: 'f'},
  {data: 'g'},
  {data: 'h'},
  {data: 'i'},
  {data: 'j'},
  {data: 'k'},
  {data: 'l'},
  {data: 'm'},
  {data: 'n'},
  {data: 'ñ'},
  {data: 'o'},
  {data: 'p'},
  {data: 'q'},
  {data: 'r'},
  {data: 's'},
  {data: 't'},
  {data: 'u'},
  {data: 'v'},
  {data: 'w'},
  {data: 'x'},
  {data: 'y'},
  {data: 'z'},
]

export function PStrings() {

  const [alphabet, setAlphabet] = useState<Symbol[]>(spanish_alphabet)
  const [alphabetInputValue, setAlphabetInputValue] = useState('')

  const handleAddButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const symbol_data = alphabetInputValue.trim()
    if (symbol_data.length > 0 && !alphabet.some((symbol) => symbol.data === symbol_data)) {
      const new_symbol: Symbol = {data: symbol_data} 
      setAlphabet([...alphabet, new_symbol])
    }
    setAlphabetInputValue('')
  }

  const [chain, setChain] = useState<Symbol[]>([])

  const addSymbolToChain = (symbol:Symbol) => {
    setChain([...chain, symbol])
  }



  return (
    <div>
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
        <div className='alphabet'>
          <label>
            {`${representation.alphabet} =`}
            <span>{`{`}</span>
          </label>
          <div className='symbolsContainer'>
            {alphabet.map((symbol, index) => (
              <div key={index} className='alphabetSymbol' onClick={(event) => {event.preventDefault(); addSymbolToChain(symbol)}}>
                <p key={index}>
                  {`${symbol.data}`}
                </p>
              </div>
            ))}
          </div>
          <label>{`}`}</label>
        </div>
      </section>
      <section className='chain'>
        <h2>Chain</h2>
        <div 
          className='chainContainer'
        >
          {chain.length !== 0 ? 
            chain.map((symbol, index) => (
              <span className='symbolChain' key={index}>
                {`${symbol.data}`}
              </span>
            ))
            :
            (<div className='emptyChainText'>
              <span>{`${representation.empty_chain}`}</span>
              <p>{`(Click on the Symbols from the Alphabet to form a chain)`}</p>
            </div>)}
        </div>
      </section>
    </div>
  )
}