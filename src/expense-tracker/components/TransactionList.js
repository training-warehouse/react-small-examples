import React, {useContext} from 'react';
import {GlobalContext} from "../contexts/GlobalState";

import Transaction from "./Transaction";

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)

    return (
        <div>
            <h3>历史记录</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                        <Transaction transaction={transaction}
                                     key={transaction.id}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default TransactionList;