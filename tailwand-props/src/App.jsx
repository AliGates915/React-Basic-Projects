import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="font-bold bg-green-600 text-white p-6 rounded-xl mb-3">
      Hello world!
    </h1>
    <Card username ="Ali" btnText="Click me"/>
    <Card username ="Wife"/>

    </>
  )
}

export default App
