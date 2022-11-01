
const Todo = ({todo, eliminarTodo, editarTodo}) => {
    const { nombre, descripcion, estado, prioridad, id } = todo
    return(
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold"> {nombre} ({estado ? 'finalizado': 'pendiente'})</div>
                <p>{descripcion}</p>
                <div>  
                        <button  onClick={() => eliminarTodo(id)} className="btn btn-success me-2">Eliminar</button>
                        <button  onClick={() => editarTodo(id)} className="btn btn-primary">Editar</button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">{prioridad && 'Prioritario'}</span>
        </li>
    )
}

export default Todo