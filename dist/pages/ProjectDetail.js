import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './ProjectDetail.css';
var projectDetails = {
    '1': {
        title: "손비서 및 워크센터 - ConfigManager 애플리케이션",
        summary: "ConfigManager 애플리케이션은 손비서 모바일 애플리케이션과 워크센터 웹서비스에서 공통으로 사용하는 설정 관리 애플리케이션입니다. 회원 및 AI 설정 관리, 개인번호 발급, 비즈니스 타임 관리, AI 운용을 위한 조회 기능 등의 RESTful API를 개발하고, 각 환경에 대한 설정을 담당한 프로젝트입니다.",
        period: "2024.07.05 ~ (11개월 ~ 지속적인 고도화 및 신규기능 추가)",
        technologies: "Spring Boot, MariaDB, REST API, AWS, Git, Jenkins, Docker (Docker Compose), IntelliJ IDEA",
        roles: [
            {
                title: "시스템 설계 및 개발",
                tasks: [
                    "회원 및 AI 설정 관리: RESTful API를 통해 회원 정보 및 AI 설정의 CRUD 기능 개발",
                    "내선번호 발급: VoiceGateway와 연동하여 내선번호 생성 및 관리 API 구현",
                    "BusinessTime 관리: 업무시간, 휴식시간, 휴일의 CRUD 기능 제공",
                    "AI 운용 조회 기능: AI 시스템 운용을 위한 다양한 조회 기능 구현",
                    "Spring Boot Actuator 사용: 애플리케이션 모니터링과 관리를 위한 엔드포인트 제공"
                ]
            },
            {
                title: "Swagger 적용 및 API 문서화",
                tasks: [
                    "API 문서화: Swagger를 사용하여 API 문서 자동화, 개발자와 테스터가 쉽게 이해할 수 있도록 지원",
                    "테스트 편의성: Swagger UI를 통해 API 테스트 및 검증 지원"
                ]
            },
            {
                title: "HTTP 로그 관리",
                tasks: [
                    "트래픽 모니터링: HTTP 요청 및 응답 기록으로 시스템 사용 현황 분석",
                    "문제 해결: 로그 데이터를 통해 에러 및 성능 문제 원인 분석 및 해결"
                ]
            },
            {
                title: "예외 처리 설정",
                tasks: [
                    "안정성 향상: 시스템 오류 발생 시 예외 처리를 통해 애플리케이션 안정적 운영",
                    "디버깅 용이성: 예외 발생 시 상세한 오류 메시지와 스택 트레이스 제공",
                    "사용자 경험 개선: 일관적이고 친화적인 오류 메시지 제공으로 시스템 신뢰성 및 사용 편의성 향상"
                ]
            },
            {
                title: "CI/CD 구축 및 관리",
                tasks: [
                    "Jenkins 기반 CI/CD 파이프라인 구축: Development, Staging, Production 환경에 CI/CD 파이프라인 구축 및 자동화된 배포 프로세스 구현"
                ]
            },
            {
                title: "컨테이너화 및 오케스트레이션",
                tasks: [
                    "Docker 및 Docker Compose 사용: 애플리케이션 컨테이너화 및 Docker Compose를 통한 개발 및 배포 환경 설정"
                ]
            }
        ],
        outcomes: [
            "프로젝트 완료: 모든 프로젝트 기한 내 완료, 높은 신뢰성 확보",
            "섬세한 테스트: 통합 테스트 및 단위 테스트를 통해 빠르고 정확하게 문제 파악 및 해결, 담당자와의 원활한 커뮤니케이션 및 조치",
            "확장성 및 재사용성: 손비서 모바일앱과 워크센터 웹서비스에서 공통으로 사용되어 일관된 설정 관리와 코드 중복 감소"
        ],
        improvements: [
            "자동화 도구 활용: 테스트 및 배포 과정의 자동화를 더욱 강화하여 개발 효율성 및 품질 향상",
            "성능 최적화: 시스템 성능을 최적화하기 위한 정기적인 코드 리뷰 및 리팩토링",
            "사용자 피드백 반영: 사용자 경험 개선을 위해 정기적인 피드백 수집 및 반영 절차 강화"
        ]
    },
    '2': {
        title: "외부 고객사 전산시스템 연동 (External-Communicator)",
        summary: "외부 고객사의 전산에 데이터를 등록, 조회 및 수정하는 역할을 수행하며, AI 비서가 필요 정보를 취합하여 고객사의 전산에 등록하는 시스템입니다.",
        period: "2024.09.01 ~ 2024.12.31 (4개월)",
        technologies: "Spring Boot, MariaDB, RabbitMQ, REST API, WebSocket, AWS, Git, Jenkins, Docker (Docker Compose), IntelliJ IDEA",
        roles: [
            {
                title: "시스템 설계 및 개발",
                tasks: [
                    "AI 비서와의 연동: AI 비서가 수집한 이사일, 출발지, 도착지 등의 정보를 고객사의 전산에 등록하는 RESTful API 개발",
                    "데이터 처리: RabbitMQ를 사용하여 비동기 데이터 처리 및 안정적인 메시지 큐 관리",
                    "데이터 조회 및 수정: 고객사의 전산에서 데이터를 조회하고 수정하는 기능 개발",
                    "폼카드 수정 기능 개발(JSP): 접수 알림 및 수정이 필요할 시 폼카드를 통한 수정 기능 구현",
                    "비즈엠 알림톡 발송 연동(Message-Gateway)"
                ]
            },
            {
                title: "실시간 통신",
                tasks: [
                    "WebSocket 사용: C#으로 된 클라이언트와 실시간 통신을 하여 병원별 차트 정보를 연동하는 작업 구현"
                ]
            },
            {
                title: "서버 설정 및 관리",
                tasks: [
                    "RabbitMQ 관리: 메시지 큐를 사용하여 데이터의 안정적인 전송 및 처리"
                ]
            },
            {
                title: "고객 요구사항 분석 및 커스터마이징",
                tasks: [
                    "고객 요구사항 수집 및 분석: 외부 고객사와 협업을 통해 구체적인 요구사항 도출",
                    "맞춤형 기능 개발: 고객 맞춤형 데이터 처리 및 조회 기능 개발, 반복적 피드백 반영"
                ]
            }
        ],
        outcomes: [
            "상담 업무 자동화: AI 비서를 통해 자동화된 상담 처리 및 통계 분석으로 적절한 시나리오 적용, 업무 효율성 및 고객 만족도 증대",
            "매출액 증대: 자동화된 시스템을 통해 더 많은 콜을 처리하여 매출액 30% 증대",
            "확장성: 다양한 고객사의 요구사항을 반영할 수 있도록 설계되어 향후 다른 고객사의 요구에도 유연하게 대응 가능"
        ],
        improvements: [
            "확장성 고려: 시스템의 미래 확장을 고려하여 모듈화 및 확장 가능한 아키텍처 설계",
            "효율적인 버전 관리: 고객사 요구사항을 반영한 기능 추가 및 수정 사항에 대해 효율적인 버전 관리 체계 구축",
            "통계 기반 시나리오 개선: 주, 월간 통계를 통해 AI 응대 시나리오를 지속적으로 개선하여 고객만족도 증대"
        ]
    }
};
var ProjectDetail = function () {
    var id = useParams().id;
    var project = projectDetails[id];
    var navigate = useNavigate();
    useEffect(function () {
        window.scrollTo(0, 0);
    }, []);
    var handleBackClick = function () {
        navigate(-1);
    };
    return (_jsxs(Container, { fluid: true, className: "project-detail-section", children: [_jsx(Button, { variant: "secondary", onClick: handleBackClick, className: "mb-4 back-button", children: "\u2190 Back" }), _jsx("h2", { className: "text-center section-title", children: project.title }), _jsx("hr", { className: "section-divider" }), _jsx(Row, { className: "justify-content-center", children: _jsxs(Col, { md: 10, children: [_jsxs("section", { children: [_jsx("h3", { children: "\uD83D\uDD0D Summary" }), _jsx("p", { children: project.summary })] }), _jsxs("section", { children: [_jsx("h3", { children: "\uD83D\uDDD3\uFE0F \uAE30\uAC04" }), _jsx("p", { children: project.period })] }), _jsxs("section", { children: [_jsx("h3", { children: "\uD83D\uDEE0\uFE0F \uC8FC\uC694\uAE30\uC220" }), _jsx("p", { children: project.technologies })] }), _jsxs("section", { children: [_jsx("h3", { children: "\uD83D\uDCCB \uC8FC\uC694\uC5C5\uBB34 (\uC5ED\uD560)" }), project.roles.map(function (role, index) { return (_jsxs("div", { children: [_jsx("h4", { children: role.title }), _jsx("ul", { children: role.tasks.map(function (task, idx) { return (_jsx("li", { children: task }, idx)); }) })] }, index)); })] }), _jsxs("section", { children: [_jsx("h3", { children: "\uD83C\uDFC6 \uC8FC\uC694\uC131\uACFC" }), _jsx("ul", { children: project.outcomes.map(function (outcome, index) { return (_jsx("li", { children: outcome }, index)); }) })] }), _jsxs("section", { children: [_jsx("h3", { children: "\uD83D\uDCA1 \uAC1C\uC120\uC0AC\uD56D" }), _jsx("ul", { children: project.improvements.map(function (improvement, index) { return (_jsx("li", { children: improvement }, index)); }) })] })] }) })] }));
};
export default ProjectDetail;
