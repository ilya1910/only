import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const Global = createGlobalStyle`
*{
	font-family: sans-serif;
	font-style: normal;
	padding: 0;
	margin: 0;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
