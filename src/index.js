/* ==========================================================================
    App main entry
   ========================================================================== */

/* Load resources
   -------------------------------------------------------------------------- */
import './css/index.css'
import Nav from 'nav'
import Header from 'header'

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