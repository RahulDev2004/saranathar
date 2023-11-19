import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Parallax } from 'react-scroll-parallax';
import { m } from "framer-motion";
import { Link as ScrollTo } from "react-scroll"

// Components
import { Header, HeaderCart, HeaderLanguage, HeaderNav, Menu, SearchBar } from "../../Components/Header/Header";
import { fadeIn } from '../../Functions/GlobalAnimations';
import Buttons from '../../Components/Button/Buttons'
import Lists from '../../Components/Lists/Lists';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import CustomModal from '../../Components/CustomModal'
import SideButtons from "../../Components/SideButtons";
// Data
import { ListData03, ListData09 } from '../../Components/Lists/ListsData';
import Services from '../../Components/Services/Services';
import { serviceData1 } from '../../Components/Services/ServicesData';
import ImageGallery from '../../Components/ImageGallery/ImageGallery';
import { imageGalleryData02, imageGalleryDataServices } from '../../Components/ImageGallery/ImageGalleryData';
import InteractiveBanners14 from '../../Components/InteractiveBanners/InteractiveBanners14';

const WhatWeOfferPage = (props) => {

    return (
        <div style={props.style} className='bg-[#FFF]'>
            {/* Header Start */}
            <Header topSpace={{ md: true }} type="reverse-scroll">
                <HeaderNav theme="light" expand="lg" className="py-[0px] border-b !border-b-[#0000001a] lg:px-[15px] md:px-0" containerClass="sm:px-0">
                    <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                        <Link aria-label="header logo" className="flex items-center" to="/">
                            <Navbar.Brand className="inline-block p-0 m-0">
                                <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-black.webp' data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
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
                    {/* <Col className="col-auto text-right pe-0">
                        <SearchBar className="pr-0 xs:pl-[15px]" />
                        <HeaderLanguage className="xs:pl-[15px]" />
                        <HeaderCart className="xs:pl-[15px]" style={{ "--base-color": "#0038e3" }} />
                    </Col> */}
                </HeaderNav>
            </Header>
            {/* Header End */}
            <SideButtons />
            {/* Parallax Scrolling Start */}
            <div className="h-[660px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] overflow-hidden relative">
                <Parallax className="lg-no-parallax h-[100vh] w-full bg-cover bg-top cover-background absolute top-[0px] bg-[#C89965] left-0 lg:h-[700px] lg:-top-[100px] md:h-[650px] sm:h-[550px] xs:h-[420px] xs:-top-[70px]" translateY={[-40, 40]} ></Parallax>
                {/* <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-darkgray"></div> */}
                <Container className="h-full relative xs:px-[15px]">
                    <Row className="justify-center h-full">
                        <Col xl={6} lg={7} md={8} className="relative font-serif text-center text-white flex justify-center flex-col">
                            <h1 className="opacity-60 mb-[20px] text-xmd leading-[20px]">Our Services</h1>
                            <h2 className="font-medium -tracking-[1px] mb-0">Our Comprehensive Services</h2>
                        </Col>
                        <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block -translate-x-1/2 cursor-pointer">
                            <i className="ti-arrow-down text-lg leading-none text-white bg-[rgba(0,0,0,0.3)] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
                        </ScrollTo>
                    </Row>
                </Container>
            </div>
            {/* Parallax Scrolling End */}

            {/* Section Start */}
            <m.section id="about" className="py-[130px] lg:py-[95px] md:py-[75px] sm:py-[50px] overflow-hidden bg-[#F8F2EB]" {...fadeIn}>
                <Container>
                    <Row className="items-center">
                        <Col md={6} className="relative sm:mb-[30px]">
                            <img src="/assets/img/gallery/service2.png" className="rounded-[5px] w-full" height="564" width="390" alt="what-we-offers" />
                        </Col>
                        <Col lg={{ span: 5, offset: 1 }} md={6} >
                            <h5 className="font-serif font-medium text-darkgray w-[90%]">A Symphony of Tradition and Craft</h5>
                            <p className="w-[85%] mb-[25px] lg:w-[90%]">Explore our comprehensive range of services that blend tradition, craftsmanship, and devotion. From intricate goldwork to elegant silver detailing, we specialize in transforming sacred spaces into timeless masterpieces.</p>
                            <div className="mt-[15px] sm:mt-0 inline-block">
                                <Buttons to="/page/who-we-are" className="mr-[24px] font-medium rounded-none font-serif uppercase hover:text-[#333045] btn-slide-filling-right bg-gradient-to-r from-[#333045] to-[#333045] sm:mr-[20px] xs:mr-[8px]" size="md" color="#fff" themeColor="#fff" title="Contact us" />
                                <Buttons to="/page/about-us" className="font-medium rounded-none font-serif uppercase hover:text-white bg-transparent btn-slide-right" size="md" color="#333045" themeColor="#333045" title="Explore More" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}

            {/* Section Start */}
            {/* <section className="py-[130px] lg:py-[95px] md:py-[75px] sm:py-[50px] xs:px-[15px] bg-lightgray">
                <Container>
                    <IconWithText
                        grid="row-cols-1 row-cols-lg-3 row-cols-sm-2"
                        theme="icon-with-text-10"
                        data={IconWithTextData}
                        animation={fadeIn}
                        animationDelay={0.1} />
                </Container>
            </section> */}
            {/* Section End */}

            {/* Section Start */}
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
                <Container>
                    <Row className="justify-center">
                        <m.div className="col-lg-5 col-ms-6 text-center mb-16 md:mb-12" {...fadeIn}>
                            <span className="font-serif font-semibold text-medium text-[#c89965] text-md uppercase tracking-[1px] block mb-[10px]">Our Services</span>
                            <h3 className="heading-5 font-serif font-medium text-[#333045] -tracking-[1px]">What Do We Offer?</h3>
                        </m.div>
                    </Row>
                    <Services grid="row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-10 justify-center text-center" theme='service-style-01' className="" data={serviceData1} animation={fadeIn} />
                </Container>
            </m.section>
            {/* Section End */}

            {/* Section Start */}
            {/* About Section Start */}
            <section className="py-[130px] overflow-hidden lg:py-[90px] md:py-[75px] sm:py-[50px]">
                <Container>
                    <Row className="mb-36 md:mb-16 sm:mb-20">
                        <m.div className="col-lg-4 col-md-7 md:mb-[60px] sm:mb-[20px]" {...{ ...fadeIn, transition: { delay: 0.2 } }}>
                            <i className="line-icon-Plates text-[40px] mb-[35px] inline-block"></i>
                            <span className="font-serif font-semibold text-md text-[#c89965] uppercase block mb-[20px] tracking-[1px]">Our Craftsmanship</span>
                            <h2 className="heading-5 font-serif font-medium text-[#333045] mb-0">We Provide The Best Service in the Industry</h2>
                        </m.div>
                        <m.div className="col-lg-5 col-xl-4 col-md-6 md:mb-[30px] sm:mb-[50px]" {...fadeIn}>
                            <span className="font-serif font-medium text-darkgray block mb-[25px] lg:w-[95%] sm:w-full sm:mb-[15px]">With over 15 years of experience, we provide the best service in the industry</span>
                            <p className="lg:w-[95%] sm:mb-[15px] mb-[20px]">We have worked in 40 of the 108 divyadesam. In the realm of divine craftsmanship, our commitment to excellence transcends the ordinary</p>
                            <Buttons aria-label="link for about" href="#" className="font-serif uppercase btn-link after:h-[1px] leading-[28px] font-semibold md:text-md md:mb-[15px] after:bg-darkgray hover:text-darkgray" color="#232323" title="Explore resort" />
                        </m.div>
                        <m.div className="col-lg-3 col-md-6 offset-xl-1" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                            <Lists theme="list-style-03" data={ListData09} animation={fadeIn} />
                        </m.div>
                    </Row>
                    <InteractiveBanners14 animation={fadeIn} grid="row-cols-1 row-cols-lg-3 row-cols-md-2 gx-4 gap-y-10" className="justify-center" />
                </Container>
            </section>
            {/* About Section End */}
            {/* Section End */}

            {/* section start */}
            <section className="bg-[#EEE7DE] border-bottom border-color-extra-light-gray px-[10%] lg:px-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
                <Container fluid>
                    <Row className="justify-center">
                        <m.div className="col-lg-5 col-ms-6 text-center mb-16 md:mb-12" {...fadeIn}>
                            <span className="font-serif font-semibold text-medium text-[#c89965] text-md uppercase tracking-[1px] block mb-[10px]">Our Excellence</span>
                            <h3 className="heading-5 font-serif font-medium text-[#333045] -tracking-[1px]">The Results of Our Excellence</h3>
                        </m.div>
                    </Row>
                    <Row>
                        <ImageGallery theme="image-gallery-02" grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large" data={imageGalleryDataServices} overlay={["#595767", "#38364A"]} animation={fadeIn} />
                    </Row>
                </Container>
            </section>
            {/* section end */}



            {/* Parallax Scrolling End */}

            {/* Section Start */}
            <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden" {...fadeIn}>
                <Container>
                    <Row className="justify-center text-center font-serif font-medium text-darkgray">
                        <Col xl={7} lg={8} md={10}>
                            <span className="tracking-[2px] uppercase opacity-50 block mb-[30px] md:mb-[20px]">CRAFTING ELEGANCE!</span>
                            <h2 className="-tracking-[2px] mb-[50px] md:mb-[40px] xs:w-[98%] xs:mx-auto">Contact Us to Elevate Your Temple's Aura Now</h2>
                            <Buttons ariaLabel="button link" href="#" className="font-medium font-serif tracking-[1px] uppercase rounded-sm !leading-[1.7]" themeColor={["#C89965", "#C89965"]} size="lg" color="#fff" title="Contact Us" />
                        </Col>
                    </Row>
                </Container>
            </m.section>
            {/* Section End */}
            {/* Parallax Scrolling Start */}
            <div className="h-[600px] md:h-[450px] sm:h-[350px] bg-top overflow-hidden relative">
                <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-50, 50]} style={{ backgroundImage: `url(/assets/img/gallery/paralex3.png)` }}></Parallax>
            </div>
            {/* Section Start */}
            <FooterStyle01 theme="dark" className="bg-[#333045] overflow-visible" />
            {/* Section End */}
        </div >
    )
}

export default WhatWeOfferPage