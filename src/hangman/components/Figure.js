import React, {Fragment} from 'react';

const Figure = ({wrongLetters}) => {
    const error = wrongLetters.length

    return (
        <Fragment>
            <svg height="250" width="200" className="figure-container">
                {/* <!-- 枝头 --> */}
                <line x1="60" y1="20" x2="140" y2="20"/>
                <line x1="140" y1="20" x2="140" y2="50"/>
                <line x1="60" y1="20" x2="60" y2="230"/>
                <line x1="20" y1="230" x2="100" y2="230"/>
                {/* <!-- 头部 --> */}
                {error > 0 &&
                <circle cx="140" cy="70" r="20"/>}
                {/* <!-- 身体 --> */}
                {error > 1 && <line x1="140" y1="90" x2="140" y2="150"/>}
                {/* <!-- 手臂 --> */}
                {error > 2 && <line x1="140" y1="120" x2="120" y2="100"/>}
                {error > 3 && <line x1="140" y1="120" x2="160" y2="100"/>}
                {/* <!-- 双腿 --> */}
                {error > 4 && <line x1="140" y1="150" x2="120" y2="180"/>}
                {error > 5 && <line x1="140" y1="150" x2="160" y2="180"/>}
            </svg>
        </Fragment>
    );
};

export default Figure;