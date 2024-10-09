var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from 'react-slick';
import './ProjectCarousel.css';
var ProjectCarousel = function (_a) {
    var images = _a.images;
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (_jsx("div", { className: "carousel-container", children: _jsx(Slider, __assign({}, settings, { children: images.map(function (image, index) { return (_jsxs("div", { className: "carousel-slide", children: [_jsx("img", { src: image, alt: "Project slide ".concat(index + 1), className: "carousel-image" }), _jsxs("div", { className: "slide-number", children: [index + 1, " / ", images.length] })] }, index)); }) })) }));
};
export default ProjectCarousel;
