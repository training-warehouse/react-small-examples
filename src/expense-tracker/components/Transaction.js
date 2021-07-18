import React, {useContext} from 'react';
import {GlobalContext} from "../contexts/GlobalState"

const Transaction = ({transaction}) => {
    const {dispatch} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? "-" : "+"

    return (
        <li key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}{Math.abs(transaction.amount)}</span>
            <button className="delete-btn"
                    onClick={() => dispatch({
                        type: "DELETE_TRANSACTION",
                        id: transaction.id
                    })}>x
            </button>
        </li>
    );
};

export default Transaction;