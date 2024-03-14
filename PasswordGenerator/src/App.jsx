import { useState ,useCallback, useEffect } from 'react'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)

 const generatePassword = useCallback(()=>{
   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   let numStr = "0123456789";
   let spchars ="-=~!@#$%^&*()_+[]\{}|;':,./<>?";
   if(numberAllowed)  str += numStr;
   if(charAllowed )  str += spchars;
   for(let i=1;i<=length;i++){
      let randamNo = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(randamNo);
    }
    setPassword(pass);
 },[length,numberAllowed,charAllowed,setPassword])

 useEffect(()=>{
  generatePassword();

 },[length,numberAllowed,charAllowed,generatePassword])

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        <div className='w-[50vmax] min-h-[18vmax] rounded-xl flex flex-col p-4 gap-2 items-center justify-start bg-zinc-400'>
              <h1 className='text-4xl mt-3 font-medium text-nowrap'>Password Generator</h1>
              <div className="w-full flex h-[4vmax] mt-6 bg-zinc-200 rounded-lg overflow-hidden">
              <input 
              type="text" 
              value={password} 
              placeholder="Password"
              className='w-full h-full px-2  overflow-hidden text-xl font-medium outline-none border-none '
              readOnly
              />
              <button className='w-[8vmax] text-2xl font-medium bg-blue-700 text-white'>Copy</button>
              </div>
              <div className='w-full h-[5vmax] flex items-center justify-between px-6 bg-slate-300 rounded-lg overflow-hidden mt-3'>
               <div className='flex items-center gap-2 w-[15vmax]'>
               <input 
                type="range"
                min ={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
                 />
                 <label className='font-medium' htmlFor="range">Length : {length}</label>
               </div>
               <div className='flex items-center gap-2 width-[4vmax] font-medium py-1 px-3'>
                <input 
                type="checkbox"
                defaultChecked={charAllowed}
                id="check1"
                className='cursor-pointer'
                onChange={()=>{setCharAllowed((prev)=>!prev)}}
                />
                <label htmlFor="check1">Characters</label>
               </div>

               <div className='flex items-center gap-2 width-[4vmax] font-medium py-1 px-3'>
                <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id="check2"
                className='cursor-pointer'
                onChange={()=>{setNumberAllowed((prev)=>!prev)}}
                />
                <label htmlFor="check2">Numbers</label>
               </div>

              </div>
        </div>
    </div>
  )
}

export default App
