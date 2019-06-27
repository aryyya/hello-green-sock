import {
  TweenMax,
  TimelineMax
} from 'gsap'

window.addEventListener('load', () => {

  TweenMax.set('#box', {
    backgroundColor: 'green',
    width: '50px',
    height: '50px',
    x: '50px',
    y: '50px'
  })

  const timeline = new TimelineMax({
    repeat: -1
  })
  timeline.pause()
  timeline.to('#box', 0.5, { x: 100 })
  timeline.to('#box', 0.5, { y: 100 })
  timeline.to('#box', 0.5, { x: 50 })
  timeline.to('#box', 0.5, { y: 50 })

  document.querySelector('#box').addEventListener('click', () => {
    if (timeline.isActive()) {
      timeline.pause()
    } else {
      timeline.resume()
    }
  })
  
  document.addEventListener('wheel', event => {
    const { wheelDelta } = event
    TweenMax.to(timeline, 0.25, { progress: (wheelDelta > 0 ? '+=0.1' : '-=0.1')})
  })

})
