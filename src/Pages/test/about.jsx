import React, { lazy } from 'react'

// Libraries
import { Link } from 'react-router-dom';
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'
import { m } from "framer-motion";

// Components
import Header, { HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from '../../Components/Header/Header';
import Services from '../../Components/Services/Services';
import CustomModal from '../../Components/CustomModal'
import Buttons from '../../Components/Button/Buttons'
import TextBox from '../../Components/TextBox/TextBox';
import { fadeIn } from '../../Functions/GlobalAnimations';
import Overlap from '../../Components/Overlap/Overlap';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Clients from '../../Components/Clients/Clients';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import Videos from "../../Components/Videos/Videos";
import SideButtons from "../../Components/SideButtons";

// Data
import { TextBoxData02 } from '../../Components/TextBox/TextBoxData';
import { TestimonialsData01 } from '../../Components/Testimonials/TestimonialsData';
import TestimonialsCarousel02 from '../../Components/TestimonialCarousel/TestimonialsCarousel02';
import { TestimonialsCarouselData2 } from '../../Components/TestimonialCarousel/TestimonialsCarouselData';

const IconWithText = lazy(() => import('../../Components/IconWithText/IconWithText'))

const IconWithTextData_01 = [
    {
        icon: "line-icon-Life-Safer text-[35px]",
        title: "Daily training workshops",
        content: "Lorem ipsum is a simply text the printing industry typeing industry dummy book."
    },
    {
        icon: "line-icon-Paper-Plane text-[35px]",
        title: "Make ideas happen",
        content: "Lorem ipsum is a simply text the printing industry typeing industry dummy book."
    },
    {
        icon: "line-icon-Shield text-[35px]",
        title: "Strengthen your skills",
        content: "Lorem ipsum is a simply text the printing industry typeing industry dummy book."
    },
]
const IconWithTextData_02 = [
    {
        icon: "line-icon-Crown",
        title: "Cutting edge solutions",
        content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text printing and typesetting."
    },
    {
        icon: "line-icon-Cube-Molecule",
        title: "Fresh technology trends ",
        content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text printing and typesetting."
    },
    {
        icon: "line-icon-Sand-watch2",
        title: "Fresh technology trends",
        content: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text printing and typesetting."
    },
    {
        icon: "line-icon-Gear-2",
        title: "Advanced customization options",
        content: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text."
    },
]

const serviceData = [
    {
        img: "https://via.placeholder.com/800x560",
        title: "Real time analytics",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        img: "https://via.placeholder.com/800x560",
        title: "Google advertising",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
        img: "https://via.placeholder.com/800x560",
        title: "Pixel perfect design",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
]

const ClientData = [
    {
        img: 'https://via.placeholder.com/225x110',
        target: "_self",
        link: '#'
    },

    {
        img: 'https://via.placeholder.com/225x110',
        target: "_self",
        link: '#'
    },
    {
        img: 'https://via.placeholder.com/225x110',
        target: "_self",
        link: '#'
    },
    {
        img: 'https://via.placeholder.com/225x110',
        target: "_self",
        link: '#'
    },
]
const WhoWeArePage = (props) => {
    return (
        <div className="who-we-are" style={props.style}>
            {/* Header Start */}
            <Header topSpace={{ md: true }} type="reverse-scroll">
                <HeaderNav fluid="fluid" theme="dark" expand="lg" className="px-[35px] py-[0px] md:px-0" containerClass="sm:px-0">
                    <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                        <Link aria-label="header logo" className="flex items-center" to="/">
                            <Navbar.Brand className="inline-block p-0 m-0">
                                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-white.webp' data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-fast-blue-black.webp' data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                            </Navbar.Brand>
                        </Link>
                    </Col>
                    <div className="col-auto hidden order-last md:block">
                        <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </Navbar.Toggle>
                    </div>
                    <Navbar.Collapse className="col-auto px-0 justify-end">
                        <Menu {...props} />
                    </Navbar.Collapse>
                    <Col className="col-auto text-right pe-0">
                        <SearchBar className="pr-0" />
                        <HeaderLanguage />
                        <HeaderCart />
                    </Col>
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />

            {/* Parallax Scrolling Start */}
            <div className="h-[660px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] overflow-hidden relative">
                <Parallax className="lg-no-parallax h-[100vh] w-full bg-cover bg-top cover-background absolute top-[0px] left-0 lg:h-[700px] lg:-top-[100px] md:h-[650px] sm:h-[550px] xs:h-[420px] xs:-top-[70px]" translateY={[-40, 40]} style={{ backgroundImage: `url('/images/services/main-banner.jpg')` }}></Parallax>
                <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-darkgray"></div>
                <Container className="h-full relative xs:px-[15px]">
                    <Row className="justify-center h-full">
                        <Col xl={6} lg={7} md={8} className="relative font-serif text-center text-white flex justify-center flex-col">
                            <h1 className="opacity-60 mb-[20px] text-xmd leading-[20px]">Our Services</h1>
                            <h2 className="font-medium -tracking-[1px] mb-0">we are a creative design studio</h2>
                        </Col>
                        <scrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block -translate-x-1/2 cursor-pointer">
                            <i className="ti-arrow-down text-lg leading-none text-white bg-[rgba(0,0,0,0.3)] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
                        </scrollTo>
                    </Row>
                </Container>
            </div>
            {/* Parallax Scrolling End */}

            {/* section Start */}
            <section id="about" className="bg-white py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
                <Container>
                    <Row className="font-serif">
                        <Col lg={4} className="pe-lg-0 flex md:mb-[30px]">
                            <div className="w-full md:h-[700px] sm:h-[550px] xs:h-[450px] cover-background" style={{ backgroundImage: "url('https://via.placeholder.com/800x1000') " }}></div>
                        </Col>
                        <Col lg={4} md={6} className="ps-lg-0 flex items-center sm:mb-[30px]">
                            <div className="justify-center h-full w-full flex flex-col items-start bg-[#C89965] px-[5.5rem] lg:px-[3rem] md:p-16">
                                <span className="text-xlg lg:text-lg lg:leading-[26px] font-medium text-white mb-[20px] block">We started this company 10 years ago out of a desire to design and build amazing things.</span>
                                <p className="text-white font-sans opacity-70 mb-[20px] xs:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typeing industry. Lorem ipsum has been the industry's standard dummy text ever since text.</p>
                                <Buttons href="/page/our-services" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-[#fff] hover:text-[#fff]" color="#fff" title="Company overview" />
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="flex flex-col pr-0">
                            <img src="https://via.placeholder.com/800x600" alt="about us" className="sm:w-full" />
                            <div className="bg-white px-[3.5rem] py-[3rem] h-full lg:p-8 sm:p-16">
                                <span className="text-darkgray font-medium mb-[10px] block">About digital agency</span>
                                <p className="font-sans">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* section End */}

            {/* Section Start */}
            {/* <m.section className="pt-[130px] lg:pt-[90px] md:pt-[75px] xs:pt-[50px] overflow-hidden" {...fadeIn}>
                <Container>
                    <Row className="items-center">
                        <Col xl={5} lg={6} className="pb-12 lg:pb-28 sm:pb-[50px]">
                            <div className="text-xmd mb-[20px] font-serif">Browse amazing social media features</div>
                            <h5 className="font-serif text-darkgray font-medium mb-[5.5rem]">We offer a full range of digital marketing services!</h5>
                            <Row>
                                <Col>
                                    <div className="flex">
                                        <div className="mr-[35px]">
                                            <i className="line-icon-Idea-5 text-[50px] text-[#C89965]"></i>
                                        </div>
                                        <div className="feature-box-content ">
                                            <span className="text-darkgray block mb-[10px] font-serif font-medium">Daily workshops</span>
                                            <p className="w-[95%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-12"><div className="h-[1px] bg-[#ededed] my-[40px] w-full xs:my-[30px]"></div></Col>
                                <Col>
                                    <div className="flex">
                                        <div className="mr-[35px]">
                                            <i className="line-icon-Medal-2 text-[50px] text-[#C89965]"></i>
                                        </div>
                                        <div className="feature-box-content ">
                                            <span className="text-darkgray block mb-[10px] font-serif font-medium">Unlimited layouts and styles</span>
                                            <p className="w-[95%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} xl={{ offset: 1 }} className="align-self-end text-center text-xl-start">
                            <img className="md:mx-auto" loading="lazy" src="https://via.placeholder.com/504x666" width="504" height="666" alt="who-we-are" />
                        </Col>
                    </Row>
                </Container>
            </m.section> */}
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[130px] bg-[#F8F2EB] md:py-[90px] sm:py-[75px] xs:py-[50px] overflow-hidden">
                <Container>
                    <Services grid="row-cols-1 row-cols-lg-3 row-cols-md-2 gap-y-10 justify-center" theme='service-style-03' data={serviceData} animation={fadeIn} />
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="pt-[130px] lg:pt-[90px] md:pt-[75px] sm:py-[50px]" {...fadeIn}>
                <Container fluid>
                    <Row className="justify-center">
                        <Col>
                            <img loading="lazy" className="mx-auto" src="https://via.placeholder.com/1490x550" alt="who-we-are" width="1490" height="550" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}

            {/* Section Start */}
            <section className="py-[80px] sm:py-[50px] overflow-hidden">
                <Container>
                    <Row>
                        <h6 className="font-serif text-gray-900 text-center font-medium mb-24 xs:mb-16"> Why Choose Us? </h6>
                    </Row>
                    <Row className="justify-center">
                        <Col lg={11} xs={9} className="lg:px-0">
                            <IconWithText
                                grid="row-cols-1 row-cols-lg-2 gap-y-[30px]"
                                theme="icon-with-text-02 who-we-are-icon-with-text-02"
                                className=""
                                data={IconWithTextData_02}
                                animation={fadeIn}
                                animationDelay={0.2} />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section End */}


            {/*Section Start */}
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-[#EEE7DE]" {...fadeIn}>
                <h6 className="font-serif text-gray-900 text-center font-medium mb-24 xs:mb-16"> Testimonials carousel style 02 </h6>
                <Container>
                    <Row>
                        <TestimonialsCarousel02
                            className="slider-nav-style-01 slider-nav-dark black-move"
                            title="Proud"
                            subtitle="stories"
                            data={TestimonialsCarouselData2}
                            carouselOption={{
                                slidesPerView: 1,
                                loop: true,
                                navigation: true,
                                autoplay: { delay: 2500, disableOnInteraction: false },
                            }}
                        />
                    </Row>
                </Container>
            </m.section>
            {/*Section End */}

            {/* Section start */}
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
                <Container>
                    <Row className="justify-center text-center font-serif font-medium text-darkgray">
                        <Col xl={7} lg={8} md={10}>
                            <span className="tracking-[2px] uppercase opacity-50 block mb-[30px] md:mb-[20px]">yoga enhances your life</span>
                            <h2 className="-tracking-[2px] mb-[50px] md:mb-[40px] xs:w-[98%] xs:mx-auto">Yoga is the journey of the self through the self</h2>
                            <Buttons ariaLabel="button link" href="#" className="font-medium font-serif tracking-[1px] uppercase rounded-sm !leading-[1.7]" themeColor={["#C89965", "#C89965"]} size="lg" color="#fff" title="Contact Us" />
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

            {/* Footer Start */}
            <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue overflow-visible" />
            {/* Footer End */}
        </div>
    )
}

export default WhoWeArePage