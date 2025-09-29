import amatoryLogotype from './assets/amatoryLogo.svg'
import  '/src/App.css'
function App() {

  return (
    <>
  <div className='flex flex-col gap-60' id='main'><header>
      <nav>
      <div className='flex flex-row gap-2 p-5'>
        <img src = {amatoryLogotype} className='logotype w-[50px]'></img>
        <p className='  text-rose-500 hidden  md:text-xl md:flex md:items-center md:font-semibold'>Amatory</p>
      </div>
    </nav>
  </header>
    <div className='flex justify-center  flex-col text-center gap-2'>
      <p className='text-3xl font-semibold'>Ignite sparks, feel <ul className='text-rose-600'>Amatory</ul></p>
      <div className='flex justify-center gap-5'>
        <button type='submit' className=' px-10 py-1 rounded-md border-2 border-rose-700  hover:shadow-rose-700 shadow-sm'>Sign Up</button>
        <button type='submit' className=' px-10 py-1 rounded-md bg-rose-700 hover:bg-rose-800 hover:shadow-rose-800 shadow-sm'>Sign in</button>
        </div>
    </div></div>
    </>
  )
}

export default App
