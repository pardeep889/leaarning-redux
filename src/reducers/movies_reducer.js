export default function(state={}, action){

    switch (action.type) {
        case "MOVIES_LIST":
                return {...state,movies: action.payload}
        default:
            return state;
    }
}