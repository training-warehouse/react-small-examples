import React, {useState, useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {transactions, dispatch} = useContext(GlobalContext)

    const handleSubmit = e => {
        e.preventDefault()
        dispatch({
            type: 'ADD_TRANSACTION',
            transaction: {
                id: transactions.length + 1,
                text,
                amount
            }
        })
        setText('')
        setAmount(0)
    }

    return (
        <div>
            <h3>添加新交易</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">交易名称</label>
                    <input type="text" id="text" placeholder="请输入名称..."
                           onChange={e => setText(e.target.value)}
                           value={text}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">金额<br/> (支出-负数，收入-正数)</label>
                    <input type="number" id="amount" placeholder="请输入金额..."
                           onChange={e => setAmount(e.target.valueAsNumber)}
                           value={amount}/>
                </div>
                <button className="btn">添加新交易</button>
            </form>
        </div>
    );
};

export default AddTransaction;