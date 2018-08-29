/* ==========================================================================
    Nav
   ========================================================================== */

/* Load resources
   -------------------------------------------------------------------------- */
import './index.css'

/* -------------------------------------------------------------------------- */
const W = window
const D = document
const B = D.documentElement

let nav
let page
let scrollTop = W.pageYOffset // used to store the window scroll position

const scrollHandler = throttle(onScroll, 30) // used to bind/unbind the onScroll func to the scroll event

/**
 * Make space on the bottom of the page to prevent the nav from displaying on
 *  top of the footer
 */
function onResize() {

    if (breakpoint('medium')) {
        page.style.paddingBottom = nav.offsetHeight + 'px'
        W.addEventListener('scroll', scrollHandler)
    } else {
        nav.classList.remove('offscreen')
        page.style.removeProperty('padding-bottom')
        W.removeEventListener('scroll', scrollHandler)
    }
}

/**
 * The navbar toggles on scroll :
 *   displays on scrolling up, hides on scrolling down
 *
 */
function onScroll() {

    const scrollDiff = W.pageYOffset - scrollTop

    if (scrollDiff < 0 ||
        W.pageYOffset + W.innerHeight >= B.offsetHeight - nav.offsetHeight ) {
        nav.classList.remove('offscreen')
    } else if (scrollDiff < 100) {
        nav.classList.add('offscreen')
    }

    scrollTop = W.pageYOffset
}

/*
 * Init component
 */
function init( element ) {

    nav = element
    page = D.querySelector('.page')

    W.addEventListener('resized', onResize)

    onResize()
}

/* -------------------------------------------------------------------------- */

export default props => (
    <nav className="side-nav offscreen" role="navigation" ref={ el => init( el )}>
        <ol>
            <li>
                <a href="#intro">
                    <svg className="icon-profile" aria-hidden="true"><use xlinkHref="#profile"></use></svg>
                    <span>Présentation</span>
                </a>
            </li>
            <li>
                <a href="#background">
                    <svg className="icon-graduation-cap" aria-hidden="true"><use xlinkHref="#graduation-cap"></use></svg>
                    <span>Formation</span>
                </a>
            </li>
            <li>
                <a href="#experience">
                    <svg className="icon-briefcase" aria-hidden="true"><use xlinkHref="#briefcase"></use></svg>
                    <span>Expérience</span>
                </a>
            </li>
            <li>
                <a href="#skills">
                    <svg className="icon-tools" aria-hidden="true"><use xlinkHref="#tools"></use></svg>
                    <span>Compétences</span>
                </a>
            </li>
            <li>
                <a href="#interests">
                    <svg className="icon-books" aria-hidden="true"><use xlinkHref="#books"></use></svg>
                    <span>Intérêts</span>
                </a>
            </li>
        </ol>
    </nav>
)
