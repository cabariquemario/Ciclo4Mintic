export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'agregar':
            return [ ...state, action.payload ];

        case 'remove':
            return state.filter( todo => todo.id !== action.payload );

        case 'cambiar':
            return state.map( todo => {

                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }

            })

        default:
            return state;
    }


}