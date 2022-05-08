import { ref, reactive } from 'vue'
import { gsap } from 'gsap'

const gsapAnimations = () => {
  const initIntroAnimations = () => {
    const tl = gsap.timeline()
    const classes = ['animate__animated', 'animate__bounce', 'text-theme-blue']

    tl.from(
      '#hero__title .char',
      {
        opacity: 0,
        duration: 0.05,
        delay: 1,
        ease: 'linear',
        stagger: {
          each: 0.1,
          onStart() {
            this._targets[0].classList.add(...classes)
          },
          onComplete() {
            this._targets[0].style.transition = 'color 0.2s ease'
            this._targets[0].classList.remove('text-theme-blue')
          }
        },
        onComplete() {
          setTimeout(() => {
            this._targets.forEach(target => {
              target.classList.remove(...classes)
              target.style.transition = ''
            })
          }, 1000)
        }
      }
    )

    tl.from(
      '#hero__subtitle',
      {
        duration: 0.3,
        y: 120,
        opacity: 0,
        ease: 'bounce.out'
      },
      '>0.5'
    )

    tl.from(
      '#hero__button',
      {
        duration: 2,
        ease: 'elastic.out(0.5, 0.125)',
        opacity: 0,
        y: 150,
      },
      '>0.75'
    )
  }

  return {
    initIntroAnimations,
  }
}

export default gsapAnimations