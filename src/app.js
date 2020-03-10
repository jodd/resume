/* ==========================================================================
    App main entry
   ========================================================================== */

/* Load resources
   -------------------------------------------------------------------------- */
import './css/index.css'
import Header from 'header'
import Footer from 'footer'

// icons
(icons => icons.keys().forEach(icons))(
    require.context( './icons', false,
        /(location|mobile|mail|link|github|twitter|clock|codepen|profile|briefcase|graduation-cap|tools|chevron-right|books)\.svg$/ ))

/* -------------------------------------------------------------------------- */

/**
 * Trigger a custom event for the debounced resize event
 */
function init() {

    const W = window
    let windowWidth = W.innerWidth // used to check if the window width changed on resize

    // debounce the resize handler
    W.addEventListener('resize', debounce(e => {
        // exit if the window width didn't changed
        if (windowWidth === W.innerWidth) return
        (windowWidth = W.innerWidth) && W.dispatchEvent(new Event('resized'))
    }, 300 ))

}

/* -------------------------------------------------------------------------- */
export default props => (
    <div className="page" ref={() => init()}>
        <Header/>
        <main role="main">

            <section id="intro">
                <h2 className="section-heading">
                    <span>Présentation</span>
                </h2>
                <div>
                    {/*<div className="section-highlight"
                        dangerouslySetInnerHTML={{ __html: require( './posts/strengths.md' )}}></div>*/}
                    <div dangerouslySetInnerHTML={{ __html: require( './posts/profile.md' )}}></div>
                </div>
            </section>

            <section id="background">
                <h2 className="section-heading">
                    <span>Formation</span>
                </h2>
                <div>
                    <strong>Ingénieur informatique</strong>, École d’ingénieurs ECE Paris
                    <p>
                        Systèmes d’Information et Réseaux<br/>
                        Multimédia et Médias Numériques - Internet
                    </p>
                </div>
            </section>

            <section id="experience">
                <h2 className="section-heading">
                    <span>Expérience</span>
                </h2>
                <div>
                    <div className="experience-card">
                        <strong>Le Slip Français</strong>
                        <p className="time-range">
                            Depuis <time dateTime="2018-12">décembre 2018</time>
                            <svg className="icon-clock" aria-hidden="true"><use xlinkHref="#clock"></use></svg>
                            1 an 3 mois
                        </p>
                        <ul>
                          <li>maintenance du <a href="https://leslipfrancais.fr" title="Le Slip Français">e-shop</a> (refonte des pages, débug et développement de features)</li>
                          <li>mise en place de l'environnement de développement (config du serveur de dev, nettoyage et réorganisation du code)</li>
                          <li>intégration de React au projet, et développement de plusieurs composants (moteur de recherche Algolia)</li>
                          <li>mise en place d'un workflow avec les designers (animation des réunions, outil de partage des maquettes)</li>
                        </ul>
                    </div>
                    <div className="experience-card">
                        <strong>Groupe de presse Prisma Media</strong>
                        <p className="time-range">
                            <time dateTime="2016-05">Mai 2016</time> - <time dateTime="2017-09">septembre 2017</time>
                            <svg className="icon-clock" aria-hidden="true"><use xlinkHref="#clock"></use></svg>
                            1 an 4 mois
                        </p>
                        <ul>
                            <li>refonte du site <a href="http://www.capital.fr/">capital.fr</a></li>
                            <li>maintenance des sites <a href="http://www.neonmag.fr/">neonmag.fr</a> et <a href="http://www.cuisineactuelle.fr/">cuisineactuelle.fr</a></li>
                            <li>développement d'un proto d'une plateforme vidéo (React)</li>
                        </ul>
                    </div>
                    <div className="experience-card">
                        <strong>Freelance & agences</strong>
                        <p className="time-range">
                            <time dateTime="2008-01">Janvier 2008</time> - <time dateTime="2015-05">mai 2015</time>
                            <svg className="icon-clock" aria-hidden="true"><use xlinkHref="#clock"></use></svg>
                            7 ans 4 mois
                        </p>
                        <p>Travaux d'intégration, refonte et développement d'interfaces (e-shop, site vitrine, blog...)</p>
                    </div>
                </div>
            </section>

            <section id="skills">
                <h2 className="section-heading">
                    <span>Compétences</span>
                </h2>
                <div>
                    <p><strong>Langages</strong>&nbsp;: HTML, CSS, JS</p>
                    <p><strong>Technos/outils</strong>&nbsp;: Node, Express, Webpack, React, PostCSS, jQuery, Git</p>
                    <p>J'ai aussi utilisé&nbsp;: Less, Sass, Stylus, Twig, Grunt, Gulp, RequireJS, <acronym title="Subversion">SVN</acronym></p>
                    <p><strong>Mes priorités</strong>&nbsp;: performance, <acronym title="User Experience">UX</acronym>, <acronym title="Search Engine Optimization">SEO</acronym> et accessibilité</p>
                    <p>Bon niveau en anglais.</p>
                </div>
            </section>

            <section id="interests">
                <h2 className="section-heading">
                    <span>Intérêts</span>
                </h2>
                <div>
                    <p>Amateur de <strong>musique électronique</strong>, j'aime passer du temps à peaufiner <a href="https://open.spotify.com/user/j0dd">mes playlists Spotify</a></p>
                    <p>Avec une famille originaire du Gers, difficile de passer à côté de la <strong>gastronomie</strong>. J'aime cuisiner et (surtout) bien manger.</p>
                    <p>Adepte du <strong><acronym title="Do It Yourslef">DIY</acronym></strong>, je suis toujours en quête de palettes dans mon quartier pour mon futur canapé/lit/table.</p>
                    <p>Je suis sensible aux problématiques liés à l'<strong>environnement</strong>, je m'intéresse aux solutions pour consommer de manière responsable.</p>
                    <p>Je fais du <strong>Yoga</strong>, 10 minutes tous les matins pour bien commencer la journée.</p>
                    <p>Et pour mon chez-moi j'adopte les principes du <strong>minimalisme</strong>, ça me simplifie la vie&nbsp;!</p>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
)
