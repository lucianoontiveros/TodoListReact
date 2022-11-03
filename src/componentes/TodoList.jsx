import { useEffect } from "react"
import { useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {

    // Esto se inicializa con un array para empujar los todo a un objeto. 
    const [ todos, setTodos ] = useState([])

    // useEffect lo utilizamos para registrar nuestras tareas en el localstorage cada vez que sucede un eventos con [todos]
    useEffect(() => {
        if(localStorage.getItem("todos")){
            setTodos(JSON.parse(localStorage.getItem("todos")))
        }
    }, [])

   useEffect(() => { 
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    const agregarTodo = todo => {
        console.log(todo)
        setTodos((old) => [...old, todo])
    }

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }

    const editarTodo = (id) => {
        const editarTodos = todos.map( item => (
            item.id === id ? {...item, estado: !item.estado} : item
        ))

        setTodos(editarTodos)
    }

    // agregar todo viene del archivo del fumulario.jsx
    // El agregar todos se pasa al formulario como una funcion
    return(
        <>
            <Formulario agregarTodo={agregarTodo} /> 
            <h2 className=" text-center mt-3"> Listado de tereas </h2>
            <ol className="list-group list-group-numbered">
                {todos.map((item) => (
                    <Todo 
                    key={item.id} 
                    todo={item} 
                    eliminarTodo={eliminarTodo} 
                    editarTodo={editarTodo}/>
                ))}
            </ol>
        </>
    )
}
export default TodoList