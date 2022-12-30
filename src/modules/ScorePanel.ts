
// 定义记分牌类
class ScorePanel {

  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement
  maxLevel: number
  scoreSpan: number

  constructor(maxLevel: number = 10, scoreSpan: number = 10) {
    this.scoreEle = document.querySelector('.score')!
    this.levelEle = document.querySelector('.level')!
    this.maxLevel = maxLevel
    this.scoreSpan = scoreSpan
  }

  // 分数
  addScore() {
    this.score += this.scoreSpan;
    this.scoreEle.innerHTML = `score：<span>${this.score}</span>`
    if (this.score % 100 === 0) {
      this.addLevel()
    }
  }

  // 等级
  addLevel() {
    this.level += 1;
    this.levelEle.innerHTML = `level：<span>${this.level}</span>`
  }
}

export default ScorePanel