import { stringifyStyle } from '@vue/shared'
import { ref } from 'vue'

//DOM elements needed for cursor movement

//Reactive cursor data object
//Used to track position
const cursorData = ref({
  bodyOS: null,
  cursor: null,
  w: null,
  h: null,
  border: null,
  xPos: '',
  yPos: '',
  x: void 0,
  y: void 0,
  dx: void 0,
  dy: void 0,
  frame: -1
})

const $_ = cursorData.value

/**
 * HANDLE HOVER CLASS
 * Adds animation hover classes to a hovered element
 * @param {HTMLDOMElement} payload - the current HTML DOM Element
 * @param {Array} classNames - an array of classnames for hover animation
 */
export const handleHoverClass = (payload, classNames) => {
  payload.classList.add(...classNames)
  
  if ( payload.classList.contains('text-theme-orange') ) {
    payload.classList.remove('text-theme-orange')
    payload.classList.add('text-theme-blue')
  }

  payload.addEventListener('animationend', () => {
    payload.classList.remove(...classNames)
    if ( payload.classList.contains('text-theme-blue') ) {
      payload.classList.remove('text-theme-blue')
      payload.classList.add('text-theme-orange')
    }
  })
}

const setMouse = (e) => {
  $_.xPos = e.clientX - $_.bodyOS || e.pageX - $_.bodyOS
  $_.yPos = e.clientY || e.pageY
}

const followMouse = () => {
  $_.frame = requestAnimationFrame(followMouse)
  if ( !$_.x || !$_.y ) {
    $_.x = $_.xPos
    $_.y = $_.yPos
  } else {
    $_.dx = ($_.xPos - $_.x) * 0.5
    $_.dy = ($_.yPos - $_.y) * 0.5

    if ( Math.abs($_.dx) + Math.abs($_.dy) < 0.1 ) {
      $_.x = $_.xPos
      $_.y = $_.yPos
    } else {
      $_.x += $_.dx
      $_.y += $_.dy
    }
  }
  $_.cursor.style.setProperty('--x', `${$_.x}px`)
  $_.cursor.style.setProperty('--y', `${$_.y}px`)
}

const morphCursor = (button) => {
  cancelAnimationFrame($_.frame)
  const cStyle = $_.cursor.style
  $_.h = getComputedStyle($_.cursor).getPropertyValue('--h')
  $_.w = getComputedStyle($_.cursor).getPropertyValue('--w')
  const rad = getComputedStyle(button).borderRadius
  const rect = button.getBoundingClientRect()
  const h = rect.height
  const w = rect.width
  const l = rect.x
  const t = rect.y

  $_.cursor.classList.add('button__hover')
  cStyle.setProperty('--h', `${h}px`)
  cStyle.setProperty('--w', `${w}px`)
  cStyle.setProperty('--x', `${l + w / 2}px`)
  cStyle.setProperty('--y', `${t + h / 2}px`)
  cStyle.borderRadius = rad
  cStyle.borderWidth = '0.35rem'
}

const unmorphCursor = () => {
  $_.frame = requestAnimationFrame(followMouse)
  const cStyle = $_.cursor.style
  
  cStyle.setProperty('--h', $_.h)
  cStyle.setProperty('--w', $_.w)
  cStyle.borderRadius = ''
  cStyle.borderWidth = ''
  $_.cursor.classList.remove('button__hover')
}

export const initCursorAnimations = (cursor, body, root) => {
  $_.bodyOS = body.offsetLeft
  $_.cursor = cursor.value
  root.addEventListener('mousemove', setMouse)
  followMouse()
}

export const initButtonAnimations = (buttonArray) => {
  buttonArray.forEach(button => {
    button.addEventListener('mouseover', () => morphCursor(button))
    button.addEventListener('mouseleave', unmorphCursor)
  })
}