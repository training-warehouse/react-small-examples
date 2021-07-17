import React, {useState, useEffect} from 'react';

const SingleColor = ({color: {rgb, weight, hex}, index}) => {
    const bcg = rgb.join(',')
    const hexValue = `#${hex}`
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        // 提示信息2秒后消失
        const timeout = setTimeout(() => setAlert(false), 2000)
        return () => clearTimeout(timeout)
    })

    return (
        <article className={`color ${index > 10 && 'color-light'}`}
                 style={{backgroundColor: `rgb(${bcg})`}}
                 onClick={() => {
                     // 复制到剪贴板
                     navigator.clipboard.writeText(hexValue);
                     setAlert(true)
                 }}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p className="alert">已经复制到剪切板</p>}
        </article>
    );
};

export default SingleColor;