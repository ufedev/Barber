import { useState } from 'react'
import { toast } from 'react-toastify'
import Form from './form/Form'
import Field from './form/Field'
const Formulario = ({}) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const currentDay = new Date()
    let minDate = new Date()
    minDate.setDate(currentDay.getDate() + 1)
    minDate = minDate.toISOString().split('T')[0]
    console.log(minDate)


    const handleSubmit = (e) => {
        e.preventDefault()

        if ([name, lastName, date, email, phone].includes("")) {
            toast.error('Todos los campos son obligatorios',/* {
                hideProgressBar: true,
                autoClose: 1500,
                closeButton: false

            }*/)
            return
        }

        if (phone.length !== 10) {
            toast.error('El Telefono no es válido')
        }

        const pattern = /([a-zA-Z0-9\_\.\-\$]){3,20}@([a-zA-Z]){3,20}\.[a-zA-Z]+(\.[a-z])*?/s

        if (!email.match(pattern)) {
            toast.error('El Email no es válido!')
            return
        }



        const fecha = new Date("2023-11-09T02:22")
        const actual = new Date()
        // console.log(fecha)
        // console.log(actual)
        // console.log(fecha.getFullYear() === actual.getFullYear())

    }
    return (
        <Form title="Nuevo Cliente" onSubmit={handleSubmit}>
            <Field name='Nombre' type='text' value={name} onChange={e => setName(e.target.value)} placeholder="Nombre del cliente" />
            <Field name="Apellido" type='text' value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Apellido del cliente" />
            <Field name="Fecha" type="datetime-local" value={date} onChange={e => setDate(e.target.value)} min={`${minDate}T00:00`} />
            <Field name='Email' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email del cliente" />
            <Field name='Telefono' type='number' value={phone} onChange={(e) => setPhone(e.target.value)} min='0' placeholder='Telefono del cliente' />
            <input type='submit' value='Agregar' className='cursor-pointer p-2 text-center bg-slate-900 font-bold uppercase text-white rounded shadow' />
        </Form>
    )

}


export default Formulario 