import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {


    return (
        <div
            className="d-flex justify-content-between mb-2"
        >
            <p
                className={`list-group-item w-100 ${todo.done && 'complete'}`}
                onClick={(e) => handleToggle(todo.id)}
            >
                <li
                    // ajustar className y el evento del mouse
                >
                    {index }. {todo.desc}
                </li>
            </p>

            <button className="btn btn-danger" onClick={(e) => handleDelete(todo.id)} >Borrar</button>
        </div>

    )
}
