import { Home } from "./home/home";
import { PStrings } from "./p01_strings/p01_strings";
import { PLenguages } from "./p02_lenguages/p02_lenguages";
import { PCalculator } from "./p03_calculator/p03_calculator";
import { PCodeAnalyzer } from "./p04_code_analyzer/p04_code_analyzer";
import { PAutomataSimulator } from "./p05_automata_simulator/p05_automata_simulator";
import { PDfaToGrammar } from "./p06_dfa_to_grammar/p06_dfa_to_grammar";
import { PGrammarToCnf } from "./p07_grammar_to_cnf/p07_grammar_to_cnf";

export const routes = {
  Home,
  PStrings,
  PLenguages,
  PCalculator,
  PCodeAnalyzer,
  PAutomataSimulator,
  PDfaToGrammar,
  PGrammarToCnf
}