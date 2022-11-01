import { useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {

    const [ todos, setTodos ] = useState([])

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

    return(
        <>
            <Formulario agregarTodo={agregarTodo} /> 
            <h2 className=" text-center mt-3"> Listado de tereas </h2>
            <ol className="list-group list-group-numbered">
                {todos.map((item) => (
                    <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo} editarTodo={editarTodo}/>
                ))}
            </ol>
        </>
    )
}
export default TodoList