import React, {useContext} from 'react';

import {AppContext} from './contexts/context'

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

const App = () => {
    const {loading} = useContext(AppContext)
    if (loading) {
        return (
            <div className="loading">Loading...</div>
        )
    }

    return (
        <main>
            <Navbar/>
            <CartContainer/>
        </main>
    );
};

export default App;