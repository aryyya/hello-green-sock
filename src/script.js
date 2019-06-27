import {
  TweenMax,
  TimelineMax
} from 'gsap'

window.addEventListener('load', () => {

  const divs = Array.from({ length: 50 }, () => (
    document.createElement('div')
  ))

  divs.forEach(div => {
    TweenMax.set(div, {
      position: 'absolute',
      x: `${Math.random() * window.innerWidth}px`,
      y: `${Math.random() * window.innerHeight}px`,
      width: 20,
      height: 20,
      backgroundColor: 'orange',
      borderRadius: '100px'
    })
    document.body.appendChild(div)
  })

  document.addEventListener('click', event => {
    const { x, y } = event
    TweenMax.to(divs, 1, { x, y })
  })
})
