import './Chain.css'

interface Symbol {
  data: string
}

interface Alphabet {
  values: Symbol[]
}

interface ChainProps {
  readonly alphabet: Alphabet
  chain: Symbol[]
}

export function Chain({chain, alphabet}:ChainProps) {
  return (
    <p>CHAIN: {`${chain} ${alphabet}`}</p>
  )
}