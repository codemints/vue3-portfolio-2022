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