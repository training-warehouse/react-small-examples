import React, {createContext, useReducer, useEffect} from 'react';
import axios from "axios";

import cartItems from '../data'
import reducer from '../reducers/reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = createContext()

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }
    const removeCart = (id) => {
        dispatch({type: 'REMOVE_CART', payload: id})
    }

    const increaseCart = (id) => {
        dispatch({'type': 'INCREASE_CART', payload: id})
    }

    const decreaseCart = (id) => {
        dispatch({'type': 'DECREASE_CART', payload: id})
    }

    useEffect(() => {
        dispatch({type: 'GET_TOTALS'})
    }, [state.cart])

    const fetchData = async () => {
        dispatch({type: 'LOADING'})
        const response = await axios.get(url)
        const cart = await response.json()
        dispatch({type: 'DISPLAY_ITEMS', payload: cart})
    }

    useEffect(() => {
        fetchData()
    }, [state.cart])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                removeCart,
                increaseCart,
                decreaseCart
            }}>
            {props.children}
        </AppContext.Provider>
    );
};


export {AppContext, AppProvider};
