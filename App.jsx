import React, {useState} from 'react'
import Camera from './components/Camera'

export default function App() {
  const [captured, setCaptured] = useState(null)

  return (
    <div className="app">
      <header>
        <h1>MuInfo — Museum Companion (PWA)</h1>
      </header>
      <main>
        <Camera onCapture={setCaptured} />
        {captured && (
          <section className="preview">
            <h2>Captured image</h2>
            <img src={captured} alt="Captured" />
          </section>
        )}
      </main>
    </div>
  )
}
