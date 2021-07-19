import React, {Component} from 'react';

import Snake from "./components/Snake";
import Food from "./components/Food";


const getRandomCoordinates = () => {
    let min = 1
    let max = 98
    let x = Math.floor((Math.random() * max + min) / 2) * 2
    let y = Math.floor((Math.random() * max + min) / 2) * 2
    return [x, y]
}

const initialState = {
    food: getRandomCoordinates(),
    direction: 'RIGHT',
    speed: 200,
    snakeDots: [
        [0, 0],
        [2, 0],
    ],
}


class App extends Component {
    state = initialState

    onkeydown = e => {
        switch (e.keyCode) {
            case 38:
                this.setState({direction: 'UP'})
                break
            case 40:
                this.setState({direction: 'DOWN'})
                break
            case 37:
                this.setState({direction: 'LEFT'})
                break
            case 39:
                this.setState({direction: 'RIGHT'})
                break
            default:
                this.setState({direction: 'RIGHT'})
        }
    }

    componentDidMount() {
        // 移动snake
        setInterval(this.moveSnake, this.state.speed)

        //设置键盘事件
        document.onkeydown = this.onkeydown

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.snakeDots);
        this.checkIfOutBorders()
        this.checkIfCollapsed()
        this.checkIfEat()
    }

    moveSnake = () => {
        let dots = [...this.state.snakeDots]
        let head = dots[dots.length - 1]

        switch (this.state.direction) {
            case "RIGHT":
                head = [head[0] + 2, head[1]]
                break
            case "LEFT":
                head = [head[0] - 2, head[1]]
                break
            case "DOWN":
                head = [head[0], head[1] + 2]
                break
            case "UP":
                head = [head[0], head[1] - 2]
                break
            default:
                break
        }
        dots.push(head)
        dots.shift()
        this.setState({snakeDots: dots})
    }

    // 限制活动范围
    checkIfOutBorders() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1]
        if (head[0] >= 100 || head[0] < 0 || head[1] >= 100 || head[1] < 0) {
            this.onGameOver()
        }
    }

    // 验证head是否撞击到自身
    checkIfCollapsed() {
        let snake = [...this.state.snakeDots]
        let head = snake[snake.length - 1]

        // 删除头部坐标,然后遍历，如果坐标相等就相当于头部撞到了身体
        snake.pop()
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                this.onGameOver()
            }
        })
    }

    // 验证是否吃到Food
    checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1]
        let food = this.state.food
        if (head[0] === food[0] && head[1] === food[1]) {
            this.setState({food: getRandomCoordinates()})
            this.enlargtSnake()
            this.increaseSpeed()
        }
    }

    // 填充贪吃蛇
    enlargtSnake() {
        let newSnake = [...this.state.snakeDots]
        newSnake.unshift([])
        this.setState({snakeDots: newSnake})
    }

    // 加速运动
    increaseSpeed() {
        if (this.state.speed > 10) {
            this.setState({speed: this.state.speed - 10})
        }
    }

    onGameOver() {
        alert(`游戏结束！你的得分为：${this.state.snakeDots.length}`)
        this.setState(initialState)
    }


    render() {
        return (
            <div className="game-area">
                <Snake snakeDots={this.state.snakeDots}/>
                <Food food={this.state.food}/>
            </div>
        )
    }

}

export default App;