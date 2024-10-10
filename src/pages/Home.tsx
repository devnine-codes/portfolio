import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link as ScrollLink, Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faMapMarkerAlt, faPhone, faEnvelope, faGraduationCap, faCode, faServer, faDatabase, faTools, faDesktop, faBriefcase, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import ProjectCarousel from '../components/ProjectCarousel';
import './Home.css';
import {LinkContainer} from "react-router-bootstrap";

const Home: React.FC<{ section?: string }> = ({ section }) => {
  const location = useLocation();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [location, section]);

  const project1Images = [
    process.env.PUBLIC_URL + "/images/project1-1.jpg",
    process.env.PUBLIC_URL + "/images/project1-2.jpg",
    process.env.PUBLIC_URL + "/images/project1-3.jpg",
    process.env.PUBLIC_URL + "/images/project1-4.jpg",
    process.env.PUBLIC_URL + "/images/project1-5.jpg",
    process.env.PUBLIC_URL + "/images/project1-6.jpg",
    process.env.PUBLIC_URL + "/images/project1-7.jpg",
    process.env.PUBLIC_URL + "/images/project1-8.jpg"
  ];

  const project2Images = [
    process.env.PUBLIC_URL + "/images/project2-1.jpg"
  ];

  return (
      <div>
        {/* Hero Section */}
        <Element name="home" id="home">
          <div className="hero-section text-white text-center">
            <Container fluid>
              <h1 className="display-4">Backend Java 개발자 이동현 입니다.</h1>
              <p className="lead">
                Java와 다양한 기술 스택을 활용하여 안정적이고 확장 가능한 솔루션을 제공하는 개발자 이동현입니다.
                사용자 경험을 최우선으로 생각하며, 효율적인 시스템 설계와 클린 코드를 지향합니다.
              </p>
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button variant="primary">프로젝트 보기</Button>
              </ScrollLink>
            </Container>
          </div>
        </Element>

        {/* About Section */}
        <Element name="about" id="about">
          <Container fluid className="about-section">
            <h2 className="text-center section-title">
              <FontAwesomeIcon icon={faUser} /> ABOUT ME
            </h2>
            <hr className="section-divider" />
            <Row className="justify-content-center">
              <Col xs={12} sm={6} md={4} lg={4} className="text-center about-item">
                <FontAwesomeIcon icon={faUser} size="3x" className="mb-3 about-icon" />
                <h5 className="about-item-title">이름</h5>
                <p className="about-item-text">이동현</p>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} className="text-center about-item">
                <FontAwesomeIcon icon={faCalendar} size="3x" className="mb-3 about-icon" />
                <h5 className="about-item-title">생년월일</h5>
                <p className="about-item-text">1994년 4월 30일</p>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} className="text-center about-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="mb-3 about-icon" />
                <h5 className="about-item-title">주소지</h5>
                <p className="about-item-text">인천광역시 부평구</p>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} className="text-center about-item">
                <FontAwesomeIcon icon={faPhone} size="3x" className="mb-3 about-icon" />
                <h5 className="about-item-title">연락처</h5>
                <p className="about-item-text">010-9282-7263</p>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} className="text-center about-item">
                <FontAwesomeIcon icon={faEnvelope} size="3x" className="mb-3 about-icon" />
                <h5 className="about-item-title">이메일</h5>
                <p className="about-item-text">dev.nine0@gmail.com</p>
              </Col>
              <Col xs={12} sm={6} md={4} lg={4} className="text-center about-item">
                <FontAwesomeIcon icon={faGraduationCap} size="3x" className="mb-3 about-icon" />
                <h5 className="about-item-title">학력</h5>
                <p className="about-item-text">유한대학교 컴퓨터소프트웨어과 졸업</p>
                <p className="about-item-text">(2013 - 2018)</p>
              </Col>
            </Row>
          </Container>
        </Element>


        {/* Skills Section */}
        <Element name="skills" id="skills">
          <Container fluid className="skills-section">
            <h2 className="text-center section-title">
              <FontAwesomeIcon icon={faTools} /> SKILLS
            </h2>
            <hr className="section-divider" />
            <div className="skills-row">
              <div className="skills-category">
                <h3><FontAwesomeIcon icon={faServer} /> Backend</h3>
                <div className="skills-content">
                  <span>• Java</span>
                  <span>• Spring Boot</span>
                  <span>• RESTful API</span>
                  <span>• Spring Boot Actuator</span>
                  <span>• Swagger</span>
                </div>
              </div>
              <div className="skills-category">
                <h3><FontAwesomeIcon icon={faCode} /> Frontend</h3>
                <div className="skills-content">
                  <span>• JavaScript</span>
                  <span>• HTML5</span>
                  <span>• React</span>
                  <span>• Vue</span>
                  <span>• jQuery</span>
                  <span>• EJS</span>
                  <span>• BootStrap</span>
                </div>
              </div>
              <div className="skills-category">
                <h3><FontAwesomeIcon icon={faTools} /> DevOps & Infra</h3>
                <div className="skills-content">
                  <span>• Jenkins (CI/CD)</span>
                  <span>• Docker & Docker Compose</span>
                  <span>• AWS ECS & CloudWatch</span>
                  <span>• Nginx</span>
                  <span>• Apache</span>
                </div>
              </div>
              <div className="skills-category">
                <h3><FontAwesomeIcon icon={faDatabase} /> Data & Messaging</h3>
                <div className="skills-content">
                  <span>• RabbitMQ</span>
                  <span>• WebSocket</span>
                  <span>• Elasticsearch</span>
                  <span>• MariaDB</span>
                  <span>• Oracle</span>
                  <span>• MySQL</span>
                </div>
              </div>
              <div className="skills-category">
                <h3><FontAwesomeIcon icon={faDesktop} /> Tools</h3>
                <div className="skills-content">
                  <span>• IntelliJ IDEA</span>
                  <span>• Git & GitHub</span>
                  <span>• GitHub Actions</span>
                  <span>• Redmine</span>
                  <span>• AWS S3 & RDS</span>
                </div>
              </div>
            </div>
          </Container>
        </Element>

        {/* Projects Section */}
        <Element name="projects" id="projects">
          <Container fluid className="projects-section">
            <h2 className="text-center section-title"><FontAwesomeIcon icon={faBriefcase} /> MY PROJECTS</h2>
            <hr className="section-divider" />
            <Row>
              <Col md={6} className="my-3">
                <div className="project-card p-3 bg-light rounded">
                  <ProjectCarousel images={project1Images} />
                  <h3>손비서 모바일앱 - ConfigManager 서비스</h3>
                  <p>손비서 모바일 애플리케이션은 AI비서가 전화를 대신 받아주고, 응대하며, 부재중 전화도 읽어주고, 통화녹음과 전화 내용 기록 기능을 제공합니다.</p>
                  <LinkContainer to="/projects/1">
                    <Button variant="secondary">README.md</Button>
                  </LinkContainer>
                </div>
              </Col>
              <Col md={6} className="my-3">
                <div className="project-card p-3 bg-light rounded">
                  <ProjectCarousel images={project2Images} />
                  <h3>외부 고객사 전산시스템 연동 (External-Communicator)</h3>
                  <p>외부 고객사의 전산에 데이터를 등록, 조회 및 수정하는 역할을 수행하며, AI 비서가 필요 정보를 취합하여 고객사의 전산에 등록하는 시스템입니다.</p>
                  <LinkContainer to="/projects/2">
                    <Button variant="secondary">README.md</Button>
                  </LinkContainer>
                </div>
              </Col>
            </Row>
          </Container>
        </Element>

        {/*/!* Contact Section *!/*/}
        {/*<Element name="contact" id="contact">*/}
        {/*  <Container fluid className="contact-section">*/}
        {/*    <h2 className="text-center section-title"><FontAwesomeIcon icon={faEnvelopeOpenText} /> CONTACT ME</h2>*/}
        {/*    <hr className="section-divider" />*/}
        {/*    <Row className="justify-content-center">*/}
        {/*      <Col md={6}>*/}
        {/*        <form>*/}
        {/*          <div className="mb-3">*/}
        {/*            <label htmlFor="name" className="form-label">Name</label>*/}
        {/*            <input type="text" className="form-control" id="name" placeholder="Your Name" />*/}
        {/*          </div>*/}
        {/*          <div className="mb-3">*/}
        {/*            <label htmlFor="email" className="form-label">Email</label>*/}
        {/*            <input type="email" className="form-control" id="email" placeholder="Your Email" />*/}
        {/*          </div>*/}
        {/*          <div className="mb-3">*/}
        {/*            <label htmlFor="message" className="form-label">Message</label>*/}
        {/*            <textarea className="form-control" id="message" rows={3} placeholder="Your Message"></textarea>*/}
        {/*          </div>*/}
        {/*          <Button variant="primary" type="submit">Send</Button>*/}
        {/*        </form>*/}
        {/*      </Col>*/}
        {/*    </Row>*/}
        {/*  </Container>*/}
        {/*</Element>*/}

        {/* Career Section */}
        <Element name="career" id="career">
          <Container fluid className="career-section">
            <h2 className="text-center section-title">
              <FontAwesomeIcon icon={faBriefcase} /> CAREER
            </h2>
            <hr className="section-divider" />
            <div className="career-timeline">
              <div className="career-item">
                <div className="career-dot"></div>
                <div className="career-content">
                  <h5 className="career-title">주임연구원, (주)플루닛</h5>
                  <p className="career-duration">2023.07 - 2024.08 (1년 1개월)</p>
                  <p className="career-description">
                    음성인식 AI를 활용한 컨택센터 시스템 개발 프로젝트에서 RESTful API를 개발하고, Spring Boot 및 MariaDB를 사용해 회원 및 AI 설정 관리, 내선번호 발급 등의 기능을 구현했습니다. Jenkins를 이용한 CI/CD 파이프라인 구축과 AWS ECS를 활용한 컨테이너 오케스트레이션 경험을 보유하고 있습니다.
                  </p>
                </div>
              </div>
              <div className="career-item">
                <div className="career-dot"></div>
                <div className="career-content">
                  <h5 className="career-title">대리, 집쇼코리아</h5>
                  <p className="career-duration">2023.02 - 2023.04 (2개월)</p>
                  <p className="career-description">
                    미술관 및 박물관을 위한 CMS 개발 및 유지보수를 담당하며, Node.js와 MongoDB를 사용해 데이터를 관리했습니다. 공공데이터 API 연동 및 S3를 통한 콘텐츠 관리 시스템을 구축하였으며, Nginx 및 AWS 환경에서의 서버 최적화 작업을 수행했습니다.
                  </p>
                </div>
              </div>
              <div className="career-item">
                <div className="career-dot"></div>
                <div className="career-content">
                  <h5 className="career-title">대리, (주)아인톱시스템</h5>
                  <p className="career-duration">2019.02 - 2022.10 (3년 9개월)</p>
                  <p className="career-description">
                    공공기관 대상 그룹웨어 및 전자결재 시스템 개발 및 유지보수 업무를 수행하며, Spring MVC와 JSP를 사용한 시스템 아키텍처 설계 및 구현을 담당했습니다. 다양한 시스템과의 연동 작업 및 Apache/Tomcat 기반 서버 관리, 고객사 요구사항에 맞춘 커스터마이징 작업을 주도했습니다.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Element>

        {/* Footer Section */}
        <footer className="footer-section">
          <Container fluid>
            <Row>
              <Col className="text-center py-3">
                <p>© 2024 Lee Donghyeon. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
  );
};

export default Home;
