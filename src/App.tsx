import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
    return (
        <Router>
            <CustomNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home section="about" />} />
                <Route path="/skills" element={<Home section="skills" />} />
                <Route path="/projects" element={<Home section="projects" />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                {/*<Route path="/contact" element={<Home section="contact" />} />*/}
                <Route path="/career" element={<Home section="career" />} />
            </Routes>
        </Router>
    );
};

export default App;
