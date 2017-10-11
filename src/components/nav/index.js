/* ==========================================================================
    Nav
   ========================================================================== */

import './index.css'

/* Globals
   -------------------------------------------------------------------------- */
const defaults = {}
const W = window
const D = document
const B = D.documentElement

/* -------------------------------------------------------------------------- */
/**
 * Module definition
 */
export default ( element, options = {} ) => {

const opts = Object.assign( {}, defaults, options )

const nav = element
const page = D.querySelector( '.page' )
const scrollHandler = throttle( onScroll, 30 ) // used to bind/unbind the onScroll func to the scroll event

let windowWidth = W.innerWidth // used to check if the window width has changed on resize
let windowHeight = W.innerHeight // used to check if the window height has changed on resize
let scrollTop = W.pageYOffset // used to store the window scroll position

/**
 * Make space on the bottom of the page to prevent the nav from displaying on
 *  top of the footer
 */
function onResize() {

    if ( breakpoint( 'medium' )) {

        page.style.paddingBottom = nav.offsetHeight + 'px'

        W.addEventListener( 'scroll', scrollHandler )

    } else {

        nav.classList.remove( 'offscreen' )
        page.style.removeProperty( 'padding-bottom' )

        W.removeEventListener( 'scroll', scrollHandler )
    }

}

function onScroll() {

    const scrollDiff = W.pageYOffset - scrollTop

    if ( scrollDiff < 0 ||
        W.pageYOffset + W.innerHeight >= B.offsetHeight - nav.offsetHeight ) {
        nav.classList.remove( 'offscreen' )
    } else {
        nav.classList.add( 'offscreen' )
    }

    scrollTop = W.pageYOffset
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
        && onResize()
}, 300 ))

onResize()

return {}

}