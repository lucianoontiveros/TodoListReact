import { useState } from "react"
import Swal from 'sweetalert2'

const Formulario = () => {

    const initialState = {
        nombre:'',
        descripcion:'',
        estado: 'pendiente',
        prioridad: false
    }

    const [ todo, setTodo] = useState(initialState)
    const { nombre, descripcion, estado, prioridad} = todo

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo)
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
    }

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        setTodo((old) => ({
            ...old, 
            [name]: type === "checkbox" ? checked : value
        }))
    }


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
                        value="" 
                        id="flexCheckDefault" 
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>
                <button type="submit" className="btn mt-2 btn-primary btn-lg">Large button</button>
            </form>
        </>
    )
}
export default Formulario