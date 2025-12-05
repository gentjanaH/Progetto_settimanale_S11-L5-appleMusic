
import { GET_MUSIC, GET_ERROR } from '../actions'



const initialState = {
    canzoni: [],
    error: '',
}

const fetchReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case GET_MUSIC:

            return {
                ...currentState,
                canzoni: action.payload.data,
            }

        case GET_ERROR:
            return {
                ...currentState,
                error: action.payload,
            }

        default:
            return currentState
    }
}

export default fetchReducer