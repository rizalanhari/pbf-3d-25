import CompanyImg1 from '../assets/img/img-3x1-01.jpg';
import CompanyImg2 from '../assets/img/img-3x1-02.jpg';
import CompanyImg3 from '../assets/img/team-img-01.jpg';
import CompanyImg4 from '../assets/img/team-img-02.jpg';
import CompanyImg5 from '../assets/img/team-img-03.jpg';
import CompanyImg6 from '../assets/img/team-img-04.jpg';
import CompanyImg7 from '../assets/img/team-img-05.jpg';
import CompanyImg8 from '../assets/img/team-img-05.jpg';
import CompanyImg9 from '../assets/img/team-img-07.jpg';
import CompanyImg10 from '../assets/img/team-img-08.jpg';
import Footer from '../parts/Footer/footer'

export default function Company() {
    return (
        <div>
            <div class="row">
                <div class="col-12">
                    <div class="tm-main-bg tm-about-bg"></div>
                </div>
            </div>
            <main>
                <section class="tm-welcome">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="tm-section-header tm-header-floating">About Our Company</h2>
                        </div>
                    </div>
                    <div class="row tm-welcome-row">
                        <div class="tm-about">
                            <div class="col-12 tm-media tm-media-v-center">
                                <i class="fab fa-5x fa-accusoft tm-about-icon"></i>
                                <div>
                                    <p><a rel="nofollow" target="_parent" href="https://templatemo.com/tm-542-new-vision">New Vision HTML Template</a> is provided by TemplateMo for 100% free of charge. Vestibulum consectetur urna augue, in sagittis mi sodales ut. Maecenas at quam et ligula vulputate commodo. Integer tempor nec velit ut pulvinar. In hac habitasse platea dictumst.</p>
                                </div>
                            </div>
                            <div class="col-12 tm-media tm-media-v-center">
                                <i class="fas fa-5x fa-air-freshener tm-about-icon"></i>
                                <div>
                                    <p>Curabitur et viverra purus, in ornare sem. Donec eu imperdiet felis, sed interdum leo. Mauris nisl mi, bibendum eu venenatis at, condimentum et dui. Proin mi enim, dapibus at metus semper, hendrerit faucibus nisi.</p>
                                </div>
                            </div>
                            <div class="col-12 tm-media tm-media-v-center">
                                <i class="fas fa-5x fa-fire-alt tm-about-icon"></i>
                                <div>
                                    <p>Duis accumsan dolor feugiat dapibus ultrices. Vestibulum consectetur urna augue, in sagittis mi sodales ut. Maecenas at quam et ligula vulputate commodo. Integer tempor nec velit ut pulvinar. In hac habitasse platea dictumst.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row tm-welcome-row-2">
                        <div class="col-12">
                            <h2 class="tm-section-header tm-section-header-small mb-4">Our Background and Environment</h2>
                        </div>
                        <div class="col-md-6">
                            <div class="tm-about-1">
                                <img src={CompanyImg1} alt="Image" class="img-fluid mb-5"></img>
                                <p class="tm-article-text">Phasellus blandit tortor vel odio hendrerit, eleifend ultricies odio temport. Etiam euismod, lectus convallis efficitur convallis, risus orci auctor orci.</p>
                                <p>Cras imperdiet in ligula sit amet fringilla. Morbi posuere mattis ornare. Nunc iaculis porta ipsum. Aliquam vehicula egestas diam auctor ornare.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="tm-about-1">
                                <img src={CompanyImg2} alt="Image" class="img-fluid mb-5"></img>
                                <p class="tm-article-text">Quisque sed tortor sed metus vehicula pulvinar vel dictum tortor. Nivamus eu posuere arcu. Vivamus vel urna id mi congue convallis at sed augue.</p>
                                <p>Praesent venenatis risus aliquet semper porta. Maecenas mollis nisi non hendrerit finibus. Ut eu convallis massa. Sed imperdiet arcu non egestas elementum.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="tm-featured">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="tm-section-header tm-section-header-small mb-3">Our Team Members</h2>
                        </div>
                    </div>

                    {/* <!-- Carousel --> */}
                    <div class="grid tm-carousel">
                        <figure class="effect-zoe">
                            <img src={CompanyImg3} alt="Featured Item"></img>
                            <figcaption>
                                <h2>John Stone</h2>
                                <p class="icon-links">
                                    <a href="https://fb.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                        <figure class="effect-zoe">
                            <img src={CompanyImg4} alt="Featured Item"></img>
                            <figcaption>
                                <h2>Jane Meldrum</h2>
                                <p class="icon-links">
                                    <a href="https://fb.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                        <figure class="effect-zoe">
                            <img src={CompanyImg5} alt="Featured Item"></img>
                            <figcaption>
                                <h2>Trevor Virtue</h2>
                                <p class="icon-links">
                                    <a href="https://fb.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                        <figure class="effect-zoe">
                            <img src={CompanyImg6} alt="Featured Item"></img>
                            <figcaption>
                                <h2>Emily Moore</h2>
                                <p class="icon-links">
                                    <a href="https://fb.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                        <figure class="effect-zoe">
                            <img src={CompanyImg7} alt="Featured Item" />
                            <figcaption>
                                <h2>Claire Li</h2>
                                <p class="icon-links">
                                    <a href="https://fb.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                        <figure class="effect-zoe">
                            <img src={CompanyImg8} alt="Featured Item" />
                            <figcaption>
                                <h2>Elisabeth Shu</h2>
                                <p class="icon-links">
                                    <a href="https://fb.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                        <figure class="effect-zoe">
                            <img src={CompanyImg9} alt="Featured Item" />
                            <figcaption>
                                <h2>Dania Liu</h2>
                                <p class="icon-links">
                                    <a href="https://fb.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                        <figure class="effect-zoe">
                            <img src={CompanyImg10} alt="Featured Item" />
                            <figcaption>
                                <h2>Miracle Yang</h2>
                                <p class="icon-links">
                                    <a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    );
}