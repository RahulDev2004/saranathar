import React, { lazy } from 'react'

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
import Tab01 from '../../Components/Tab/Tab01'
import Counter from '../../Components/Counters/Counter'
import Team from '../../Components/Team/Team';
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import SideButtons from "../../Components/SideButtons";
// Data
import { CounterData01 } from '../../Components/Counters/CounterData';
import { TeamData02, TeamData01 } from '../../Components/Team/TeamData';
import CustomModal from '../../Components/CustomModal';


const TabData = [
  {
    tabTitle: '01. SHEET WORK',
    subtitle: 'Our Sheet Work',
    title: 'We are experts of sheet work',
    img: '/assets/img/gallery/sheetwork.png',
    content: 'We create a wide range of services in sheet works. We make various products ranging from statues to doorsteps. ',
    buttonTitle: "Contact Us",
    buttonLink: "#"
  },
  {
    tabTitle: '02. STATUE WORK',
    subtitle: 'Our Statue Works',
    title: 'We make brilliant statue works',
    img: '/assets/img/gallery/statuework.png',
    content: 'We are experiences professionals in statue works. With years of experience in the field of statue works, we make the perfect statue works for all your needs',
    buttonTitle: "Contact Us",
    buttonLink: "#"
  },
  {
    tabTitle: '03. GOLD WORK',
    subtitle: 'Our Gold Works ',
    title: 'Experience the brilliance of gold work',
    img: '/assets/img/gallery/goldwork.png',
    content: 'We have experienced professional in Gold Works. With over a decade of experience in gold work, all the works that we make become masterpieces',
    buttonTitle: "Contact Us",
    buttonLink: "#",
  }
]

const IconWithTextData = [
  {
    title: "Powerfull Theme Options ",
    content: "Lorem ipsum is simply text of the printing and typesetting industry lorem ipsum has standard text",
    icon: "line-icon-Navigation-LeftWindow text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]"
  },
  {
    title: "No coding required ",
    content: "Lorem ipsum is simply text of the printing and typesetting industry lorem ipsum has standard text",
    icon: "line-icon-Cursor-Click2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]"
  },
  {
    title: "Easy to customize ",
    content: "Lorem ipsum is simply text of the printing and typesetting industry lorem ipsum has standard text",
    icon: "line-icon-Like-2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]"
  },
  {
    title: "Customer satisfaction ",
    content: "Lorem ipsum is simply text of the printing and typesetting industry lorem ipsum has standard text",
    icon: "line-icon-Talk-Man text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]"
  },
  {
    title: "Huge icon collection ",
    content: "Lorem ipsum is simply text of the printing and typesetting industry lorem ipsum has standard text",
    icon: "line-icon-Heart text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]"
  },
  {
    title: "Advanced customization",
    content: "Lorem ipsum is simply text of the printing and typesetting industry lorem ipsum has standard text",
    icon: "line-icon-Gear-2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] via[#f767a6] to-[#ff798e]"
  },
]

