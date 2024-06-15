import { useState } from "react"
import { Chain, Symbol } from "../types"
import { representation } from "../consts"

export const useChain = () => {
  const [chain, setChain] = useState<Symbol[]>([])
  const insert = (symbol:Symbol, index: number) => {
    const prev_chain = [...chain]
    prev_chain.splice(index, 0, symbol)
    setChain(prev_chain)
  }
  const remove = (index: number) => {
    const prev_chain = [...chain]
    prev_chain.splice(index, 1)
    setChain(prev_chain)
  }
  const size = () => {
    return chain.length;
  }
  const inverse = () => {
    return chain.reverse();
  }
  const preffixs = () => {
    const result: Chain[] = [{value: [{data: representation.empty_chain}]}]
    for (let i = 0; i < chain.length; ++i) {
      
    }
    console.log(result)
  }
  return {
    chain,
    insert,
    remove,
    size,
    inverse,
    preffixs
  }
}