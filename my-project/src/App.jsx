import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen bg-black justify-center flex items-center flex-col'>
        <div className='bg-orange-600 p-11'>

          <h1 className='flex text-4xl font-extrabold'>password generator</h1>
          <div>
            <input type="text" placeholder='password' readOnly
              className='border border-blue-800 border-2'
            />
            <button className='m-2 bg-slate-400'>copy</button>
          </div>

          <input type="range" />

        </div>
      </div>

    </>
  )
}

export default App
