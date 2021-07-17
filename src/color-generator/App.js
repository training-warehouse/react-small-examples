import React, {Fragment, useState} from 'react'

import Values from "values.js";

import SingleColor from './SingleColor'

function App() {
    const [color, setColor] = useState('')
    const [list, setList] = useState([])
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
            setError(false)
        } catch (e) {
            setError(true)
        }
    }


    return (
        <Fragment>
            <section className="container">
                <h3>颜色生成器</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="#f15025"
                           onChange={e => setColor(e.target.value.trim())}
                           className={`${error ? 'error' : null}`}
                    />
                    <button type="submit" className="btn">提交</button>
                </form>
            </section>
            <section className="colors">
                {
                    list.map((color, index) => (
                        <SingleColor key={index} color={color} index={index}/>
                    ))
                }
            </section>
        </Fragment>
    )
}

export default App;
