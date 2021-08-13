class TextScramble {
  constructor(el) {
    //console.log('Here_constructor')
    this.el = el
    //this.chars = '!<>-_\\/[]{}—=+*^?#___________'
    this.chars = 'abcdefghijklmnopqrstuvwxyz'
    this.update = this.update.bind(this)
  }
    
  setText(newText) {
    //console.log('setText')
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
    
  update() {
    //console.log('update')
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
    
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'Hello',
  'Nice to meet you!',
  'This is a test code',
  'But I don\'t know how to stop this infinite loop',
  'I think I\'m in big trouble...',
  'But, I solved it!!!'
]

const el = document.querySelector('.change')
const fx = new TextScramble(el)
//console.log('Here_1')

let counter = 0
let finish_checker = false

const next = () => {
  //console.log(counter)
  //console.log('Here_2')
  fx.setText(phrases[counter]).then(() => {
    if(finish_checker === true) {
      //console.log('Here_final_2')
      return;
    }
    //console.log('Here_3')
    setTimeout(next, 1000)
    //console.log('Here_4')
  })
  //console.log('Here_5')
  if(counter === phrases.length-1) {
    //console.log('Here_final')
    finish_checker = true
    return;
  }
  counter = (counter + 1) % phrases.length
  //console.log('Here_6')
}

next()