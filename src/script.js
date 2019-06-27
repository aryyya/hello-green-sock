import {
  TweenMax,
  TimelineMax
} from 'gsap'

window.addEventListener('load', () => {

  const box = document.createElement('div')
  box.setAttribute('class', 'box')
  document.body.appendChild(box)

  TweenMax.set(box, { transformPerspective: 500 })

  box.addEventListener('click', () => {
    TweenMax.to(box, 0.5, { rotationX: '60' })
  })

})
