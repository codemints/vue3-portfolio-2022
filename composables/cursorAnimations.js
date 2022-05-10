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

  const changeCursorColor = (e) => {
    $_.activeCursor.hidden = true
    let belowCursor = document.elementFromPoint(e.clientX, e.clientY)
    $_.activeCursor.hidden = false
    
    if ( e.clientX < 0 || e.clientX > window.innerWidth || belowCursor === null ) return

    const colorBelow = getComputedStyle(belowCursor).getPropertyValue('background-color')
    const colorCursor = getComputedStyle($_.activeCursor).getPropertyValue('background-color')

    console.log(colorBelow - colorCursor)

    if ( colorBelow === colorCursor ) {
      $_.activeCursor.style.mixBlendMode = 'difference'
      $_.activeCursor.style.opacity = '0.5'
    }
    else {
      $_.activeCursor.style.mixBlendMode = ''
      $_.activeCursor.style.opacity = '1'
    }
  }

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

    $_.activeCursor.style.setProperty('--x', `${$_.cx}px`)
    $_.activeCursor.style.setProperty('--y', `${$_.cy}px`)
  }

  const animatePulse = () => {
    //expand and pulse cursor when hovered over zone
  }

  const morphCursor = (button) => {
    cancelAnimationFrame($_.frame)
    const cStyle = $_.activeCursor.style
    $_.h = getComputedStyle($_.activeCursor).getPropertyValue('--h')
    $_.w = getComputedStyle($_.activeCursor).getPropertyValue('--w')
    const rad = getComputedStyle(button).borderRadius
    const rect = button.getBoundingClientRect()
    const h = rect.height
    const w = rect.width
    const l = rect.x
    const t = rect.y

    $_.activeCursor.classList.add('button__hover')
    cStyle.setProperty('--h', `${h}px`)
    cStyle.setProperty('--w', `${w}px`)
    cStyle.setProperty('--x', `${l + w / 2}px`)
    cStyle.setProperty('--y', `${t + h / 2}px`)
    cStyle.borderRadius = rad
    cStyle.borderWidth = '0.35rem'

    $_.inactiveCursor.style.opacity = 0
    button.style.cursor = 'pointer'
  }

  const unmorphCursor = (button) => {
    $_.frame = requestAnimationFrame(animateCursor)
    const cStyle = $_.activeCursor.style

    cStyle.setProperty('--h', $_.h)
    cStyle.setProperty('--w', $_.w)
    cStyle.borderRadius = ''
    cStyle.borderWidth = ''
    $_.activeCursor.classList.remove('button__hover')

    $_.inactiveCursor.style.opacity = 1
    button.style.cursor = ''
  }

  const setCursorData = (obj) => {
    $_.root = obj.root
    $_.offset = obj.body.offsetLeft
    $_.activeCursor = obj.activeCursor
    $_.inactiveCursor = obj.inactiveCursor
    $_.drag = obj.drag
  }

  const initCursorAnimation = () => {
    $_.activeCursor.style.opacity = 1
    $_.root.addEventListener('mousemove', setMouseCoordinates)
    animateCursor()
  }

  const initCursorMorph = (buttons) => {
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => morphCursor(button))
      button.addEventListener('mouseleave', () =>  unmorphCursor(button))
    })
  }

  return {
    initCursorAnimation,
    initCursorMorph,
    setCursorData,
  }
}

export default cursorAnimations