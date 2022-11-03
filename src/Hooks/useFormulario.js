import { useState } from "react"

// el set inputs hace que renderice y acutalice el inputs que ingresamos en el formulario. y
export const useFormulario = (initialState = {}) => {
    const [ inputs, setInputs] = useState(initialState)

    // COn esta funcion captamos el valor con nuestro initial state. Creamos la relacion.
    // Gestiona el contenido de nuestro formulario en tiempo real.
    // etarget destructuramos sus propiedades. 
    // [name] hay que ponerlo entre [] para reflejar que es un contenido dinamico y no una propiedad estatica. 
    const handleChange = (e) => {
        const { name, value, checked, type } = e.target
        setInputs((old) => ({
            ...old, 
            [name]: type === "checkbox" ? checked : value
        }))
    }

     const reset = () => {
        setInputs(initialState)
     }
    return [inputs, handleChange, reset ]
}
