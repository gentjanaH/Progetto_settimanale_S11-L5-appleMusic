

// export const ADD_TO_CART = 'ADD_TO_CART'
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
// export const SET_USERNAME = 'SET_USERNAME'
// export const LOGOUT = 'LOGOUT'
export const GET_MUSIC = 'GET_MUSIC'
export const GET_ERROR = 'GET_ERROR'



// export const addToCartAction = (bookSelected) => {
//     return {
//         type: ADD_TO_CART,
//         payload: bookSelected,

//     }
// }

// export const addToCartAction2 = (bookSelected) => {
//     return (dispatch, getState) => {

//         const currentState = getState()
//         console.log(currentState)

//         if (currentState.cart.content.length < 5) {
//             dispatch({
//                 type: ADD_TO_CART,
//                 payload: bookSelected,

//             })
//         } else {
//             console.log('CARRELLO PIENO!')

//         }
//     }
//}

// export const removeFromCartAction = (book) => {
//     return {
//         type: REMOVE_FROM_CART,
//         payload: book.id,
//     }
//}

// export const setUsernameAction = (value) => {
//     return {
//         type: SET_USERNAME,
//         payload: value,
//     }
// }

// export const logoutAction = () => {
//     return {
//         type: LOGOUT,
//     }
// }

export const getNewMusic = (query) => {


    return (dispatch, getState) => {


        const currentState = getState()
        console.log('currentState', currentState)

        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query)
            .then((r) => {
                if (r.ok) {
                    return r.json()

                } else {
                    throw new Error("Errore nel recupero dati")
                }
            })
            .then((nuovaMusica) => {
                console.log('CANZONI OTTENUTI DALLA FETCH', nuovaMusica)

                dispatch({
                    type: GET_MUSIC,
                    payload: nuovaMusica,
                })
            })
            .catch((err) => {
                console.log(err)

                dispatch({
                    type: GET_ERROR,
                    payload: JSON.stringify(err, Object.getOwnPropertyNames(err)),
                })
            })
    }
}