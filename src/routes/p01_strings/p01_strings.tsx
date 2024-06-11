import { useState } from 'react'
import { Symbol } from '../../types'

import './p01_strings.css'

const representation = {
  symbol: 'σ',
  alphabet: 'Σ',
  chain: 'w',
  empty_chain: 'λ',
}

export function PStrings() {

  const [alphabet, setAlphabet] = useState<Symbol[]>([])
  const [alphabetInputValue, setAlphabetInputValue] = useState('')

  const handleAddButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const symbol_data = alphabetInputValue.trim()
    if (symbol_data.length > 0 && !alphabet.some((symbol) => symbol.data === symbol_data)) {
      const new_symbol : Symbol = {data: symbol_data} 
      setAlphabet([...alphabet, new_symbol])
    }
    setAlphabetInputValue('')
  }

  const [chain, setChain] = useState<Symbol[]>([])

  const handleSymbolDragStart = (event: React.DragEvent<HTMLSpanElement>, symbol: Symbol) => {
    event.dataTransfer.setData('text/plain', symbol.data)
  }

  const handleChainDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const symbol_data = event.dataTransfer.getData('text/plain');
    const new_symbol: Symbol = {data: symbol_data};
    setChain([...chain, new_symbol])
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
        <div>
          <div className='alphabet'>
            <strong>
              {`${representation.alphabet} =`}
              <span>{`{`}</span>
            </strong>
            <div className='symbolContainer'>
              {alphabet.map((symbol, index) => (
                <span key={index} draggable onDragStart={(event) => handleSymbolDragStart(event, symbol)}>
                  {`${symbol.data}`}
                </span>
              ))}
            </div>
            <strong><span>{`}`}</span></strong>
          </div>
        </div>
      </section>
      <section className='chain'>
        <h2>Chain</h2>
        <div 
          className='draggableChain'
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleChainDrop}
        >
          {chain.length !== 0 ? 
            chain.map((symbol, index) => (
              <span className='symbolChain' key={index}>
                {`${symbol.data}`}
              </span>
            ))
            :
            (<p>
              <span>{`${representation.empty_chain}`}</span>
              Drag Symbols from the Alphabet to the container to form a Chain
            </p>)}
        </div>

      </section>
    </div>
  )
}