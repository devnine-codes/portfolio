import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
var CustomNavbar = function () {
    var location = useLocation();
    var navigate = useNavigate();
    var isHomePage = location.pathname === '/';
    var handleNavClick = function (section) {
        if (!isHomePage) {
            navigate("/#".concat(section));
            setTimeout(function () {
                var element = document.getElementById(section);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop,
                        behavior: 'auto'
                    });
                }
            }, 100);
        }
        else {
            var element = document.getElementById(section);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'auto'
                });
            }
        }
    };
    return (_jsxs(Navbar, { bg: "dark", variant: "dark", expand: "lg", fixed: "top", children: [_jsx(LinkContainer, { to: "/", children: _jsx(Navbar.Brand, { children: "My Portfolio" }) }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: _jsxs(Nav, { className: "ml-auto", children: [_jsx(Nav.Link, { onClick: function () { return handleNavClick('home'); }, children: "Home" }), _jsx(Nav.Link, { onClick: function () { return handleNavClick('about'); }, children: "About" }), _jsx(Nav.Link, { onClick: function () { return handleNavClick('skills'); }, children: "Skills" }), _jsx(Nav.Link, { onClick: function () { return handleNavClick('projects'); }, children: "Projects" }), _jsx(Nav.Link, { onClick: function () { return handleNavClick('contact'); }, children: "Contact" })] }) })] }));
};
export default CustomNavbar;
