/* ==========================================================================
    Header
   ========================================================================== */

import './index.css'

/* Globals
   -------------------------------------------------------------------------- */
const W = window

/* -------------------------------------------------------------------------- */
/**
 * Module definition
 */
export default ( element, options = {} ) => {

const header = element
const footer = options.footer

const scrollHandler = throttle( setHeight, 30 ) // used to bind/unbind the setHeight func to the scroll event
let windowWidth = W.innerWidth // used to check if the window width has changed on resize
let windowHeight = W.innerHeight // used to check if the window height has changed on resize

/**
 * Set the header max-height according to the available onscreen space
 */
function setHeight() {

    if ( breakpoint( 'medium', true )) {
        const onscreenFooterHeight = Math.max( 0,
            W.innerHeight - footer.getBoundingClientRect().top )

        header.style.maxHeight = W.innerHeight - onscreenFooterHeight + 'px'

        W.addEventListener( 'scroll', scrollHandler )
    } else {
        header.style.removeProperty( 'max-height' )

        W.removeEventListener( 'scroll', scrollHandler )
    }
}

/* -------------------------------------------------------------------------- */
/*
 * Init
 */

// debounce the resize handler
W.addEventListener( 'resize', debounce( e => {

    // exit if the window size hasnt changed
    if ( windowWidth === W.innerWidth && windowHeight === W.innerHeight ) return

    (( windowWidth = W.innerWidth ) && ( windowHeight = W.innerHeight ))
        && setHeight()
}, 300 ))

setHeight()

return {}

}