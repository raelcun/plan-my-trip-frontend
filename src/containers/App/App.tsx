import { useEffect, useState } from 'react'
import { HelloWorld } from '../../components/helloWorld'
import './App.css'

const getRest = () => fetch('/rest/').then((r) => r.text())

export const App = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    getRest()
      .then((result) => setMessage(result))
      .catch((e) => setMessage(e instanceof Error ? e.message : 'unknown error'))
  }, [])

  return (
    <div className="App">
      <HelloWorld />
      <h3>API Result: {message}</h3>
    </div>
  )
}
