import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.css'

import Root from './routes/root'
import {routes} from './routes/routes.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:"",
        element: <routes.Home/>
      },
      {
        path:"p1_strings",
        element: <routes.PStrings/>
      },
      {
        path:"p2_languages",
        element: <routes.PLanguages/>
      },
      {
        path:"p3_calculator",
        element: <routes.PCalculator/>
      },
      {
        path:"p4_code_analizer",
        element: <routes.PCodeAnalyzer/>
      },
      {
        path:"p5_autamata_simulator",
        element: <routes.PAutomataSimulator/>
      },
      {
        path:"p6_dfa2grammar",
        element: <routes.PDfaToGrammar/>
      },
      {
        path:"p7_grammar2cnf",
        element: <routes.PGrammarToCnf/>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
