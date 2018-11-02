/* ==========================================================================
    Header
   ========================================================================== */

/* Load resources
   -------------------------------------------------------------------------- */
import Nav from 'nav'
import './index.css'
import ProfileImg from './img/jod.jpg'

/* -------------------------------------------------------------------------- */
const W = window
const D = document

let header
let footer
let windowWidth = W.innerWidth // used to check if the window width has changed on resize
let windowHeight = W.innerHeight // used to check if the window height has changed on resize
const scrollHandler = throttle( setHeight, 30 ) // used to bind/unbind the setHeight func to the scroll event

/**
 * Set the header max-height according to the available onscreen space
 */
function setHeight() {

    if ( breakpoint( 'medium', true )) {

        const onscreenFooterHeight = Math.max( 0,
            W.innerHeight - footer.getBoundingClientRect().top )

        let headerStyles = W.getComputedStyle(header)
        let headerMarginTop = headerStyles.getPropertyValue('margin-top')
        let headerMarginBottom = headerStyles.getPropertyValue('margin-bottom')
        let headerMargins = parseInt(headerMarginTop) + parseInt(headerMarginBottom)
        let maxHeight = W.innerHeight - onscreenFooterHeight - headerMargins

        header.style.maxHeight = maxHeight + 'px'

        W.addEventListener( 'scroll', scrollHandler )

    } else {

        header.style.removeProperty( 'max-height' )

        W.removeEventListener( 'scroll', scrollHandler )
    }
}

/**
 * Initialize component
 */
function init( element ) {

    header = element
    footer = D.querySelector( '[role="contentinfo"]' )

    W.addEventListener( 'resized', setHeight )

    setHeight()
}

/* -------------------------------------------------------------------------- */

export default props => (
    <header role="banner" ref={ el => init( el )}>
        <div>
            <img src={ProfileImg} alt="Joris Durand"/>
            <h1><span>Joris<br/>Durand</span></h1>
            <strong>développeur web<br/>front-end</strong>
        </div>
        <div>
            <div>
                <p>
                    <svg className="icon-location" aria-hidden="true"><use xlinkHref="#location"></use></svg>
                    12 cité Popincourt 75011&nbsp;Paris
                </p>
                <p>
                    <svg className="icon-mobile" aria-hidden="true"><use xlinkHref="#mobile"></use></svg>
                    +33 (0)6 67 36 52 24
                </p>
                <p>
                    <svg className="icon-mail" aria-hidden="true"><use xlinkHref="#mail"></use></svg>
                    <a href="mailto:joris.durand@free.fr">joris.durand@free.fr</a>
                </p>
                <p>
                    <svg className="icon-link" aria-hidden="true"><use xlinkHref="#link"></use></svg>
                    <a href="http://jodd.github.io">http://jodd.github.io</a>
                </p>
            </div>
        </div>
        <div>
            <a className="link-icon" href="https://github.com/jodd" aria-label="Jod sur Github">
                <svg className="icon-github" aria-hidden="true"><use xlinkHref="#github"></use></svg>
            </a>
            <a className="link-icon" href="https://codepen.io/jod/" aria-label="Jod sur CodePen">
                <svg className="icon-codepen" aria-hidden="true"><use xlinkHref="#codepen"></use></svg>
            </a>
            <a className="link-icon" href="https://twitter.com/jorisdurand" aria-label="Jod sur Twitter">
                <svg className="icon-twitter" aria-hidden="true"><use xlinkHref="#twitter"></use></svg>
            </a>
        </div>
        <Nav/>
    </header>
)
