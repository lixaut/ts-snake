
import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

export default class GameControl {

  snake: Snake
  food: Food
  scorePanel: ScorePanel
  direction: string = 'ArrowRight'
  isLive: boolean = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  // 游戏初始化
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.move()
  }

  // 键盘按下响应函数
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }

  // 蛇移动方法
  move() {
    let X = this.snake.snakeHeadX
    let Y = this.snake.snakeHeadY
    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10
        break
      case 'ArrowDown':
        Y += 10
        break
      case 'ArrowRight':
        X += 10
        break
      case 'ArrowLeft':
        X -= 10
        break
    }

    // 蛇吃
    this.checkEat(X, Y)

    // 修改蛇位置
    try {
      this.snake.snakeHeadX = X
      this.snake.snakeHeadY = Y
    } catch(e) {
      alert('game over')
      this.isLive = false
    }
    this.isLive && setTimeout(this.move.bind(this), 200)
  }

  // 蛇是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y ===  this.food.Y) {
      this.scorePanel.addScore()
      this.food.change()
      this.snake.addBody()
    }
  }
}