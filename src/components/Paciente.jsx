import swal from 'sweetalert'

const Paciente = ({nombre, propietario, email, fecha, sintomas, id, setPaciente, eliminarPaciente}) => {
  
    const handleEliminar = () => {
        swal({
            title: "Veterinaria 2022",
            text: `¿Seguro que quieres eliminar la cita de ${nombre}?`,
            icon: "warning",
            buttons: ["Cancelar", "Eliminar"]
        }).then(respuesta => {
            if(respuesta){
                swal({
                    title: "La cita se ha eliminado con éxito",
                    icon: "success"
                })
                eliminarPaciente(id)
            }
        })
    }

    const paciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id
    }


  return (
    <div className='mx-5 my-10 bg-white shadow-xl px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {' '}
            <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {' '}
            <span className='font-normal normal-case'>{propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {' '}
            <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha ALTA: {' '}
            <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {' '}
            <span className='font-normal normal-case'>{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-lg"
                onClick={() => setPaciente(paciente)}
            >Editar</button> 

            <button
                type="button"
                className="py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg"
                onClick={handleEliminar}
            >Eliminar</button> 
        </div>
    </div>
  )
};

export default Paciente;