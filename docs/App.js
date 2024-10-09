import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
var App = function () {
    return (_jsxs(Router, { children: [_jsx(CustomNavbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(Home, { section: "about" }) }), _jsx(Route, { path: "/skills", element: _jsx(Home, { section: "skills" }) }), _jsx(Route, { path: "/projects", element: _jsx(Home, { section: "projects" }) }), _jsx(Route, { path: "/projects/:id", element: _jsx(ProjectDetail, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Home, { section: "contact" }) })] })] }));
};
export default App;
