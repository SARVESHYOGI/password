import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  const [number, setNumber] = useState(false);
  const [length, setlength] = useState(0)
  const [character, setcharacter] = useState(false);
  const [password, setpassword] = useState('');

  const passwordgenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) {
      str += "0123456789"
    }
    if (character) {
      str += "!@#$%^&*()+"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str[char];
    }
    setpassword(pass);

  }, [number, character, length])

  useEffect(() => {
    passwordgenerator();
  }, [length, character, number])

  const passref = useRef(null)

  const passcopy = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);


  return (
    <>
      <div className='h-screen w-screen bg-black justify-center flex items-center flex-col'>
        <div className='bg-orange-600 p-11'>
          <h1 className='flex text-4xl font-extrabold'>password generator</h1>
          <div>
            <input type="text" placeholder='password' readOnly
              className='border border-blue-800 border-2'
              value={password}
              ref={passref}
            />
            <button
              className='m-2 bg-slate-400'
              onClick={passcopy}
            >copy</button>
          </div>

          <div>
            <span className='m-2'>
              <input type="range"
                name='length'
                id='length'
                min={6}
                max={10}
                value={length}
                onChange={(e) => { setlength(e.target.value) }} />
              <label htmlFor="length">length({length})</label>
            </span>
            <span className='m-2'>
              <input type="checkbox"
                name="character"
                id="character"
                defaultChecked={character}
                onChange={() => { setcharacter((prev) => !prev) }} />
              <label htmlFor="character">character</label>
            </span>
            <span className='m-2'>
              <input type="checkbox"
                name="numbers"
                id="numbers"
                defaultChecked={number}
                onChange={() => { setNumber((prev) => !prev) }} />
              <label htmlFor="numbers">numbers</label>
            </span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
