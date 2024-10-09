(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){},47:function(e,a,t){e.exports=t(88)},55:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(44),m=t.n(c),r=(t(55),t(38),t(21)),s=t(3),o=t(94),i=t(95),E=t(25);var u=()=>{const e=Object(s.N)(),a=Object(s.Q)(),t="/"===e.pathname,l=e=>{if(t){const a=document.getElementById(e);a&&window.scrollTo({top:a.offsetTop,behavior:"auto"})}else a(`/#${e}`),setTimeout(()=>{const a=document.getElementById(e);a&&window.scrollTo({top:a.offsetTop,behavior:"auto"})},100)};return n.a.createElement(o.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top"},n.a.createElement(E.LinkContainer,{to:"/"},n.a.createElement(o.a.Brand,null,"My Portfolio")),n.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(i.a,{className:"ml-auto"},n.a.createElement(i.a.Link,{onClick:()=>l("home")},"Home"),n.a.createElement(i.a.Link,{onClick:()=>l("about")},"About"),n.a.createElement(i.a.Link,{onClick:()=>l("skills")},"Skills"),n.a.createElement(i.a.Link,{onClick:()=>l("projects")},"Projects"),n.a.createElement(i.a.Link,{onClick:()=>l("contact")},"Contact"))))},p=t(90),d=t(91),N=t(92),g=t(93),b=t(19),k=t(9),h=t(8),j=t(45),f=t.n(j);t(83);var v=e=>{let{images:a}=e;return n.a.createElement("div",{className:"carousel-container"},n.a.createElement(f.a,{dots:!0,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1},a.map((e,t)=>n.a.createElement("div",{key:t,className:"carousel-slide"},n.a.createElement("img",{src:e,alt:`Project slide ${t+1}`,className:"carousel-image"}),n.a.createElement("div",{className:"slide-number"},t+1," / ",a.length)))))};var y=e=>{let{section:a}=e;const t=Object(s.N)();Object(l.useEffect)(()=>{if(a){const e=document.getElementById(a);e&&e.scrollIntoView({behavior:"auto"})}},[t,a]);return n.a.createElement("div",null,n.a.createElement(b.Element,{name:"home"},n.a.createElement("div",{className:"hero-section text-white text-center"},n.a.createElement(p.a,{fluid:!0},n.a.createElement("h1",{className:"display-4"},"Welcome to My Portfolio"),n.a.createElement("p",{className:"lead"},"Showcasing my projects and skills"),n.a.createElement(b.Link,{to:"projects",smooth:!0,duration:500},n.a.createElement(d.a,{variant:"primary"},"See My Work"))))),n.a.createElement(b.Element,{name:"about",id:"about"},n.a.createElement(p.a,{fluid:!0,className:"about-section"},n.a.createElement("h2",{className:"text-center section-title"},n.a.createElement(k.a,{icon:h.l})," ABOUT ME"),n.a.createElement("hr",{className:"section-divider"}),n.a.createElement(N.a,{className:"justify-content-center"},n.a.createElement(g.a,{md:3,className:"text-center about-item"},n.a.createElement(k.a,{icon:h.l,size:"2x",className:"mb-2"}),n.a.createElement("h5",{className:"about-item-title"},"\uc774\ub984"),n.a.createElement("p",{className:"about-item-text"},"\uc774\ub3d9\ud604")),n.a.createElement(g.a,{md:3,className:"text-center about-item"},n.a.createElement(k.a,{icon:h.b,size:"2x",className:"mb-2"}),n.a.createElement("h5",{className:"about-item-title"},"\uc0dd\ub144\uc6d4\uc77c"),n.a.createElement("p",{className:"about-item-text"},"1994.04.30")),n.a.createElement(g.a,{md:3,className:"text-center about-item"},n.a.createElement(k.a,{icon:h.h,size:"2x",className:"mb-2"}),n.a.createElement("h5",{className:"about-item-title"},"\uc8fc\uc18c\uc9c0"),n.a.createElement("p",{className:"about-item-text"},"\uc778\ucc9c\uad11\uc5ed\uc2dc \ubd80\ud3c9\uad6c"))),n.a.createElement(N.a,{className:"justify-content-center"},n.a.createElement(g.a,{md:3,className:"text-center about-item"},n.a.createElement(k.a,{icon:h.i,size:"2x",className:"mb-2"}),n.a.createElement("h5",{className:"about-item-title"},"\uc5f0\ub77d\ucc98"),n.a.createElement("p",{className:"about-item-text"},"010-9282-7263")),n.a.createElement(g.a,{md:3,className:"text-center about-item"},n.a.createElement(k.a,{icon:h.e,size:"2x",className:"mb-2"}),n.a.createElement("h5",{className:"about-item-title"},"\uc774\uba54\uc77c"),n.a.createElement("p",{className:"about-item-text"},"lhidns.dev@gmail.com")),n.a.createElement(g.a,{md:3,className:"text-center about-item"},n.a.createElement(k.a,{icon:h.g,size:"2x",className:"mb-2"}),n.a.createElement("h5",{className:"about-item-title"},"\ud559\ub825"),n.a.createElement("p",{className:"about-item-text"},"\uc720\ud55c\ub300\ud559\uad50",n.a.createElement("br",null),"(\ucef4\ud4e8\ud130\uc18c\ud504\ud2b8\uc6e8\uc5b4\uacfc)"))))),n.a.createElement(b.Element,{name:"skills",id:"skills"},n.a.createElement(p.a,{fluid:!0,className:"skills-section"},n.a.createElement("h2",{className:"text-center section-title"},n.a.createElement(k.a,{icon:h.k})," SKILLS"),n.a.createElement("hr",{className:"section-divider"}),n.a.createElement(N.a,{className:"skills-row"},n.a.createElement(g.a,{md:3,className:"skills-category"},n.a.createElement("h3",null,n.a.createElement(k.a,{icon:h.j})," Backend"),n.a.createElement("div",{className:"skills-content"},n.a.createElement("span",null,"\u2022 Java"),n.a.createElement("span",null,"\u2022 Node.js"),n.a.createElement("span",null,"\u2022 JSP"),n.a.createElement("span",null,"\u2022 Oracle"),n.a.createElement("span",null,"\u2022 MySQL"))),n.a.createElement(g.a,{md:3,className:"skills-category"},n.a.createElement("h3",null,n.a.createElement(k.a,{icon:h.c})," Frontend"),n.a.createElement("div",{className:"skills-content"},n.a.createElement("span",null,"\u2022 JavaScript"),n.a.createElement("span",null,"\u2022 HTML5"),n.a.createElement("span",null,"\u2022 React"),n.a.createElement("span",null,"\u2022 Vue"),n.a.createElement("span",null,"\u2022 jQuery"),n.a.createElement("span",null,"\u2022 BootStrap"))),n.a.createElement(g.a,{md:3,className:"skills-category"},n.a.createElement("h3",null,n.a.createElement(k.a,{icon:h.k})," Infra"),n.a.createElement("div",{className:"skills-content"},n.a.createElement("span",null,"\u2022 Linux"),n.a.createElement("span",null,"\u2022 AWS (RDS, EC2 \ub4f1)"),n.a.createElement("span",null,"\u2022 Docker"))),n.a.createElement(g.a,{md:3,className:"skills-category"},n.a.createElement("h3",null,n.a.createElement(k.a,{icon:h.d})," Tools"),n.a.createElement("div",{className:"skills-content"},n.a.createElement("span",null,"\u2022 Git"),n.a.createElement("span",null,"\u2022 GitHub"),n.a.createElement("span",null,"\u2022 IntelliJ"),n.a.createElement("span",null,"\u2022 Redmine")))))),n.a.createElement(b.Element,{name:"projects",id:"projects"},n.a.createElement(p.a,{fluid:!0,className:"projects-section"},n.a.createElement("h2",{className:"text-center section-title"},n.a.createElement(k.a,{icon:h.a})," MY PROJECTS"),n.a.createElement("hr",{className:"section-divider"}),n.a.createElement(N.a,null,n.a.createElement(g.a,{md:6,className:"my-3"},n.a.createElement("div",{className:"project-card p-3 bg-light rounded"},n.a.createElement(v,{images:["images/project1-1.jpg","images/project1-2.jpg","images/project1-3.jpg","images/project1-4.jpg","images/project1-5.jpg","images/project1-6.jpg","images/project1-7.jpg","images/project1-8.jpg"]}),n.a.createElement("h3",null,"\uc190\ube44\uc11c \ubaa8\ubc14\uc77c\uc571 - ConfigManager \uc11c\ube44\uc2a4"),n.a.createElement("p",null,"\uc190\ube44\uc11c \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 AI\ube44\uc11c\uac00 \uc804\ud654\ub97c \ub300\uc2e0 \ubc1b\uc544\uc8fc\uace0, \uc751\ub300\ud558\uba70, \ubd80\uc7ac\uc911 \uc804\ud654\ub3c4 \uc77d\uc5b4\uc8fc\uace0, \ud1b5\ud654\ub179\uc74c\uacfc \uc804\ud654 \ub0b4\uc6a9 \uae30\ub85d \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),n.a.createElement(E.LinkContainer,{to:"/projects/1"},n.a.createElement(d.a,{variant:"secondary"},"View Project")))),n.a.createElement(g.a,{md:6,className:"my-3"},n.a.createElement("div",{className:"project-card p-3 bg-light rounded"},n.a.createElement(v,{images:["images/project2-1.jpg"]}),n.a.createElement("h3",null,"\uc678\ubd80 \uace0\uac1d\uc0ac \uc804\uc0b0\uc2dc\uc2a4\ud15c \uc5f0\ub3d9 (External-Communicator)"),n.a.createElement("p",null,"\uc678\ubd80 \uace0\uac1d\uc0ac\uc758 \uc804\uc0b0\uc5d0 \ub370\uc774\ud130\ub97c \ub4f1\ub85d, \uc870\ud68c \ubc0f \uc218\uc815\ud558\ub294 \uc5ed\ud560\uc744 \uc218\ud589\ud558\uba70, AI \ube44\uc11c\uac00 \ud544\uc694 \uc815\ubcf4\ub97c \ucde8\ud569\ud558\uc5ec \uace0\uac1d\uc0ac\uc758 \uc804\uc0b0\uc5d0 \ub4f1\ub85d\ud558\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4."),n.a.createElement(E.LinkContainer,{to:"/projects/2"},n.a.createElement(d.a,{variant:"secondary"},"View Project"))))))),n.a.createElement(b.Element,{name:"contact",id:"contact"},n.a.createElement(p.a,{fluid:!0,className:"contact-section"},n.a.createElement("h2",{className:"text-center section-title"},n.a.createElement(k.a,{icon:h.f})," CONTACT ME"),n.a.createElement("hr",{className:"section-divider"}),n.a.createElement(N.a,{className:"justify-content-center"},n.a.createElement(g.a,{md:6},n.a.createElement("form",null,n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"name",className:"form-label"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Your Name"})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),n.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Your Email"})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"message",className:"form-label"},"Message"),n.a.createElement("textarea",{className:"form-control",id:"message",rows:3,placeholder:"Your Message"})),n.a.createElement(d.a,{variant:"primary",type:"submit"},"Send")))))),n.a.createElement("footer",{className:"footer-section"},n.a.createElement(p.a,{fluid:!0},n.a.createElement(N.a,null,n.a.createElement(g.a,{className:"text-center py-3"},n.a.createElement("p",null,"\xa9 2024 Lee Donghyeon. All Rights Reserved."))))))};t(84);const I={1:{title:"\uc190\ube44\uc11c \ubc0f \uc6cc\ud06c\uc13c\ud130 - ConfigManager \uc560\ud50c\ub9ac\ucf00\uc774\uc158",summary:"ConfigManager \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \uc190\ube44\uc11c \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \uc6cc\ud06c\uc13c\ud130 \uc6f9\uc11c\ube44\uc2a4\uc5d0\uc11c \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uc124\uc815 \uad00\ub9ac \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc785\ub2c8\ub2e4. \ud68c\uc6d0 \ubc0f AI \uc124\uc815 \uad00\ub9ac, \uac1c\uc778\ubc88\ud638 \ubc1c\uae09, \ube44\uc988\ub2c8\uc2a4 \ud0c0\uc784 \uad00\ub9ac, AI \uc6b4\uc6a9\uc744 \uc704\ud55c \uc870\ud68c \uae30\ub2a5 \ub4f1\uc758 RESTful API\ub97c \uac1c\ubc1c\ud558\uace0, \uac01 \ud658\uacbd\uc5d0 \ub300\ud55c \uc124\uc815\uc744 \ub2f4\ub2f9\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.",period:"2024.07.05 ~ (11\uac1c\uc6d4 ~ \uc9c0\uc18d\uc801\uc778 \uace0\ub3c4\ud654 \ubc0f \uc2e0\uaddc\uae30\ub2a5 \ucd94\uac00)",technologies:"Spring Boot, MariaDB, REST API, AWS, Git, Jenkins, Docker (Docker Compose), IntelliJ IDEA",roles:[{title:"\uc2dc\uc2a4\ud15c \uc124\uacc4 \ubc0f \uac1c\ubc1c",tasks:["\ud68c\uc6d0 \ubc0f AI \uc124\uc815 \uad00\ub9ac: RESTful API\ub97c \ud1b5\ud574 \ud68c\uc6d0 \uc815\ubcf4 \ubc0f AI \uc124\uc815\uc758 CRUD \uae30\ub2a5 \uac1c\ubc1c","\ub0b4\uc120\ubc88\ud638 \ubc1c\uae09: VoiceGateway\uc640 \uc5f0\ub3d9\ud558\uc5ec \ub0b4\uc120\ubc88\ud638 \uc0dd\uc131 \ubc0f \uad00\ub9ac API \uad6c\ud604","BusinessTime \uad00\ub9ac: \uc5c5\ubb34\uc2dc\uac04, \ud734\uc2dd\uc2dc\uac04, \ud734\uc77c\uc758 CRUD \uae30\ub2a5 \uc81c\uacf5","AI \uc6b4\uc6a9 \uc870\ud68c \uae30\ub2a5: AI \uc2dc\uc2a4\ud15c \uc6b4\uc6a9\uc744 \uc704\ud55c \ub2e4\uc591\ud55c \uc870\ud68c \uae30\ub2a5 \uad6c\ud604","Spring Boot Actuator \uc0ac\uc6a9: \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubaa8\ub2c8\ud130\ub9c1\uacfc \uad00\ub9ac\ub97c \uc704\ud55c \uc5d4\ub4dc\ud3ec\uc778\ud2b8 \uc81c\uacf5"]},{title:"Swagger \uc801\uc6a9 \ubc0f API \ubb38\uc11c\ud654",tasks:["API \ubb38\uc11c\ud654: Swagger\ub97c \uc0ac\uc6a9\ud558\uc5ec API \ubb38\uc11c \uc790\ub3d9\ud654, \uac1c\ubc1c\uc790\uc640 \ud14c\uc2a4\ud130\uac00 \uc27d\uac8c \uc774\ud574\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0","\ud14c\uc2a4\ud2b8 \ud3b8\uc758\uc131: Swagger UI\ub97c \ud1b5\ud574 API \ud14c\uc2a4\ud2b8 \ubc0f \uac80\uc99d \uc9c0\uc6d0"]},{title:"HTTP \ub85c\uadf8 \uad00\ub9ac",tasks:["\ud2b8\ub798\ud53d \ubaa8\ub2c8\ud130\ub9c1: HTTP \uc694\uccad \ubc0f \uc751\ub2f5 \uae30\ub85d\uc73c\ub85c \uc2dc\uc2a4\ud15c \uc0ac\uc6a9 \ud604\ud669 \ubd84\uc11d","\ubb38\uc81c \ud574\uacb0: \ub85c\uadf8 \ub370\uc774\ud130\ub97c \ud1b5\ud574 \uc5d0\ub7ec \ubc0f \uc131\ub2a5 \ubb38\uc81c \uc6d0\uc778 \ubd84\uc11d \ubc0f \ud574\uacb0"]},{title:"\uc608\uc678 \ucc98\ub9ac \uc124\uc815",tasks:["\uc548\uc815\uc131 \ud5a5\uc0c1: \uc2dc\uc2a4\ud15c \uc624\ub958 \ubc1c\uc0dd \uc2dc \uc608\uc678 \ucc98\ub9ac\ub97c \ud1b5\ud574 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc548\uc815\uc801 \uc6b4\uc601","\ub514\ubc84\uae45 \uc6a9\uc774\uc131: \uc608\uc678 \ubc1c\uc0dd \uc2dc \uc0c1\uc138\ud55c \uc624\ub958 \uba54\uc2dc\uc9c0\uc640 \uc2a4\ud0dd \ud2b8\ub808\uc774\uc2a4 \uc81c\uacf5","\uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uac1c\uc120: \uc77c\uad00\uc801\uc774\uace0 \uce5c\ud654\uc801\uc778 \uc624\ub958 \uba54\uc2dc\uc9c0 \uc81c\uacf5\uc73c\ub85c \uc2dc\uc2a4\ud15c \uc2e0\ub8b0\uc131 \ubc0f \uc0ac\uc6a9 \ud3b8\uc758\uc131 \ud5a5\uc0c1"]},{title:"CI/CD \uad6c\ucd95 \ubc0f \uad00\ub9ac",tasks:["Jenkins \uae30\ubc18 CI/CD \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95: Development, Staging, Production \ud658\uacbd\uc5d0 CI/CD \ud30c\uc774\ud504\ub77c\uc778 \uad6c\ucd95 \ubc0f \uc790\ub3d9\ud654\ub41c \ubc30\ud3ec \ud504\ub85c\uc138\uc2a4 \uad6c\ud604"]},{title:"\ucee8\ud14c\uc774\ub108\ud654 \ubc0f \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158",tasks:["Docker \ubc0f Docker Compose \uc0ac\uc6a9: \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucee8\ud14c\uc774\ub108\ud654 \ubc0f Docker Compose\ub97c \ud1b5\ud55c \uac1c\ubc1c \ubc0f \ubc30\ud3ec \ud658\uacbd \uc124\uc815"]}],outcomes:["\ud504\ub85c\uc81d\ud2b8 \uc644\ub8cc: \ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8 \uae30\ud55c \ub0b4 \uc644\ub8cc, \ub192\uc740 \uc2e0\ub8b0\uc131 \ud655\ubcf4","\uc12c\uc138\ud55c \ud14c\uc2a4\ud2b8: \ud1b5\ud569 \ud14c\uc2a4\ud2b8 \ubc0f \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \uc815\ud655\ud558\uac8c \ubb38\uc81c \ud30c\uc545 \ubc0f \ud574\uacb0, \ub2f4\ub2f9\uc790\uc640\uc758 \uc6d0\ud65c\ud55c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ubc0f \uc870\uce58","\ud655\uc7a5\uc131 \ubc0f \uc7ac\uc0ac\uc6a9\uc131: \uc190\ube44\uc11c \ubaa8\ubc14\uc77c\uc571\uacfc \uc6cc\ud06c\uc13c\ud130 \uc6f9\uc11c\ube44\uc2a4\uc5d0\uc11c \uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ub418\uc5b4 \uc77c\uad00\ub41c \uc124\uc815 \uad00\ub9ac\uc640 \ucf54\ub4dc \uc911\ubcf5 \uac10\uc18c"],improvements:["\uc790\ub3d9\ud654 \ub3c4\uad6c \ud65c\uc6a9: \ud14c\uc2a4\ud2b8 \ubc0f \ubc30\ud3ec \uacfc\uc815\uc758 \uc790\ub3d9\ud654\ub97c \ub354\uc6b1 \uac15\ud654\ud558\uc5ec \uac1c\ubc1c \ud6a8\uc728\uc131 \ubc0f \ud488\uc9c8 \ud5a5\uc0c1","\uc131\ub2a5 \ucd5c\uc801\ud654: \uc2dc\uc2a4\ud15c \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud55c \uc815\uae30\uc801\uc778 \ucf54\ub4dc \ub9ac\ubdf0 \ubc0f \ub9ac\ud329\ud1a0\ub9c1","\uc0ac\uc6a9\uc790 \ud53c\ub4dc\ubc31 \ubc18\uc601: \uc0ac\uc6a9\uc790 \uacbd\ud5d8 \uac1c\uc120\uc744 \uc704\ud574 \uc815\uae30\uc801\uc778 \ud53c\ub4dc\ubc31 \uc218\uc9d1 \ubc0f \ubc18\uc601 \uc808\ucc28 \uac15\ud654"]},2:{title:"\uc678\ubd80 \uace0\uac1d\uc0ac \uc804\uc0b0\uc2dc\uc2a4\ud15c \uc5f0\ub3d9 (External-Communicator)",summary:"\uc678\ubd80 \uace0\uac1d\uc0ac\uc758 \uc804\uc0b0\uc5d0 \ub370\uc774\ud130\ub97c \ub4f1\ub85d, \uc870\ud68c \ubc0f \uc218\uc815\ud558\ub294 \uc5ed\ud560\uc744 \uc218\ud589\ud558\uba70, AI \ube44\uc11c\uac00 \ud544\uc694 \uc815\ubcf4\ub97c \ucde8\ud569\ud558\uc5ec \uace0\uac1d\uc0ac\uc758 \uc804\uc0b0\uc5d0 \ub4f1\ub85d\ud558\ub294 \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4.",period:"2024.09.01 ~ 2024.12.31 (4\uac1c\uc6d4)",technologies:"Spring Boot, MariaDB, RabbitMQ, REST API, WebSocket, AWS, Git, Jenkins, Docker (Docker Compose), IntelliJ IDEA",roles:[{title:"\uc2dc\uc2a4\ud15c \uc124\uacc4 \ubc0f \uac1c\ubc1c",tasks:["AI \ube44\uc11c\uc640\uc758 \uc5f0\ub3d9: AI \ube44\uc11c\uac00 \uc218\uc9d1\ud55c \uc774\uc0ac\uc77c, \ucd9c\ubc1c\uc9c0, \ub3c4\ucc29\uc9c0 \ub4f1\uc758 \uc815\ubcf4\ub97c \uace0\uac1d\uc0ac\uc758 \uc804\uc0b0\uc5d0 \ub4f1\ub85d\ud558\ub294 RESTful API \uac1c\ubc1c","\ub370\uc774\ud130 \ucc98\ub9ac: RabbitMQ\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30 \ub370\uc774\ud130 \ucc98\ub9ac \ubc0f \uc548\uc815\uc801\uc778 \uba54\uc2dc\uc9c0 \ud050 \uad00\ub9ac","\ub370\uc774\ud130 \uc870\ud68c \ubc0f \uc218\uc815: \uace0\uac1d\uc0ac\uc758 \uc804\uc0b0\uc5d0\uc11c \ub370\uc774\ud130\ub97c \uc870\ud68c\ud558\uace0 \uc218\uc815\ud558\ub294 \uae30\ub2a5 \uac1c\ubc1c","\ud3fc\uce74\ub4dc \uc218\uc815 \uae30\ub2a5 \uac1c\ubc1c(JSP): \uc811\uc218 \uc54c\ub9bc \ubc0f \uc218\uc815\uc774 \ud544\uc694\ud560 \uc2dc \ud3fc\uce74\ub4dc\ub97c \ud1b5\ud55c \uc218\uc815 \uae30\ub2a5 \uad6c\ud604","\ube44\uc988\uc5e0 \uc54c\ub9bc\ud1a1 \ubc1c\uc1a1 \uc5f0\ub3d9(Message-Gateway)"]},{title:"\uc2e4\uc2dc\uac04 \ud1b5\uc2e0",tasks:["WebSocket \uc0ac\uc6a9: C#\uc73c\ub85c \ub41c \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc2e4\uc2dc\uac04 \ud1b5\uc2e0\uc744 \ud558\uc5ec \ubcd1\uc6d0\ubcc4 \ucc28\ud2b8 \uc815\ubcf4\ub97c \uc5f0\ub3d9\ud558\ub294 \uc791\uc5c5 \uad6c\ud604"]},{title:"\uc11c\ubc84 \uc124\uc815 \ubc0f \uad00\ub9ac",tasks:["RabbitMQ \uad00\ub9ac: \uba54\uc2dc\uc9c0 \ud050\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub370\uc774\ud130\uc758 \uc548\uc815\uc801\uc778 \uc804\uc1a1 \ubc0f \ucc98\ub9ac"]},{title:"\uace0\uac1d \uc694\uad6c\uc0ac\ud56d \ubd84\uc11d \ubc0f \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5",tasks:["\uace0\uac1d \uc694\uad6c\uc0ac\ud56d \uc218\uc9d1 \ubc0f \ubd84\uc11d: \uc678\ubd80 \uace0\uac1d\uc0ac\uc640 \ud611\uc5c5\uc744 \ud1b5\ud574 \uad6c\uccb4\uc801\uc778 \uc694\uad6c\uc0ac\ud56d \ub3c4\ucd9c","\ub9de\ucda4\ud615 \uae30\ub2a5 \uac1c\ubc1c: \uace0\uac1d \ub9de\ucda4\ud615 \ub370\uc774\ud130 \ucc98\ub9ac \ubc0f \uc870\ud68c \uae30\ub2a5 \uac1c\ubc1c, \ubc18\ubcf5\uc801 \ud53c\ub4dc\ubc31 \ubc18\uc601"]}],outcomes:["\uc0c1\ub2f4 \uc5c5\ubb34 \uc790\ub3d9\ud654: AI \ube44\uc11c\ub97c \ud1b5\ud574 \uc790\ub3d9\ud654\ub41c \uc0c1\ub2f4 \ucc98\ub9ac \ubc0f \ud1b5\uacc4 \ubd84\uc11d\uc73c\ub85c \uc801\uc808\ud55c \uc2dc\ub098\ub9ac\uc624 \uc801\uc6a9, \uc5c5\ubb34 \ud6a8\uc728\uc131 \ubc0f \uace0\uac1d \ub9cc\uc871\ub3c4 \uc99d\ub300","\ub9e4\ucd9c\uc561 \uc99d\ub300: \uc790\ub3d9\ud654\ub41c \uc2dc\uc2a4\ud15c\uc744 \ud1b5\ud574 \ub354 \ub9ce\uc740 \ucf5c\uc744 \ucc98\ub9ac\ud558\uc5ec \ub9e4\ucd9c\uc561 30% \uc99d\ub300","\ud655\uc7a5\uc131: \ub2e4\uc591\ud55c \uace0\uac1d\uc0ac\uc758 \uc694\uad6c\uc0ac\ud56d\uc744 \ubc18\uc601\ud560 \uc218 \uc788\ub3c4\ub85d \uc124\uacc4\ub418\uc5b4 \ud5a5\ud6c4 \ub2e4\ub978 \uace0\uac1d\uc0ac\uc758 \uc694\uad6c\uc5d0\ub3c4 \uc720\uc5f0\ud558\uac8c \ub300\uc751 \uac00\ub2a5"],improvements:["\ud655\uc7a5\uc131 \uace0\ub824: \uc2dc\uc2a4\ud15c\uc758 \ubbf8\ub798 \ud655\uc7a5\uc744 \uace0\ub824\ud558\uc5ec \ubaa8\ub4c8\ud654 \ubc0f \ud655\uc7a5 \uac00\ub2a5\ud55c \uc544\ud0a4\ud14d\ucc98 \uc124\uacc4","\ud6a8\uc728\uc801\uc778 \ubc84\uc804 \uad00\ub9ac: \uace0\uac1d\uc0ac \uc694\uad6c\uc0ac\ud56d\uc744 \ubc18\uc601\ud55c \uae30\ub2a5 \ucd94\uac00 \ubc0f \uc218\uc815 \uc0ac\ud56d\uc5d0 \ub300\ud574 \ud6a8\uc728\uc801\uc778 \ubc84\uc804 \uad00\ub9ac \uccb4\uacc4 \uad6c\ucd95","\ud1b5\uacc4 \uae30\ubc18 \uc2dc\ub098\ub9ac\uc624 \uac1c\uc120: \uc8fc, \uc6d4\uac04 \ud1b5\uacc4\ub97c \ud1b5\ud574 AI \uc751\ub300 \uc2dc\ub098\ub9ac\uc624\ub97c \uc9c0\uc18d\uc801\uc73c\ub85c \uac1c\uc120\ud558\uc5ec \uace0\uac1d\ub9cc\uc871\ub3c4 \uc99d\ub300"]}};var C=()=>{const{id:e}=Object(s.V)(),a=I[e],t=Object(s.Q)();Object(l.useEffect)(()=>{window.scrollTo(0,0)},[]);return n.a.createElement(p.a,{fluid:!0,className:"project-detail-section"},n.a.createElement(d.a,{variant:"secondary",onClick:()=>{t(-1)},className:"mb-4 back-button"},"\u2190 Back"),n.a.createElement("h2",{className:"text-center section-title"},a.title),n.a.createElement("hr",{className:"section-divider"}),n.a.createElement(N.a,{className:"justify-content-center"},n.a.createElement(g.a,{md:10},n.a.createElement("section",null,n.a.createElement("h3",null,"\ud83d\udd0d Summary"),n.a.createElement("p",null,a.summary)),n.a.createElement("section",null,n.a.createElement("h3",null,"\ud83d\uddd3\ufe0f \uae30\uac04"),n.a.createElement("p",null,a.period)),n.a.createElement("section",null,n.a.createElement("h3",null,"\ud83d\udee0\ufe0f \uc8fc\uc694\uae30\uc220"),n.a.createElement("p",null,a.technologies)),n.a.createElement("section",null,n.a.createElement("h3",null,"\ud83d\udccb \uc8fc\uc694\uc5c5\ubb34 (\uc5ed\ud560)"),a.roles.map((e,a)=>n.a.createElement("div",{key:a},n.a.createElement("h4",null,e.title),n.a.createElement("ul",null,e.tasks.map((e,a)=>n.a.createElement("li",{key:a},e)))))),n.a.createElement("section",null,n.a.createElement("h3",null,"\ud83c\udfc6 \uc8fc\uc694\uc131\uacfc"),n.a.createElement("ul",null,a.outcomes.map((e,a)=>n.a.createElement("li",{key:a},e)))),n.a.createElement("section",null,n.a.createElement("h3",null,"\ud83d\udca1 \uac1c\uc120\uc0ac\ud56d"),n.a.createElement("ul",null,a.improvements.map((e,a)=>n.a.createElement("li",{key:a},e)))))))};var S=()=>n.a.createElement(r.BrowserRouter,null,n.a.createElement(u,null),n.a.createElement(s.i,null,n.a.createElement(s.g,{path:"/",element:n.a.createElement(y,null)}),n.a.createElement(s.g,{path:"/about",element:n.a.createElement(y,{section:"about"})}),n.a.createElement(s.g,{path:"/skills",element:n.a.createElement(y,{section:"skills"})}),n.a.createElement(s.g,{path:"/projects",element:n.a.createElement(y,{section:"projects"})}),n.a.createElement(s.g,{path:"/projects/:id",element:n.a.createElement(C,null)}),n.a.createElement(s.g,{path:"/contact",element:n.a.createElement(y,{section:"contact"})})));var x=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,96)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:c,getTTFB:m}=a;t(e),l(e),n(e),c(e),m(e)})};t(85),t(86),t(87);m.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null))),x()}},[[47,1,2]]]);
//# sourceMappingURL=main.384f7bc6.chunk.js.map