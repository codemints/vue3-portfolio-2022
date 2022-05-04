import { ref } from 'vue'

//DOM elements needed for cursor movement
const root = ref()
const body = ref()
const bodyOS = ref()

//Reactive cursor data object
//Used to track position
const cursorData = ref({
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

const setMouse = (e, bodyOS) => {
  $_.xPos = e.clientX - bodyOS || e.pageX - bodyOS
  $_.yPos = e.clientY || e.pageY
}

const followMouse = (cursorStyle) => {
  $_.frame = requestAnimationFrame(() => followMouse(cursorStyle))
  if ( !$_.x || !$_.y ) {
    $_.x = $_.xPos
    $_.y = $_.yPos
  } else {
    $_.dx = ($_.xPos - $_.x) * 0.125
    $_.dy = ($_.yPos - $_.y) * 0.125

    if ( Math.abs($_.dx) + Math.abs($_.dy) < 0.1 ) {
      $_.x = $_.xPos
      $_.y = $_.yPos
    } else {
      $_.x += $_.dx
      $_.y += $_.dy
    }
  }
  cursorStyle.setProperty('--x', `${$_.x}px`)
  cursorStyle.setProperty('--y', `${$_.y}px`)
}

export const initCursorAnimations = (cursor, body, root) => {
  const bodyOS = body.offsetLeft
  root.addEventListener('mousemove', (e) => setMouse(e, bodyOS))
  followMouse(cursor.value.style)
}
