import './Chain.css'

import { Alphabet, Symbol } from '../../types'

interface ChainProps {
  readonly alphabet: Alphabet
  chain: Symbol[]
}

export function Chain({chain, alphabet}:ChainProps) {
  return (
    <p>CHAIN: {`${chain} ${alphabet}`}</p>
  )
}