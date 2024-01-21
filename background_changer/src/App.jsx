import { useState } from "react"

function App() {

  const [color, setColor] = useState("#213547");

  return (
      <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-10 shadow-lg 
        bg-white px-2 py-1.5 rounded-3xl">
          
          {/* Bottom All Buttons */}
          <button onClick={() => setColor('red')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: 'red'}}>
            Red
          </button>
          <button onClick={() => setColor('#f59e0b')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#f59e0b'}}>
            Amber
          </button>
          <button onClick={() => setColor('#059669')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#059669'}}>
           Emerald
          </button>
          <button onClick={() => setColor('#7c3aed')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#7c3aed'}}>
            Violet
          </button>
          <button onClick={() => setColor('#be123c')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#be123c'}}>
           Rose
          </button>
          <button onClick={() => setColor('#5CB3FF')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#5CB3FF'}}>
            Crystal Blue
          </button>
          <button onClick={() => setColor('#033E3E')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#033E3E'}}>
            Deep Teal
          </button>
          <button onClick={() => setColor('#36F57F')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#36F57F'}}>
            Lime Mint Green
          </button>
          <button onClick={() => setColor('#804A00')}
          className="outline-none px-4 py-1 rounded-full text-white" 
          style={{backgroundColor: '#804A00'}}>
            Dark Bronze
          </button>
        </div>
        </div>
      </div>
  )
}

export default App
