import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './CustomNavbar.css';

const CustomNavbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const handleNavClick = (section: string) => {
        if (!isHomePage) {
            navigate(`/#${section}`);
            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop,
                        behavior: 'auto'
                    });
                }
            }, 100);
        } else {
            const element = document.getElementById(section);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'auto'
                });
            }
        }

        // 모바일 모드에서 메뉴 클릭 시 네비게이션 셀렉트바 닫기
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show') && navbarToggler) {
            (navbarToggler as HTMLElement).click(); // 토글 버튼을 클릭해서 자동으로 닫히도록 처리
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand onClick={() => handleNavClick('home')}>LDH Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => handleNavClick('home')}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('about')}>About</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('skills')}>Skills</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
                    <Nav.Link onClick={() => handleNavClick('career')}>Career</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