const Gallery = (props) => {

  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav theme="light" expand="lg" className="py-[0px] border-b !border-b-[#0000001a] lg:px-[15px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
            <Navbar.Brand className="inline-block p-0 m-0 ">
                {/* <img className="default-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-yellow-ochre.webp' data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-yellow-ochre.webp' data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src='/assets/img/webp/logo-yellow-ochre.webp' data-rjs='/assets/img/webp/logo-yellow-ochre@2x.webp' alt='logo' /> */}
                <p className='h-full font-serif font-bold items-center'>Saranathar Creations</p>
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
        <Parallax className="lg-no-parallax h-[100vh] w-full bg-cover bg-top cover-background absolute top-[0px] left-0 lg:h-[700px] lg:-top-[100px] md:h-[650px] bg-[#C89965] sm:h-[550px] xs:h-[420px] xs:-top-[70px]" translateY={[-40, 40]} ></Parallax>
        {/* <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-darkgray"></div> */}
        <Container className="h-full relative xs:px-[15px]">
          <Row className="justify-center h-full">
            <Col xl={6} lg={7} md={8} className="relative font-serif text-center text-white flex justify-center flex-col">
              <h1 className="opacity-60 mb-[20px] text-xmd leading-[20px]">Our Works</h1>
              <h2 className="font-medium -tracking-[1px] mb-0">Explore Our Masterpieces</h2>
            </Col>
            <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block -translate-x-1/2 cursor-pointer">
              <i className="ti-arrow-down text-lg leading-none text-white bg-[rgba(0,0,0,0.7)] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          </Row>
        </Container>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <m.section id="about" className="py-[130px] lg:py-[95px] md:py-[75px] sm:py-[50px] overflow-hidden" {...fadeIn}>
        <Container>
          <Row className="items-center">
            <Col md={6} className="relative sm:mb-[30px]">
              <img src="/assets/img/gallery/gallery.png" className="rounded-[5px] w-full" height="564" width="390" alt="what-we-offers" />
           {/* Modal Component Start */}
              {/* <CustomModal.Wrapper
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                modalBtn={<Buttons type="submit" className="btn-sonar border-0" themeColor={["#b27cfd", "#ff9393"]} color="#fff" size="lg" title={<i className="icon-control-play" />} />} >
                {/* <div className="w-[1020px] max-w-full relative rounded mx-auto">
                 <div className="fit-video">
                    <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                  </div>
                </div> 
              </CustomModal.Wrapper> */}
              {/* Modal Component End */}

            </Col>
            <Col lg={{ span: 5, offset: 1 }} md={6} >
              <h5 className="font-serif font-medium text-darkgray w-[90%]">Journey Through Divine Artistry</h5>
              <p className="w-[85%] mb-[25px] lg:w-[90%]">Explore our gallery, where every image tells a story of craftsmanship, devotion, and timeless beauty.</p>
              <div className="mt-[15px] sm:mt-0 inline-block">
                <Buttons to="/page/who-we-are" className="mr-[24px] font-medium rounded-none font-serif uppercase hover:text-darkgray btn-slide-filling-right bg-gradient-to-r from-darkgray to-darkgray sm:mr-[20px] xs:mr-[8px]" size="md" color="#fff" themeColor="#fff" title="Contact Us" />
                <Buttons to="/page/about-us" className="font-medium rounded-none font-serif uppercase hover:text-white bg-transparent btn-slide-right" size="md" color="#232323" themeColor="#232323" title="View Gallery" />
              </div>
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}

      {/* Section Start */}
      <m.section className="bg-[#f8f2eb] py-[130px] lg:py-[95px] md:py-[75px] sm:py-[50px] overflow-hidden" {...fadeIn}>
        <Container>
          <Row className="items-center">
            <Col md={5} className="sm:mb-[30px]">
              <h5 className="font-serif font-medium text-darkgray mb-0">Gallery in Numbers</h5>
            </Col>
            <Col lg={{ span: 6, offset: 1 }} md={7}>
              <Counter
                as="h5"
                theme="counter-style-01"
                grid="row-cols-1 row-cols-md-2 row-cols-sm-2 gap-y-10"
                className="text-black"
                duration={7}
                data={CounterData01.slice(0, 2)}
                postfix_sign="+" />
            </Col>
            <Col>
              <div className="w-full h-[1px] bg-mediumgray mt-28 mb-32 sm:my-20"></div>
            </Col>
          </Row>
          <Row className="justify-center">
            <Col lg={11}>
              <Tab01 data={TabData} />
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}

      <Container className="pt-[160px] lg:pt-[120px] md:pt-[95px] sm:pt-[80px] xs:pt-[50px]">
        <Row className="justify-center ">
          <Col md={6} className="text-center mb-10">
            <span className="font-serif mb-[5px] inline-block uppercase font-medium text-spanishgray">Our Works</span>
            <h5 className="font-serif text-darkgray font-medium">Explore Our Masterpieces</h5>
          </Col>
        </Row>
        <Row>
          <section className="pb-[160px] lg:pb-[120px] md:pb-[95px] sm:pb-[80px] xs:pb-[50px]">
            <Container>
              <Team
                themeColor="dark"
                theme='team-style-01'
                color={[""]}
                data={TeamData01}
                animation={fadeIn}
                carousel={true}
                carouselOption={{ slidesPerView: 1, spaceBetween: 30, loop: true, navigation: false, autoplay: { delay: 3000, disableOnInteraction: false }, pagination: { dynamicBullets: true, clickable: true }, breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 } } }} />
            </Container>
          </section>
        </Row>
      </Container>
      {/* Parallax Scrolling Start */}
      <div className="h-[600px] md:h-[450px] sm:h-[350px] bg-top overflow-hidden relative">
        <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 md:-top-[30px] w-full h-[100vh]" translateY={[-50, 50]} style={{ backgroundImage: `url(https://via.placeholder.com/1920x1100)` }}></Parallax>
      </div>
      {/* Parallax Scrolling End */}

      {/* Section Start */}
      <m.section className="pb-[130px] lg:pb-[95px] md:pb-[75px] sm:py-[50px]" {...fadeIn}>
        <Container className='mt-[60px]'>
          <Row className="justify-center">
            <Col md={6} className="text-center mb-10">
              <span className="font-serif mb-[5px] inline-block uppercase font-medium text-spanishgray">Meet our team</span>
              <h5 className="font-serif text-darkgray font-medium">Creative People</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <Team
                themeColor="dark"
                theme='team-style-02'
                className="text-white sm:justify-center"
                overlay={["#353535", "#D7D7D7"]}
                data={TeamData02}
                grid="row-cols-1 row-cols-sm-2 row-cols-md-3 gap-y-10"
                animation={fadeIn}
                carousel={false}
                carouselOption={{ slidesPerView: 3, spaceBetween: 30, loop: true, navigation: false, autoplay: { delay: 3000, disableOnInteraction: false }, pagination: { dynamicBullets: false, clickable: true } }} />
            </Col>
          </Row>
        </Container>
      </m.section>
      {/* Section End */}






      {/* Section Start */}
      <FooterStyle01 theme="dark" className="bg-[#262b35] text-slateblue overflow-visible" />
      {/* Section End */}
    </div>
  )
}

export default Gallery