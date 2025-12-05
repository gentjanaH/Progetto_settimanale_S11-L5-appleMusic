import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from "../reducers/fetchReducer"
import favReducer from "../reducers/favReducer"


const store = configureStore({
    reducer: {
        results: fetchReducer,
        preferiti: favReducer
    }

})

export default store