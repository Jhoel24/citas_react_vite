import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({setPacientes, paciente, pacientes, setPaciente}) => {
  
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      setTimeout(() => {
          setError(false)
      }, 2300)
      return
    } 

    //objeto de paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      // Editando registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId()
      setPacientes( paciente => [...paciente, objetoPaciente] )
    }
    

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
            Añade pacientes y {''}
            <span className="text-teal-700 font-bold">administralos</span>
          </p>
          <form 
            className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
            onSubmit={handleSubmit}
          >
            {error && (
              <Error>
                Todos los campos son obligatorios
              </Error>
            )}
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre mascota:</label>
              <input 
                type="text" 
                placeholder="Nombre de la mascota" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                id="mascota" 
                value={nombre} 
                onChange={(e) => {setNombre(e.target.value)}} 
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre propietario:</label>
              <input 
                type="text" 
                placeholder="Nombre del propietario" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                id="propietario"
                value={propietario} 
                onChange={(e) => {setPropietario(e.target.value)}} 
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Email:</label>
              <input 
                type="email" 
                placeholder="Email contacto propietario" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                id="email"
                value={email} 
                onChange={(e) => {setEmail(e.target.value)}} 
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta:</label>
              <input 
                type="date" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                id="alta"
                value={fecha} 
                onChange={(e) => {setFecha(e.target.value)}} 
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas:</label>
              <textarea 
                id="sintomas" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                placeholder="Describe los síntomass"
                value={sintomas} 
                onChange={(e) => {setSintomas(e.target.value)}}  
              >  
              </textarea>
            </div>
            <input type="submit" className="bg-teal-700 w-full p-3 text-white uppercase font-bold hover:bg-teal-600 cursor-pointer transition-all" value={ paciente.id ? 'Editar paciente' : 'Agregar paciente' }/>
          </form>
      </div>
  );
};

export default Formulario;