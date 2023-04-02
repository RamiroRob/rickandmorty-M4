import {ADD_CHAR, DELETE_CHAR} from './actions'

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

export const reducer = (state = initialState, actions ) => {
    switch(actions.type) {
        case ADD_CHAR:
            return {
                ...state,
                myFavorites: [...state.myFavorites, actions.payload]
            }
        case DELETE_CHAR:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== actions.payload )
            }

        default:
        return {...state}
    }
}