import { reactive } from 'vue'

const cursorAnimations = () => {
  const cursorData = reactive({
    mx: '',
    my: '',
    cx: void 0,
    cy: void 0,
    dx: void 0,
    dy: void 0,
    frame: -1,
    visible: false,
  })

  const $_ = cursorData

  const setMouseCoordinates = e => {
    $_.mx = e.clientX - $_.offset || e.pageX - $_.offset
    $_.my = e.clientY || e.pageY
  }

  const animateCursor = () => {
    $_.frame = requestAnimationFrame(animateCursor)

    if ( !$_.cx || !$_.cy ) {
      $_.cx = $_.mx
      $_.cy = $_.my
    } else {
      $_.dx = ($_.mx - $_.cx) * $_.drag
      $_.dy = ($_.my - $_.cy) * $_.drag

      if ( Math.abs($_.dx) + Math.abs($_.dy) < 0.1 ) {
        $_.cx = $_.mx
        $_.cy = $_.my
      } else {
        $_.cx += $_.dx
        $_.cy += $_.dy
      }
    }

    $_.cursor.style.setProperty('--x', `${$_.cx}px`)
    $_.cursor.style.setProperty('--y', `${$_.cy}px`)
  }

  const animatePulse = () => {
    //expand and pulse cursor when hovered over zone
  }

  const morphCursor = (button) => {
    cancelAnimationFrame($_.frame)
    const cStyle = $_.cursor.style
    console.log(cStyle)
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

  const setCursorData = (obj) => {
    $_.root = obj.root
    $_.offset = obj.body.offsetLeft
    $_.cursor = obj.cursor
    $_.drag = obj.drag
  }

  const initCursorAnimation = () => {
    $_.root.addEventListener('mousemove', setMouseCoordinates)
    animateCursor()
  }

  const initCursorMorph = (buttons) => {
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => morphCursor(button))
      button.addEventListener('mouseleave', unmorphCursor)
    })
  }

  return {
    initCursorAnimation,
    initCursorMorph,
    setCursorData,
  }
}

export default cursorAnimations