import {
  TweenMax,
  TimelineMax
} from 'gsap'

window.addEventListener('load', () => {

  const box = document.createElement('div')
  box.setAttribute('class', 'box')
  document.body.appendChild(box)

  box.addEventListener('mouseover', () => {
    TweenMax.to(box, 0.5, { className: '+=hover' })
  })
  box.addEventListener('mouseout', () => {
    TweenMax.to(box, 0.5, { className: '-=hover' })
  })
  box.addEventListener('mousedown', () => {
    TweenMax.to(box, 0.5, { className: '+=down' })
  })
  box.addEventListener('mouseup', () => {
    TweenMax.to(box, 0.5, { className: '-=down' })
  })

})
