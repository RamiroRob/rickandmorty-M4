import axios from 'axios'

export const ADD_CHAR = "ADD_CHAR"
export const DELETE_CHAR = "DELETE_CHAR"
export const FILTER = "FILTER"
export const ORDER = "ORDER"


export const addChar = (char) => {
    axios.post(`http://localhost:3001/rickandmorty/fav/${char}`)
    return {
        type: ADD_CHAR,
        payload: char
    }
}

export const deleteChar = (id) => {
    axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
    return {
        type: DELETE_CHAR,
        payload: id
    }
}

export const filterCards = (status) => {
    return {
        type: FILTER,
        paylod: status
    }
}

export const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id
    }
}