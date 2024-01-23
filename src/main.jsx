import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
    'a',
    {href : 'https://google.com' , target : '_blank'},
    'Click to me for Visit Google'
)


const APP = ReactDOM.createRoot(document.getElementById('APP'))
APP.render(
    <App/>
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    reactElement
)

