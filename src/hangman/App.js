import React, {Fragment, useState, useEffect} from 'react';

import Header from "./components/Header";
import Figure from "./components/Figure";
import Word from "./components/Word";
import WrongLetters from "./components/WrongLetters";
import Popup from "./components/Popup";
import Notification from "./components/Notification";

import {showNotification as show} from "./helpers/helpers";

const words = ['application', 'programming', 'interface', 'wonder']
let selectedWord = words[Math.floor(Math.random() * words.length)]


const App = () => {
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [showNotification, setShowNotification] = useState(false)
    const [playable, setPlayable] = useState(false)

    // 监听键盘
    useEffect(() => {
        const handleKeyDown = e => {
            const {key, keyCode} = e
            if (keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase()
                if (selectedWord.includes(letter)) {
                    // 不能重复出现
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(correctLetters => [...correctLetters, letter])
                    } else {
                        show(setShowNotification)
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter])
                    } else {
                        show(setShowNotification)
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [correctLetters, wrongLetters, playable])

    // 重置游戏
    function playAgain() {
        setPlayable(true)
        // 清空之前数据
        setCorrectLetters([])
        setWrongLetters([])

        // 随机生成游戏单词

        let randomWord = words[Math.floor(Math.random() * words.length)]
        selectedWord = words[randomWord]
    }

    return (
        <Fragment>
            <Header/>
            <div className="game-container">
                <Figure wrongLetters={wrongLetters}/>
                <WrongLetters wrongLetters={wrongLetters}/>
                <Word selectedWord={selectedWord}
                      correctLetters={correctLetters}/>
                <Popup correctLetter={correctLetters}
                       wrongLetters={wrongLetters}
                       selectedWord={selectedWord}
                       playAgain={playAgain}/>
                <Notification showNotification={showNotification}/>
            </div>
        </Fragment>
    );
};

export default App;