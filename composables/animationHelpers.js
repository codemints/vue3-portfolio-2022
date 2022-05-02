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