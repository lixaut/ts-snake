
// 定义食物类
class Food {

  element: HTMLElement

  constructor() {
    this.element = document.querySelector('#food')!
  }

  // 获取食物 x 坐标方法
  get X() {
    return this.element.offsetLeft
  }

  // 获取食物 y 坐标方法
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物的位置
  change() {
    let left = Math.floor(Math.random() * 70) * 10
    let top = Math.floor(Math.random() * 45) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food