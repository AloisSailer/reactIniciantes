import { useState } from "react"

function App() {
  const [message, setMessage] = useState("Olá, React!")
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Você clicou no botão.")
        }}
      >
        Mudar mensagem
      </button>
    </div>
  )
}

export default App
