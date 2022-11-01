import { useState } from "react"
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';

// El nombre de la propiedades para evitar confundise deben ser como los del formulario(name)
// El initialState es un hoot actualiza en tiempo real el ingreso de los datos al formulario.
// luego destructuramos el todo donde se esta guardando la informacion para ahorrar codigo


//AgregarTodo es un destructuracion del props proveniente del archivo TodoList.Jsx
const Formulario = ({agregarTodo}) => {

    const initialState = {
        nombre:'',
        descripcion:'',
        estado: 'pendiente',
        prioridad: false
    }

    // Con el initialState tomamos la informacion de nuestro formulario. Es un objeto.
    const [ todo, setTodo] = useState(initialState)

    // luego destructuramos el todo donde se esta guardando la informacion para ahorrar codigo
    const { nombre, descripcion, estado, prioridad} = todo

    // Gestiona el formulario. 
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!nombre.trim()) {
            e.target[0].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje el nombre en blanco',
                icon: 'error',

              })
            return;
        }
        if(!descripcion.trim()) {
            e.target[1].focus()
            Swal.fire({
                title: 'Error!',
                text: 'No deje la descripcion en blanco',
                icon: 'error',

              })
            return;
        } 
        Swal.fire({
            title: 'success!',
            text: 'No deje la descripcion en blanco',
            icon: 'success',

          })

        agregarTodo({ 
            nombre, 
            descripcion, 
            estado: estado === "pendiente" ? false : true,
            prioridad,
            id: uuidv4()
        })

        setTodo(initialState)
    }


    // COn esta funcion captamos el valor con nuestro initial state. Creamos la realcion.
    // Gestiona el contenido de nuestro formulario en tiempo real.
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        setTodo((old) => ({
            ...old, 
            [name]: type === "checkbox" ? checked : value
        }))
    }

    // ClassName son las propiedad que reemplaza a Class.
    // En la casilla de verificacion en vez de utilizar value reemplazamos por checked.
    // El for de los formularios debe ser reemplazado por htmlFor

    return(
        <>
            <h2>Agregar TODO</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control mb-2"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                    placeholder="Ingrese todo nombre"
                />
                <textarea 
                    className="form-control mb-2" 
                    cols="30" 
                    rows="10"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select 
                    name="estado" 
                    value={estado}
                    onChange={handleChange}
                    className="fomr-control form-select mb-2"
                >
                    <option value="pendiente"> Pendiente</option>
                    <option value="realizado"> Realizado</option>
                </select>
                <div className="form-check">
                    <input 
                        name="prioridad" 
                        checked={prioridad}
                        onChange={handleChange}
                        className="form-check-input" 
                        type="checkbox" 
                        id="flexCheckDefault" 
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Prioritario
                    </label>
                </div>
                <button type="submit" className="btn mt-2 btn-primary btn-lg">Large button</button>
            </form>
        </>
    )
}
export default Formulario