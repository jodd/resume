/* ==========================================================================
   Breakpoint
   ========================================================================== */

/**
 * Makes CSS breakpoints available into scripts
 * https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript
 */

import './styles.css'

/**
 * If bp is greater than or equals the current breakpoint the function returns true,
 *  otherwise false
 * If no param given, the function returns the name of the current breakpoint
 *  as a string
 * If the second param is true, the logic is reversed : the function returns true
 *  if bp is smaller than or equals the current breakpoint
 */
export default ( bp, reverse = false ) => {
    const bps = ['small', 'medium', 'large', 'max-width']
    const current = window.getComputedStyle( document.body, ':before' )
        .getPropertyValue( 'content' ).replace( /['"]+/g, '' )

    return typeof bp === 'string'
        ? reverse
            ? bps.indexOf( current ) >= bps.indexOf( bp )
            : bps.indexOf( current ) <= bps.indexOf( bp )
        : current
}