
export default class Snake {

  // 蛇头
  head: HTMLElement
  // 蛇身
  bodies: HTMLCollection
  // 蛇元素
  snakeEle: HTMLElement

  constructor() {
    this.head = document.querySelector('#snake > div')!
    this.snakeEle = document.getElementById('snake')!
    this.bodies = this.snakeEle.getElementsByTagName('div')
  }

  // 获取蛇头
  get snakeHeadX() {
    return this.head.offsetLeft
  }

  get snakeHeadY() {
    return this.head.offsetTop
  }

  // 设置蛇头
  set snakeHeadX(value: number) {
    if (this.snakeHeadX === value) return
    if (value < 0 || value > 690) {
      throw new Error('撞墙了')
    }
    this.bodyMove()
    this.head.style.left = value + 'px'
  }

  set snakeHeadY(value: number) {
    if (this.snakeHeadY === value) return
    if (value < 0 || value > 440) {
      throw new Error('撞墙了')
    }
    this.bodyMove()
    this.head.style.top = value + 'px'
  }

  // 蛇身移动
  bodyMove() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }

  // 增加蛇身
  addBody() {
    this.snakeEle.insertAdjacentHTML('beforeend', '<div></div>')
  }
}