import React from 'react';
import {checkWin} from "../helpers/helpers";

const Popup = ({correctLetter, wrongLetters, selectedWord, playAgain}) => {
    let finalMessage = ''
    let finalMessageRevealWord = ''

    if (checkWin(correctLetter, wrongLetters, selectedWord) === 'win') {
        finalMessage = '恭喜你输入正确'
    } else if (checkWin(correctLetter, wrongLetters, selectedWord) === 'lose') {
        finalMessage = '抱歉，输入错误，游戏结束。'
        finalMessageRevealWord = `游戏单词为：￥${selectedWord}`
    }

    return (
        <div className="popup-container"
             style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>再玩一次</button>
            </div>
        </div>
    );
};

export default Popup;