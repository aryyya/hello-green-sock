import { TweenMax } from 'gsap'

window.addEventListener('load', () => {

  TweenMax.set('#box', { xPercent: -50, yPercent: -50 })

  window.addEventListener('click', event => {
    const { clientX, clientY } = event
    TweenMax.to('#box', 1, { x: clientX, y: clientY })
  })
})
