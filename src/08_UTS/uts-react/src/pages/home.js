import HomeImg1 from '../assets/img/img-3x2-01.jpg';
import HomeImg2 from '../assets/img/img-3x2-02.jpg';
import HomeImg3 from '../assets/img/img-3x2-03.jpg';
import HomeImg4 from '../assets/img/img-3x2-04.jpg';
import HomeImg5 from '../assets/img/gallery-item-01.jpg';
import HomeImg6 from '../assets/img/gallery-item-02.jpg';
import HomeImg7 from '../assets/img/gallery-item-03.jpg';
import HomeImg8 from '../assets/img/gallery-item-04.jpg';
import HomeImg9 from '../assets/img/gallery-item-05.jpg';
import HomeImg10 from '../assets/img/gallery-item-06.jpg';
import HomeImg11 from '../assets/img/gallery-item-07.jpg';
import HomeImg12 from '../assets/img/gallery-item-08.jpg';
import HomeAPI from '../services/API/home.jsx'
import Footer from '../parts/Footer/footer'

export default function Home() {
    return (
        < div >
            <div class="row">
                <div class="col-12">
                    <div class="tm-main-bg"></div>
                </div>
            </div>

            {/* <!-- Main --> */}
            <main>
                {/* <!-- Welcome section --> */}
                <section class="tm-welcome">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="tm-section-header tm-header-floating">Welcome to New Vision</h2>
                        </div>
                    </div>

                    <div class="row tm-welcome-row">
                        <HomeAPI />
                    </div>

                    <div class="row tm-welcome-row-2">
                        <div class="col-lg-4 tm-dotted-box-container">
                            <article class="tm-dotted-box">
                                <i class="fas fa-3x fa-binoculars tm-article-icon"></i>
                                <h3 class="tm-article-title">Template Usage</h3>
                                <p class="tm-article-text">You can feel free to edit and use New Vision template for your commercial websites. Title color is #333</p>
                                <a class="tm-btn tm-btn-rounded tm-article-link" href="#">More Details</a>
                            </article>
                        </div>
                        <div class="col-lg-4 tm-dotted-box-container">
                            <article class="tm-dotted-box">
                                <i class="fas fa-3x fa-microscope tm-article-icon"></i>
                                <h3 class="tm-article-title">New Vision</h3>
                                <p class="tm-article-text"><a rel="nofollow" target="_parent" href="https://templatemo.com/tm-542-new-vision">New Vision</a> comes with 4 different HTML pages and provided free of charge by TemplateMo. You can add more pages if you need. Text color is #666</p>
                            </article>
                        </div>
                        <div class="col-lg-4 tm-dotted-box-container">
                            <article class="tm-dotted-box">
                                <i class="fas fa-3x fa-glasses tm-article-icon"></i>
                                <h3 class="tm-article-title">Download Sites</h3>
                                <p class="tm-article-text">Do not re-distribute our template ZIP file on your website. Or contact us first. Button color is #C99</p>
                                <a class="tm-btn tm-article-link" href="#">Read More...</a>
                            </article>
                        </div>
                    </div>
                </section>

                {/* <!-- Featured --> */}
                <section class="tm-featured">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="tm-section-header tm-section-header-small">Featured Carousel Items</h2>
                        </div>
                    </div>

                    {/* <!-- Carousel --> */}
                    <div class="grid tm-carousel">
                        <figure class="effect-honey">
                            <img src={HomeImg5} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Best</span> HTML Template</i></h4>
                            </figcaption>
                        </figure>
                        <figure class="effect-honey">
                            <img src={HomeImg6} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Top</span> CSS Theme</i></h4>
                            </figcaption>
                        </figure>
                        <figure class="effect-honey">
                            <img src={HomeImg7} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Best</span> HTML Template</i></h4>
                            </figcaption>
                        </figure>
                        <figure class="effect-honey">
                            <img src={HomeImg8} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Great</span> Web Theme</i></h4>
                            </figcaption>
                        </figure>
                        <figure class="effect-honey">
                            <img src={HomeImg9} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Best</span> HTML Collection</i></h4>
                            </figcaption>
                        </figure>
                        <figure class="effect-honey">
                            <img src={HomeImg10} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Max</span> CSS Layout</i></h4>
                            </figcaption>
                        </figure>
                        <figure class="effect-honey">
                            <img src={HomeImg11} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Best</span> HTML Layout</i></h4>
                            </figcaption>
                        </figure>
                        <figure class="effect-honey">
                            <img src={HomeImg12} alt="Featured Item" />
                            <figcaption>
                                <h4><i><span>Best</span> CSS Template</i></h4>
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <Footer />

            </main>
        </div >
    );
}