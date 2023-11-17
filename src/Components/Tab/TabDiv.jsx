import React, { memo } from 'react'

// Libraries
import { Col } from 'react-bootstrap'
import { PropTypes } from "prop-types";

// Components
import Buttons from '../Button/Buttons'
import { fadeIn } from "../../Functions/GlobalAnimations";

// Data
import { TabData01 } from './TabData'

const TabDiv = ({ item, reverse }) => {
    return (
        <div className={`flex items-center ${reverse ? 'flex-row-reverse' : ''}`} {...{ ...fadeIn, transition: { duration: 0.9 }, viewport: { once: false } }}>
            <Col md={6} className="sm:mb-[40px]">
                {item.img && <img height="434" width="555" className="w-full" src={item.img} alt="tab" />}
            </Col>
            <Col lg={{ offset: 1, span: 5 }} md={6} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center">
                {item.subtitle && <span className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] font-serif text-md font-medium uppercase inline-block leading-[20px]">{item.subtitle}</span>}
                {item.title && <h5 className="font-serif font-semibold text-darkgray tracking-[-0.5px] mb-[35px] sm:mb-[30px]">{item.title}</h5>}
                {item.content && <p className="mb-[45px] w-[85%] md:w-full xs:mb-[15px]">{item.content}</p>}
                {(item.buttonLink && item.buttonTitle) && <Buttons ariaLabel="tab button" className="btn-fill rounded-none font-medium font-serif tracking-[1px] uppercase btn-fancy md:mb-[15px] xs:mb-0 xs:mt-[20px]" size="md" themeColor="#232323" color="#ffffff" to={item.buttonLink ? item.buttonLink : "#"} title={item.buttonTitle} />}
            </Col>
        </div>
    );
};

TabDiv.defaultProps = {
    item: TabData01[0],
    reverse: false,
}

TabDiv.propTypes = {
    item: PropTypes.exact({
        tabTitle: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string,
        img: PropTypes.string,
        content: PropTypes.string,
        buttonLink: PropTypes.string,
        buttonTitle: PropTypes.string,
        tabicons: PropTypes.string
    }),
    reverse: PropTypes.bool,
}


export default memo(TabDiv)