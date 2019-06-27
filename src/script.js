import {
  TweenMax,
  Elastic
} from 'gsap'

window.addEventListener('load', () => {

  const box = document.createElement('div')
  box.setAttribute('class', 'box')
  document.body.appendChild(box)

  TweenMax.to(box, 2, {
    scale: 1.25,
    repeat: -1,
    yoyo: true,
    ease: Elastic.easeInOut
  })
})
