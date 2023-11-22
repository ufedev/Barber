import Formulario from './components/Formulario'
import { useState, useEffect } from 'react'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
function App () {

  const [cita, setCita] = useState({})

  return (
    <>
      <h1 className="text-6xl font-bold text-center">Barber</h1>
      <main className="max-w-[95%] w-[80rem] mx-auto grid lg:grid-cols-2 gap-8 my-10 ">
        <section className='w-full'>
          <Formulario setCita={setCita} />
        </section>
        <section className="w-full">
          Listado de citas
        </section>
      </main>
      <ToastContainer hideProgressBar={true} closeButton={false} autoClose={1500} />
    </>
  )
}

export default App
