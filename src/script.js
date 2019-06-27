import { TweenMax } from 'gsap'

window.addEventListener('load', () => {
  window.addEventListener('click', event => {
    TweenMax.to('#box', 1, { x: 100, y: 100 })
  })
})
