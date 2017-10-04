/* ==========================================================================
    App main entry
   ========================================================================== */

/* Load resources
   -------------------------------------------------------------------------- */
import './css/main.css'
import Nav from './js/nav'
import Header from './js/header'

// load icons
( icons => icons.keys().forEach( icons ))(
    require.context( './img/icons', false,
        /(location|mobile|mail|link|github|twitter|clock|codepen|profile|briefcase|graduation-cap|tools|chevron-right)\.svg$/ ))


/* DOM ready
   -------------------------------------------------------------------------- */
const D = document

// set the header behavior
Header( D.querySelector( '[role="banner"]' ), {
    footer: D.querySelector( '[role="contentinfo"]' )
})

// set the nav behavior
Nav( D.querySelector( '.side-nav' ))