const isEnglish = new URLSearchParams(location.search).get('lang') === 'en';

const english = {
  '회사소개': 'About', '사업분야': 'Business', '포트폴리오': 'Portfolio', '문의': 'Contact',
  '공간을 짓고, 장면을 완성합니다.': 'We Build Spaces and Complete Experiences.',
  'LED 시설물, 실내 건축 인테리어, 라이브 현장 운영까지.': 'From LED installations and interior construction to live event operations.',
  'BIC는 아이디어가 실제 공간에서 작동하도록 만듭니다.': 'BIC turns ideas into spaces that work in the real world.',
  '우리는 복잡한 현장을 하나의 흐름으로 만듭니다.': 'We Bring Complex Sites into One Seamless Flow.',
  '기획의 의도를 읽고, 공간과 기술을 연결해 현장에서 완성합니다.': 'We understand the intent, connect space with technology, and deliver on site.',
  'BIC는 설계부터 시공, 설치, 운영까지 프로젝트 전 과정을 책임지는 실행 중심의 파트너입니다.': 'BIC is an execution-driven partner responsible for every stage, from design and construction to installation and operation.',
  '회사소개 보기': 'About BIC', '서로 다른 전문성, 하나의 완성도.': 'Distinct Expertise, One Complete Result.',
  'LED·DOOH 사업': 'LED & DOOH', '실내 건축 인테리어': 'Interior Architecture', '라이브 행사 운영': 'Live Event Operations',
  'DOOH 시설물 설치 및 시공, 디지털 배너 설치와 렌탈까지 미디어 환경을 구축합니다.': 'We build media environments, from DOOH installation and construction to digital banner installation and rental.',
  '공간 계획부터 설계와 시공까지 일관된 품질로 완성합니다.': 'We deliver consistent quality from spatial planning and design through construction.',
  '기획, 공간 제작, 음향, LED, 현장 운영을 하나의 팀으로 연결합니다.': 'One team connects planning, spatial production, sound, LED, and on-site operations.',
  '실행으로 증명합니다.': 'Proven Through Execution.', '설계와 기술, 운영이 실제 현장에서 어떻게 완성되는지 확인해보세요.': 'See how design, technology, and operation come together on site.',
  '전체 포트폴리오': 'View All Work', '게이트아이오 워커힐 애스톤하우스': 'Gate.io Walkerhill Aston House',
  '성수 크리에이티브 오피스': 'Seongsu Creative Office', '도심형 디지털 미디어': 'Urban Digital Media',
  '다음 장면을 함께 만들어볼까요?': 'Shall We Create the Next Scene Together?', '프로젝트 문의하기': 'Start a Project',
  '프로젝트 분야와 규모를 알려주시면 담당자가 내용을 확인한 뒤 안내해 드립니다.': 'Tell us about your project type and scale, and our team will get back to you after reviewing the details.',
  '공간과 기술을 연결하다.': 'Connecting Space and Technology.',
  'BIC는 공간 기획부터 설계·시공, LED 미디어 구축, 라이브 현장 운영까지': 'From spatial planning, design, and construction to LED media systems and live event operations,',
  '프로젝트 전 과정을 하나의 흐름으로 연결합니다.': 'BIC connects every stage of a project into one seamless process.',
  '회사개요': 'Overview', '회장 인사말': "Chairman's Message", '조직도': 'Organization',
  '현장을 이해하고, 끝까지 책임집니다.': 'We Understand the Site and See It Through.',
  'BIC는 공간을 만드는 기술과 현장을 운영하는 경험을 함께 갖춘 실행 중심의 기업입니다.': 'BIC is an execution-focused company combining the craft of building spaces with hands-on operational expertise.',
  '실내 건축 인테리어, LED·DOOH 시설물 설치 및 시공, 디지털 배너 렌탈, 라이브 행사 기획과 운영을 아우르며 프로젝트의 목적과 환경에 맞는 최적의 실행 방식을 제안합니다.': 'We cover interior architecture, LED and DOOH installation and construction, digital banner rental, and live event planning and operations, proposing the right execution plan for each project and environment.',
  '회사명': 'Company', '설립일': 'Established', '사업자등록번호': 'Business Registration No.', '소재지': 'Address',
  '주식회사 비아이씨': 'BIC Co., Ltd.', '2026년 7월 21일': 'July 21, 2026',
  '경기도 안성시 공도읍 정봉길 101-1, 2층': '2F, 101-1 Jeongbong-gil, Gongdo-eup, Anseong-si, Gyeonggi-do, Republic of Korea',
  '공간과 기술을 연결하는 실행력으로 더 나은 현장을 만들겠습니다.': 'We Create Better Sites by Connecting Space and Technology.',
  '안녕하십니까. 주식회사 비아이씨 회장 유정우입니다.': 'Welcome. I am Yoo Jeong-woo, Chairman of BIC Co., Ltd.',
  'BIC는 공간을 만드는 기술과 현장을 운영하는 경험을 바탕으로, 고객의 아이디어가 실제 현장에서 안정적으로 구현될 수 있도록 최선을 다하고 있습니다. 실내 건축 인테리어, LED·DOOH 미디어 구축, 라이브 행사 운영은 서로 다른 분야처럼 보이지만, 결국 사람과 공간, 기술을 정확하게 연결해야 완성된다는 공통점을 가지고 있습니다.': 'Built on expertise in spatial construction and on-site operations, BIC is committed to realizing our clients\' ideas reliably in the field. Interior architecture, LED and DOOH media systems, and live event operations may appear distinct, but each succeeds by connecting people, space, and technology with precision.',
  '우리는 계획부터 설계, 시공, 설치, 운영까지 전 과정을 책임지는 실행 중심의 파트너가 되겠습니다. 눈앞의 결과뿐 아니라 현장의 안전과 품질, 운영 이후의 지속 가능성까지 고려하며 고객과 함께 성장하겠습니다.': 'We will remain an execution-driven partner accountable for every stage, from planning and design to construction, installation, and operation. Beyond immediate results, we consider site safety, quality, and long-term sustainability as we grow together with our clients.',
  '앞으로도 기본을 지키는 자세와 축적된 경험, 유연한 협업을 바탕으로 신뢰받는 기업이 되겠습니다. 감사합니다.': 'With sound fundamentals, accumulated experience, and flexible collaboration, we will continue to earn your trust. Thank you.',
  '주식회사 비아이씨 회장': 'Chairman, BIC Co., Ltd.', '유정우': 'Yoo Jeong-woo',
  '역할은 명확하게, 실행은 유기적으로.': 'Clear Roles, Seamless Execution.', '회장': 'Chairman', '대표이사': 'Chief Executive Officer',
  'AV & DIGITAL DISPLAY SOLUTIONS': 'AV & DIGITAL DISPLAY SOLUTIONS', '운영팀': 'Operations Team', '시공팀': 'Construction Team',
  'OPERATION': 'OPERATION', 'CONSTRUCTION TEAM': 'CONSTRUCTION TEAM',
  '기획부터 시공, 설치와 운영까지 프로젝트 전 과정을 하나의 실행 체계로 연결합니다.': 'We connect planning, construction, installation, and operation through one integrated delivery system.',
  '1. LED·DOOH 사업': '1. LED & DOOH', '2. 실내 건축 인테리어': '2. Interior Architecture', '3. 라이브 행사 운영': '3. Live Event Operations',
  'LED & DOOH': 'LED & DOOH', '디지털 미디어가 공간에서 안정적으로 작동하도록': 'We design, build, and operate digital media environments',
  '설계·시공·설치·운영의 기준을 만듭니다.': 'that perform reliably in real spaces.',
  '공항, 상업시설, 공공공간 등 다양한 환경에 최적화된 DOOH 시설물을 구축합니다. 현장 조사부터 구조 검토, 전기·통신 공사, LED 설치, 콘텐츠 송출 테스트까지 전 과정을 통합 관리합니다.': 'We build DOOH installations optimized for airports, commercial venues, and public spaces. Our integrated management covers site surveys, structural reviews, electrical and network work, LED installation, and content transmission tests.',
  '디지털 배너는 프로젝트 기간과 운영 목적에 맞춰 설치 및 렌탈이 가능하며, 안정적인 현장 운영과 신속한 유지 대응까지 지원합니다.': 'Digital banners are available for installation or rental to suit each project timeline and purpose, with reliable on-site operation and responsive maintenance support.',
  '주요 서비스': 'Core Services', 'DOOH 시설물 설계·설치·시공': 'DOOH system design, installation, and construction',
  '대형 LED 미디어월 구축': 'Large-scale LED media walls', '디지털 배너 설치 및 렌탈': 'Digital banner installation and rental',
  '전기·통신·구조 통합 공사': 'Integrated electrical, network, and structural work', '콘텐츠 송출 테스트 및 운영 지원': 'Content transmission testing and operational support',
  '유지보수 및 현장 대응': 'Maintenance and on-site response', '구축 프로세스': 'Delivery Process',
  '현장 조사': 'Site Survey', '설계·구조 검토': 'Design & Structural Review', '제작·시공': 'Fabrication & Construction', '설치·세팅': 'Installation & Setup', '송출 테스트': 'Transmission Test', '운영·유지관리': 'Operation & Maintenance',
  '현장 실측, 동선, 시야각, 설치 환경을 확인합니다.': 'Review measurements, circulation, sightlines, and installation conditions.',
  '구조 안전성과 전기·통신 계획을 함께 검토합니다.': 'Review structural safety alongside electrical and network plans.',
  '검토된 설계에 따라 구조물과 시스템을 제작·시공합니다.': 'Fabricate and construct the system according to the approved design.',
  'LED, 제어 장비, 배선과 콘텐츠 환경을 현장에 세팅합니다.': 'Set up LED, control equipment, cabling, and the content environment on site.',
  '화면 품질과 콘텐츠 송출 상태를 점검하고 안정화합니다.': 'Test and stabilize display quality and content transmission.',
  '운영 지원과 유지보수로 안정적인 가동을 이어갑니다.': 'Maintain reliable operation through ongoing support and maintenance.',
  '협력 실행 구조': 'Collaborative Delivery Network', '다섯 전문 회사가 순환 구조로 연결되어': 'Five specialist companies work in a connected cycle', '영업부터 구축·운영까지 완결합니다.': 'to deliver sales, construction, and operation end to end.',
  'BIC는 프로젝트의 설계·시공·설치와 현장 실행을 담당합니다. 다이즈하이미디어를 중심으로 엑시스, 알투비, 라이브큐브와 연계해 국내 DOOH 사업을 빠르고 안정적으로 운영합니다.': 'BIC leads project design, construction, installation, and on-site execution. Working with Axis, R2B, and Livecube through Disehi Media, we deliver reliable and responsive DOOH projects in Korea.',
  '4개사 글로벌 협력': 'Four-Company Global Partnership', '다이즈하이미디어': 'DISEHI MEDIA', '사업기획 · 플랫폼 운영': 'Business planning & platform operation',
  '엑시스': 'AXIS', '디바이스 · 콘텐츠': 'Devices & content', '알투비': 'R2B', '해외 세일즈 · 마케팅': 'Global sales & marketing', '비아이씨': 'BIC', '설계 · 시공 · 설치': 'Design, construction & installation',
  '5개사 순환 클러스터': 'Five-Company Circular Cluster', '국내 영업 · 고객 발굴': 'Domestic sales & client development', '전략 수립 · 통합 관리': 'Strategy & integrated management', '현장 실행 · 구축': 'On-site delivery & construction', '라이브큐브': 'LIVECUBE', '방송 · 행사 운영': 'Broadcast & event operations', '인천공항 미디어월 통합운영': 'Incheon Airport Media Wall Operations',
  '기술 공급': 'Technology Supply', '글로벌 사업개발': 'Global Business Development', '통합운영 · 구축': 'Integrated Operation & Delivery',
  '지속운영': 'Ongoing Operation', '프로젝트 실행': 'Project Delivery', '국내영업': 'Domestic Sales', '글로벌 실행 구조': 'Global Delivery Structure', '국내 순환 클러스터': 'Domestic Circular Cluster',
  '공간의 목적과 브랜드의 방향을 읽고': 'We understand the purpose of the space and the direction of the brand,', '기획부터 시공까지 일관된 완성도를 만듭니다.': 'delivering consistent quality from planning through construction.',
  '상업공간, 업무공간, 행사공간 등 프로젝트 성격에 맞춰 공간을 계획하고 설계합니다. 기획 단계에서 동선과 기능, 재료, 예산을 함께 검토해 현실적인 실행안을 제시합니다.': 'We plan and design commercial, workplace, and event spaces around each project\'s needs. From the planning stage, we review circulation, function, materials, and budget to provide a practical execution plan.',
  '도면과 디자인에 머무르지 않고 실제 시공 과정의 품질과 디테일까지 관리합니다. 공정 간 조율과 현장 대응을 통해 계획된 디자인을 정확하게 구현합니다.': 'We go beyond drawings and concepts to manage construction quality and details, coordinating trades and responding on site to realize the intended design accurately.',
  '공간 기획 및 콘셉트 설계': 'Spatial planning and concept design', '평면·동선·기능 계획': 'Layout, circulation, and functional planning', '실시설계 및 마감재 제안': 'Construction documentation and finish selection', '목공·금속·도장·전기 등 통합 시공': 'Integrated carpentry, metal, painting, and electrical work', '현장 감리 및 품질 관리': 'Site supervision and quality control', '준공 후 하자 대응': 'Post-completion support',
  '프로젝트 목표 확인': 'Project Goals', '공간 기획': 'Spatial Planning', '디자인·실시설계': 'Design & Documentation', '견적·공정 계획': 'Estimate & Schedule', '통합 시공': 'Integrated Construction', '검수·준공': 'Inspection & Completion',
  '브랜드, 운영 방식, 예산과 일정의 우선순위를 정리합니다.': 'Define priorities for brand, operations, budget, and schedule.', '동선, 기능, 가구와 설비 조건을 바탕으로 공간 구성을 잡습니다.': 'Plan the space around circulation, function, furniture, and equipment requirements.', '재료와 디테일을 확정하고 현장에서 실행 가능한 도면으로 발전시킵니다.': 'Finalize materials and details and develop buildable drawings.', '범위별 비용과 공정 순서를 정리해 실행 계획을 확정합니다.': 'Set costs and sequence by scope to finalize the delivery plan.', '공정 간 간섭을 조율하며 설계 의도를 현장에 구현합니다.': 'Coordinate trades and bring the design intent to life on site.', '마감과 기능을 점검하고 보완 후 공간을 인도합니다.': 'Inspect finishes and functions, complete corrections, and hand over the space.',
  '기획, 공간, 기술, 운영을 하나의 팀으로 연결해': 'We connect planning, space, technology, and operations as one team', '관객이 경험하는 모든 순간을 완성합니다.': 'to shape every moment of the audience experience.',
  '기업 행사, 컨퍼런스, 공연, 라이브 스트리밍 등 다양한 형태의 행사를 기획하고 운영합니다. 행사 목적과 관객 규모에 맞춰 프로그램, 공간, 장비, 운영 인력을 설계합니다.': 'We plan and operate corporate events, conferences, performances, and live streams. Programs, spaces, equipment, and crews are designed around each event\'s objectives and audience size.',
  '음향과 LED 설치는 물론 무대와 관객 동선, 라이브 송출 환경까지 함께 구축합니다. 현장 변수에 즉시 대응할 수 있는 통합 운영 체계로 안정적인 진행을 지원합니다.': 'We build sound and LED systems, stages, audience circulation, and live broadcast environments, supported by an integrated operating system that responds quickly to on-site variables.',
  '행사 기획 및 운영 계획 수립': 'Event planning and operations strategy', '행사장 공간 계획 및 제작': 'Venue planning and production', '무대·LED·음향 시스템 설치': 'Stage, LED, and sound system installation', '라이브 촬영 및 스트리밍 운영': 'Live production and streaming', '현장 인력 및 진행 관리': 'On-site crew and show management', '리허설·본행사·철수 통합 운영': 'Integrated rehearsal, show, and strike operation',
  '행사 목적 정의': 'Define Objectives', '프로그램·공간 기획': 'Program & Space Planning', '시스템 설계': 'System Design', '현장 제작·설치': 'On-site Production & Installation', '리허설': 'Rehearsal', '본행사 운영': 'Live Operation',
  '브랜드 메시지, 관객, 행사 형식과 핵심 목표를 정리합니다.': 'Clarify the brand message, audience, event format, and primary objectives.', '세션 구성, 무대와 관객 동선, 운영 시나리오를 설계합니다.': 'Design the program, stage and audience circulation, and operating scenario.', '음향, LED, 촬영, 송출 장비와 인력 구성을 확정합니다.': 'Finalize sound, LED, camera, broadcast equipment, and staffing.', '공간과 무대, 장비를 설치하고 운영 환경을 구축합니다.': 'Install the space, stage, and equipment and build the operating environment.', '큐시트에 따라 전체 흐름과 기술 시스템을 사전 점검합니다.': 'Run through the full show flow and technical systems against the cue sheet.', '진행, 기술, 안전 상황을 실시간으로 관리해 행사를 완성합니다.': 'Manage show flow, technology, and safety in real time.',
  '포트폴리오': 'Portfolio', 'BIC가 공간과 기술, 운영을 연결해 완성한 프로젝트입니다.': 'Projects completed by BIC by connecting space, technology, and operations.',
  '전체': 'All', '무인카페': 'Unmanned Café', '앙호두 인천 간석점': 'Anghodu Incheon Ganseok', '건물관리 회사 오피스': 'Property Management Office',
  '외교부 아세안회의 국제 컨퍼런스': 'Ministry of Foreign Affairs ASEAN Conference', '한국 파스퇴르 연구소 세미나': 'Institut Pasteur Korea Seminar', '한국언론진흥재단 AI 빅데이터 컨퍼런스': 'Korea Press Foundation AI & Big Data Conference',
  'Gate.io 2024 Spring VIP Party in Korea': 'Gate.io 2024 Spring VIP Party in Korea', 'BBB Korea 인천공항 캠페인': 'BBB Korea Incheon Airport Campaign', 'Gate.io 2024 Summer VIP Party in Korea': 'Gate.io 2024 Summer VIP Party in Korea', 'LANCOME 압솔뤼 롱제비티 라인 론칭 행사': 'LANCÔME Absolue Longevity Launch Event', 'LANCOME 압솔뤼 롱제비티 라인 런칭 행사': 'LANCÔME Absolue Longevity Launch Event', '주한외교단 K-Local Pavilion 지자체 홍보': 'K-Local Pavilion for the Diplomatic Corps in Korea',
  '공간과 기술이 필요한 순간, 함께 시작하겠습니다.': 'When Space Meets Technology, Let Us Begin Together.', '프로젝트의 분야와 규모를 알려주시면 담당자가 내용을 확인한 뒤 안내해 드립니다.': 'Tell us about your project type and scale, and our team will contact you after reviewing the details.',
  '오시는 길': 'Location', '프로젝트 상담 및 문의': 'Project Consultation & Inquiry', '문의 유형': 'Inquiry Type', '실내 건축': 'Interior', '라이브 행사': 'Live Event', '기타 문의': 'Other',
  '회사명을 입력해주세요': 'Enter your company name', '담당자명': 'Contact Name', '담당자명을 입력해주세요': 'Enter the contact name', '연락처': 'Phone', '이메일': 'Email', '예상 일정': 'Expected Schedule', '예상 예산': 'Estimated Budget', '미정': 'Not decided', '1개월 이내': 'Within 1 month', '1~3개월': '1–3 months', '3개월 이상': 'More than 3 months', '협의 필요': 'To be discussed', '3천만원 미만': 'Under KRW 30M', '3천만~1억원': 'KRW 30M–100M', '1억원 이상': 'Over KRW 100M', '문의내용': 'Project Details', '프로젝트 내용, 희망 일정, 설치 장소와 규모 등을 자유롭게 작성해주세요.': 'Tell us about the project, preferred schedule, location, and scale.', '첨부파일': 'Attachment', '선택 · 최대 10MB': 'Optional · Up to 10 MB', '파일 선택 또는 드래그': 'Choose a file or drag it here', '개인정보 수집 및 이용에 동의합니다.': 'I agree to the collection and use of personal information.', '문의 답변 목적으로만 사용됩니다.': 'Your information will only be used to respond to this inquiry.', '문의 접수하기': 'Submit Inquiry',
  '프로젝트 개요': 'Project Overview', '업무 브리핑': 'Scope Brief', '담당 범위': 'Scope', '주요 마감': 'Key Finishes',
  '경기 군포시 당동': 'Dang-dong, Gunpo-si, Gyeonggi-do', '인천광역시 남동구 간석동': 'Ganseok-dong, Namdong-gu, Incheon', '서울특별시 성동구 성수동': 'Seongsu-dong, Seongdong-gu, Seoul', '경기도 평택시 비전동': 'Bijeon-dong, Pyeongtaek-si, Gyeonggi-do',
  '서울특별시 성동구': 'Seongdong-gu, Seoul', '서울특별시 강남구': 'Gangnam-gu, Seoul', '경기도 고양시': 'Goyang-si, Gyeonggi-do', '경기도 하남시': 'Hanam-si, Gyeonggi-do',
  '복합문화공간 대형 LED 미디어월': 'Large LED Media Wall for a Cultural Complex', '도심 상업시설 옥외 DOOH 전광판': 'Outdoor DOOH Display for an Urban Commercial Facility', '컨벤션센터 디지털 배너 시스템': 'Convention Center Digital Banner System', '리테일 쇼룸 LED 디스플레이 구축': 'Retail Showroom LED Display Installation',
  '메뉴 열기': 'Open menu', '메뉴 닫기': 'Close menu', '이전 사진': 'Previous image', '다음 사진': 'Next image', '포트폴리오 상세 보기': 'View portfolio details', '포트폴리오 상세 닫기': 'Close portfolio details',
  '문의가 접수되었습니다. 현재는 화면 시안 단계이며, 실제 발송 기능은 서버 연동 후 동작합니다.': 'Your inquiry has been received. This is currently a front-end prototype; email delivery will work after server integration.',
  '회사소개 — BIC': 'About — BIC', '사업분야 — BIC': 'Business — BIC', '포트폴리오 — BIC': 'Portfolio — BIC', '문의하기 — BIC': 'Contact — BIC',
  'BIC — 공간과 현장을 설계하고 완성합니다.': 'BIC — Designing Spaces, Delivering Experiences.', 'BIC 포트폴리오': 'BIC Portfolio', 'BIC 프로젝트 문의': 'Contact BIC About Your Project', 'BIC 회사소개 — 공간과 기술을 연결하다.': 'About BIC — Connecting Space and Technology.',
  '문의 접수 기능은 최종 이메일 확정 후 연결될 예정입니다.': 'Online inquiry submission will be connected once the final receiving email is confirmed.', '프로젝트 사진 크게 보기': 'View project image', '닫기': 'Close', '작업 단계': 'Project Stage',
  'JW 메리어트 호텔 살롱3 / 신라호텔 영빈관': 'JW Marriott Hotel Salon 3 / Shilla Hotel Yeong Bin Gwan', '판교 파스퇴르 본사': 'Institut Pasteur Korea, Pangyo', '프레스센터 20층 국제회의장': 'International Conference Hall, Korea Press Center', '워커힐 호텔 애스톤하우스': 'Aston House, Walkerhill Hotel', '인천공항 도심공항터미널': 'Incheon Airport City Air Terminal', '크레스톤72 Glass Hall': 'Creston 72 Glass Hall', '푸투라 서울': 'Futura Seoul', '신라호텔 영빈관': 'Yeong Bin Gwan, Shilla Hotel',
  '공간 특성에 맞춘 대형 LED 미디어월 설계 및 시공': 'Large LED media wall design and installation tailored to the space', '화면 비율과 관람 동선을 고려한 디스플레이 배치': 'Display layout planned around screen ratio and audience flow', '콘텐츠 송출 시스템 구축 및 운영 환경 세팅': 'Content delivery system implementation and operating setup', '건물 외벽 구조에 적합한 옥외용 LED 전광판 설치': 'Outdoor LED display installation suited to the building facade', '주·야간 시인성을 고려한 밝기와 화면 품질 조정': 'Image calibration for day and night visibility', '안정적인 콘텐츠 송출과 유지관리 환경 구축': 'Reliable content delivery and maintenance environment',
  '행사 안내와 광고 송출을 위한 디지털 배너 설치': 'Digital banners installed for event information and advertising', '다수 디스플레이의 통합 콘텐츠 운영 시스템 구성': 'Integrated content management across multiple displays', '행사별 화면 교체와 렌탈 운영이 가능한 구조 적용': 'Flexible setup for event-specific content and rental operation', '매장 공간과 제품 동선을 고려한 LED 디스플레이 설계': 'LED display design aligned with the showroom journey', '모듈 조립과 구조물·배선 일체 시공': 'Complete module, structure, and cabling installation', '영상 테스트와 색상 보정을 포함한 현장 셋업': 'On-site setup including playback tests and color calibration',
  '컨퍼런스 전체 음향': 'Full conference audio system', '모니터 6대, 프롬프터형 거치대': 'Six monitors with prompter-style stands', '현장 중계용 카메라': 'Cameras for live production', '현장음 및 통역 양방향 실시간 국제회의': 'Two-way international conferencing with live interpretation', '안정적인 백업 시스템': 'Reliable backup system', '개개인에게 딜리게이션 마이크 제공': 'Delegate microphones for individual participants', '세미나 전체 음향 및 영상 시스템': 'Complete seminar audio and video system', '국제 화상회의 양방향 송출': 'Two-way international video conferencing', '행사장 내부 음향과 회의 음향의 연결': 'Integration of venue and conference audio', '프레젠테이션 진행': 'Presentation operation',
  '세미나 촬영 중계 및 녹화': 'Seminar filming, live production, and recording', 'PPT와 발표자 화면 동시송출': 'Simultaneous output of slides and speaker video', '전체 음향 시스템': 'Complete audio system', '대형 전광판 스크린 설치': 'Large LED screen installation', '사진 및 영상 촬영': 'Photography and videography', '영어 진행 가능 MC, 아나운서 섭외': 'English-speaking MC and announcer coordination', '행사장 내,외부 구조물 설치': 'Indoor and outdoor event structure installation', '참여 부스용 집기 대여 및 백월 설치': 'Booth furniture rental and backdrop installation', '캠페인 부스 백월 제작 (백월 내 모니터 삽입)': 'Campaign booth backdrop with integrated monitor',
  '자원봉사자 인솔 요원 섭외': 'Volunteer coordinator staffing', '부스 키오스크 대여': 'Booth kiosk rental', '부스 데스크 및 집기 제작': 'Custom booth desk and fixture fabrication', '사진 및 영상 촬영 (실시간 업로드)': 'Photography and videography with real-time uploads', 'DJ 턴테이블 시스템': 'DJ turntable system', '스테이지 조명 및 안개효과': 'Stage lighting and haze effects', '실시간 통역 (3개 언어)': 'Live interpretation in three languages', '실시간 촬영 및 스트리밍': 'Live filming and streaming', '진행자용 프롬프터 출력': 'Prompter output for presenters', '현장 진행 감독 및 스텝 섭외': 'On-site director and production crew coordination', '스크린 삽입 포토부스 백월 설치': 'Photo booth backdrop with integrated screen', '언론보도용 사진 촬영': 'Press photography', '영어 진행 가능 MC 섭외': 'English-speaking MC coordination', '지자체 부스 목공제작 및 백월 패널 제작': 'Custom-built municipal booths and backdrop panels', '특산품 디피 및 구디백 준비': 'Local product display and gift bag preparation',
  '담당 범위 · 공간 기획, 3D 디자인, 실내 시공 및 가구·조명 설치': 'Scope · Space planning, 3D design, construction, furniture, and lighting', '주요 마감 · 도장, 우드 패턴 마감, 테라조 패턴 바닥, 금속·유리': 'Key finishes · Paint, wood pattern, terrazzo-pattern flooring, metal, and glass', '곡선형 간접조명과 밝은 색감을 적용해 작은 공간을 편안하고 선명하게 구성했습니다.': 'Curved indirect lighting and a bright palette create a comfortable, distinctive compact space.',
  '담당 범위 · 3D 디자인, 매장 동선 계획, 카운터·주방 시공, 전기·조명 및 사인 설치': 'Scope · 3D design, customer-flow planning, counter and kitchen construction, electrical, lighting, and signage', '주요 마감 · 도장, 우드 루버, 인조대리석 상판, 타일, 스테인리스': 'Key finishes · Paint, wood louvers, engineered stone, tile, and stainless steel', '밝은 뉴트럴 톤과 브랜드 포인트 컬러를 활용해 주문과 제조 동선이 명확한 소형 매장으로 완성했습니다.': 'A light neutral palette and brand accents define clear ordering and preparation zones.',
  '담당 범위 · 업무공간 구획, 회의실·라운지 계획, 천장·조명, 제작 가구 및 마감 시공': 'Scope · Workspace zoning, meeting rooms, lounge, ceilings, lighting, custom furniture, and finishes', '주요 마감 · 웜그레이 도장, 오크 무늬목, 카펫 타일, 유리 파티션, 금속 프레임': 'Key finishes · Warm-gray paint, oak veneer, carpet tile, glass partitions, and metal', '집중 업무공간과 협업 라운지를 분리하고 유리 파티션과 연속된 소재를 적용해 개방감과 업무 효율을 함께 높였습니다.': 'Focused work areas and collaborative lounges are separated while glass partitions retain openness.',
  '담당 범위 · 사무공간 구획, 유리 파티션, 천장·바닥, 제작 가구 및 조명 시공': 'Scope · Office zoning, glass partitions, ceilings, flooring, custom furniture, and lighting', '주요 마감 · 도장, 타일, 유리, 금속 프레임, 우드 마감': 'Key finishes · Paint, tile, glass, metal, and wood', '투명 파티션으로 채광과 개방감을 유지하고, 짙은 우드 제작 가구와 간접조명으로 안정감 있는 업무 공간을 완성했습니다.': 'Clear partitions preserve daylight, while dark woodwork and indirect lighting create a composed office.'
};

Object.assign(english, {
  '사업자등록번호 103-86-03839': 'Business Registration No. 103-86-03839',
  '주식회사 비아이씨': 'BIC Co., Ltd.',
  '경기도 안성시 공도읍 정봉길 101-1': '101-1 Jeongbong-gil, Gongdo-eup, Anseong-si, Gyeonggi-do',
  '경기도 안성시 공도읍 정봉길 101-1, 2층': '101-1 Jeongbong-gil, Gongdo-eup, Anseong-si, Gyeonggi-do, 2F',
  '경기도 안성시 공도읍 정봉길 101-1, 2층 201호': 'Unit 201, 2F, 101-1 Jeongbong-gil, Gongdo-eup, Anseong-si, Gyeonggi-do',
  '경기도 안성시 공도읍 정봉길 101-1 ↗': '101-1 Jeongbong-gil, Gongdo-eup, Anseong-si, Gyeonggi-do ↗',
  '2층 201호': 'Unit 201, 2F',
  '공간을 짓고,': 'We Build Spaces,',
  '장면을 완성합니다.': 'and Complete Experiences.',
  'LED 시설물, 실내 건축 인테리어, 라이브 현장 운영까지.': 'From LED installations and interior architecture to live event operations.',
  'BIC는 아이디어가 실제 공간에서 작동하도록 만듭니다.': 'BIC turns ideas into spaces that work in the real world.',
  '우리는 복잡한 현장을': 'We Turn Complex Sites',
  '하나의 흐름으로 만듭니다.': 'into One Seamless Process.',
  '기획의 의도를 읽고, 구조를 세우고, 현장의 변수를 해결합니다. 서로 다른 전문 영역을 연결하는 실행력이 BIC의 방식입니다.': 'We understand the intent, build the structure, and solve on-site variables. Connecting diverse expertise through execution is the BIC way.',
  '기획의 의도를 읽고, 구조를 세우고, 현장의 변수를 해결합니다.': 'We understand the intent, build the structure, and solve on-site variables.',
  '서로 다른 전문 영역을 연결하는 실행력이 BIC의 방식입니다.': 'Connecting diverse expertise through execution is the BIC way.',
  '회사소개 보기': 'About BIC',
  'BIC 회사소개 보기': 'Learn more about BIC',
  '공간과 디지털 기술, 현장 운영을 연결하는 BIC': 'BIC connecting space, digital technology, and on-site operations',
  '서로 다른 전문성,': 'Different Expertise,',
  '하나의 완성도.': 'One Complete Result.',
  'DOOH 시설물 설치·시공부터 디지털 배너 설치와 렌탈까지 최적화된 디스플레이 환경을 구축합니다.': 'We build optimized display environments, from DOOH construction to digital banner installation and rental.',
  '공간의 목적과 사용성을 고려해 기획부터 시공, 마감까지 완성도 높은 실내 환경을 구현합니다.': 'We create refined interiors from planning through construction and finishing, tailored to each space’s purpose and use.',
  '행사 기획, 공간 제작, 음향과 LED 설치, 현장 운영을 하나의 흐름으로 완성합니다.': 'We integrate event planning, spatial production, audio and LED systems, and on-site operations into one seamless flow.',
  '실행으로 증명합니다.': 'Proven Through Execution.',
  '설계와 기술, 운영이 하나의 결과로 이어진 BIC의 현장을 확인해 보세요.': 'Explore BIC projects where design, technology, and operations come together as one result.',
  '설계와 기술, 운영이 하나의 결과로 이어진': 'Explore BIC projects where design, technology, and operations',
  'BIC의 현장을 확인해 보세요.': 'come together as one result.',
  'Gate.io 워커힐 호텔 애스톤하우스': 'Gate.io · Walkerhill Hotel Aston House',
  'Gate.io 워커힐 애스톤하우스': 'Gate.io · Walkerhill Aston House',
  'Gate.io 워커힐 호텔 애스톤하우스 행사 현장': 'Gate.io event at Walkerhill Hotel Aston House',
  '다음 장면을': 'Ready to Create',
  '함께 만들어볼까요?': 'What Comes Next?',
  '사업 분야와 프로젝트 규모를 간단히 알려주세요.': 'Tell us briefly about your project type and scale.',
  '담당자가 확인 후 연락드리겠습니다.': 'Our team will review it and get back to you.',
  'BIC는 공간 기획부터 제작·시공, 디지털 설비 구축, 현장 운영까지 하나의 흐름으로 수행하는 현장 전문 기업입니다.': 'BIC is an on-site specialist that delivers spatial planning, fabrication and construction, digital infrastructure, and field operations through one integrated process.',
  '현장을 이해하고,': 'We Understand the Site',
  '끝까지 책임집니다.': 'and Take Responsibility to the Finish.',
  '주식회사 비아이씨는 LED·DOOH 시설물 설치 및 시공, 디지털 배너 설치·렌탈, 실내 건축 인테리어, 라이브 행사 운영을 수행합니다. 공간·기술·운영을 연결해 고객의 아이디어가 실제 현장에서 안정적으로 구현되도록 합니다.': 'BIC Co., Ltd. provides LED and DOOH installation and construction, digital banner installation and rental, interior architecture, and live event operations. By connecting space, technology, and operations, we bring our clients’ ideas to life reliably on site.',
  '공간과 기술을 연결해': 'Connecting Space and Technology',
  '새로운 가치를 만들겠습니다.': 'to Create New Value.',
  '주식회사 비아이씨는 공간을 이해하는 시선과 현장을 완성하는 기술력을 바탕으로 고객의 아이디어를 현실로 만들어갑니다.': 'BIC Co., Ltd. turns our clients’ ideas into reality through a deep understanding of space and the technical expertise to complete each site.',
  'LED·DOOH 시설물, 실내 건축 인테리어, 라이브 행사 운영까지 서로 다른 전문 영역을 하나의 흐름으로 연결하고, 기획부터 시공과 운영에 이르는 모든 과정에서 책임 있는 결과를 제공하겠습니다.': 'We connect LED and DOOH installations, interior architecture, and live event operations in one seamless workflow, delivering accountable results from planning through construction and operation.',
  '변화하는 환경에 유연하게 대응하면서도 기본과 품질을 지키는 기업, 고객과 파트너가 오래 신뢰할 수 있는 기업으로 성장하겠습니다.': 'We will remain flexible in a changing environment while upholding sound fundamentals and quality, growing into a company trusted by clients and partners for years to come.',
  '전문성과 실행력을 연결하는': 'Connecting Expertise and Execution—',
  'BIC의 조직 구조입니다.': 'This Is How BIC Is Organized.',
  'BIC 조직도': 'BIC Organization',
  '유정우 회장': 'Chairman Yoo Jeong-woo',
  'BIC는 공간 기획부터 제작·시공, 디지털 설비 구축, 현장 운영까지 하나의 흐름으로 수행합니다. 여러 전문 영역을 유기적으로 연결해 일정과 품질의 일관성을 확보하고, 현장의 다양한 변수에 신속하게 대응합니다.': 'BIC delivers spatial planning, fabrication and construction, digital infrastructure, and on-site operations through one integrated workflow. By connecting specialized disciplines, we maintain consistency in schedule and quality while responding quickly to changing site conditions.',
  '도시와 공간을 연결하는': 'Connecting Cities and Spaces',
  '디지털 미디어 환경.': 'through Digital Media.',
  '옥외 환경과 공간 목적을 분석해 DOOH 시설물, LED 전광판, 디지털 배너의 설치·시공·렌탈·운영 지원까지 제공합니다.': 'We analyze outdoor conditions and spatial objectives to provide installation, construction, rental, and operational support for DOOH structures, LED displays, and digital banners.',
  'DOOH 시설물 설치 및 시공': 'DOOH Structure Installation and Construction',
  'LED 디스플레이 구축': 'LED Display Systems',
  '디지털 배너 설치 및 렌탈': 'Digital Banner Installation and Rental',
  '현장 테스트 및 운영 지원': 'On-site Testing and Operations Support',
  '현장 조사': 'Site Survey', '설치 환경과 조건 확인': 'Verify installation environment and conditions',
  '장비·구조 설계': 'Equipment & Structural Design', '현장에 맞는 시스템 계획': 'Plan a system tailored to the site',
  '제작·설치': 'Fabrication & Installation', '구조물과 디스플레이 시공': 'Build structures and displays',
  '테스트': 'Testing', '화면·전원·안전 상태 점검': 'Inspect display, power, and safety',
  '운영 지원': 'Operations Support', '안정적인 운영과 유지관리': 'Reliable operation and maintenance',
  '설치에서 운영까지,': 'From Installation to Operation,', '연결된 실행 구조.': 'One Connected Delivery Network.',
  'BIC는 전문 기업들과의 유기적인 협력을 통해 LED·DOOH 사업의 기획, 영업, 시공, 콘텐츠, 운영 전 과정을 연결합니다.': 'BIC works closely with specialist partners to connect planning, sales, construction, content, and operations across the LED and DOOH business.',
  '5개사 순환 클러스터': 'Five-company Integrated Cluster', '통합 운영': 'Integrated Operations', '매체 운영': 'Media Operations', '광고·영업': 'Advertising & Sales', '시공·설치': 'Construction & Installation', '광고 콘텐츠': 'Advertising Content', '편성·표출': 'Scheduling & Display',
  '각 분야의 실행 결과가 다음 단계로 연결되고, 운영 데이터와 성과는 다시 기획에 반영되는 순환형 협업 체계입니다.': 'Each team’s output feeds the next stage, while operating data and results are brought back into planning through a continuous collaboration cycle.',
  '글로벌 사업 4개사 협력 구조': 'Four-company Global Partnership', '운영·매체': 'Operations & Media', '콘텐츠': 'Content',
  '해외 프로젝트에서 매체 운영, 현지 시공, 광고 영업, 콘텐츠 제작 역량을 결합해 사업 전 과정을 안정적으로 수행합니다.': 'For overseas projects, we combine media operations, local construction, advertising sales, and content production to deliver every stage reliably.',
  '목적과 사용성을 담은': 'Designed for Purpose and Use,', '완성도 높은 공간.': 'Finished to a Higher Standard.',
  '상업·업무·행사 공간의 목적과 동선을 고려해 기획, 설계, 자재 선정, 제작·시공, 마감까지 전 과정을 통합 수행합니다.': 'We manage the entire process—from planning and design to material selection, fabrication, construction, and finishing—around each commercial, workplace, or event space.',
  '공간 콘셉트 및 동선 기획': 'Spatial Concept & Circulation Planning', '실내 건축 설계·견적': 'Interior Design & Estimation', '제작·시공 및 공정 관리': 'Fabrication, Construction & Scheduling', '마감 품질 검수': 'Finish Quality Inspection',
  '요구사항 분석': 'Requirements Analysis', '목적·예산·일정 확인': 'Confirm objectives, budget, and schedule', '공간 기획': 'Space Planning', '콘셉트와 동선 구성': 'Develop concept and circulation', '설계·견적': 'Design & Estimate', '도면·자재·비용 구체화': 'Define drawings, materials, and costs', '시공': 'Construction', '공정별 제작과 현장 관리': 'Fabrication and on-site management by phase', '품질 검수': 'Quality Inspection', '마감 확인 후 최종 인계': 'Final handover after finish inspection',
  '기획의 의도를 현장의 디테일로 구현합니다.': 'We translate design intent into precise on-site details.',
  '한 팀이 처음부터 끝까지 책임지는 통합 프로세스로 디자인 의도와 시공 품질의 간극을 줄입니다.': 'One team takes responsibility from start to finish, closing the gap between design intent and construction quality.',
  '기획부터 운영까지,': 'From Planning to Operation,', '하나로 움직이는 현장.': 'One Fully Coordinated Site.',
  '국제회의, 세미나, 브랜드 행사와 캠페인의 기획부터 공간 제작, 기술 시스템 구축, 실시간 송출과 당일 운영까지 하나의 팀으로 관리합니다.': 'One team manages international conferences, seminars, brand events, and campaigns—from planning and spatial production to technical systems, live transmission, and event-day operations.',
  '행사 콘셉트·프로그램 및 공간 기획': 'Event Concept, Program & Space Planning', '무대·브랜딩 부스·백월 제작 및 설치': 'Stage, Branded Booth & Backdrop Production', '라이브 음향·LED·영상 믹싱 시스템': 'Live Audio, LED & Video Mixing Systems', '실시간 스트리밍·다국어 통역 송출': 'Live Streaming & Multilingual Interpretation', '사진·영상 촬영 및 라이브 레코딩': 'Photography, Videography & Live Recording', '리허설·진행 인력 섭외 및 현장 운영': 'Rehearsals, Staffing & On-site Operations',
  '행사 기획': 'Event Planning', '목표와 프로그램 구성': 'Define objectives and program', '공간·기술 계획': 'Space & Technical Planning', '무대·음향·LED 시스템 설계': 'Design stage, audio, and LED systems', '공간 제작과 장비 세팅': 'Build the space and set equipment', '리허설': 'Rehearsal', '진행·기술 요소 사전 점검': 'Pre-check production and technical elements', '라이브 운영': 'Live Operations', '현장 진행과 기술 통합 관리': 'Integrated show and technical management',
  '기술과 공간을 연결해 몰입도 높은 현장을 완성합니다.': 'We connect technology and space to create immersive live experiences.',
  '음향·영상·LED·통역·스트리밍을 하나의 운영 체계로 연결하고, 백업 시스템과 숙련된 현장 인력을 통해 국제회의부터 브랜드 행사까지 안정적인 라이브 경험을 제공합니다.': 'We integrate audio, video, LED, interpretation, and streaming in one operating system, backed by redundant systems and experienced crews for reliable events of every scale.',
  '현장에서 완성한': 'Built and Proven', '우리의 결과들.': 'on Site.',
  '공간의 목적과 기술의 역할을 정확히 이해하고, 기획의 의도를 현장의 결과로 구현합니다.': 'We understand the purpose of each space and the role of technology, turning design intent into tangible on-site results.',
  'LANCOME 압솔뤼 롱제비티 라인 론칭 행사': 'Lancôme Absolue Longevity Line Launch',
  '공간과 기술이 필요한 순간,': 'When Space and Technology Matter,', '함께 시작하겠습니다.': 'Let’s Begin Together.',
  '지도에서 열기': 'Open in Google Maps', '주식회사 비아이씨 위치 지도': 'BIC location map',
  '알투뷔': 'R2B',
  '1천만원 미만': 'Under KRW 10 million', '1천만원~5천만원': 'KRW 10–50 million', '5천만원 이상': 'KRW 50 million or more', '3개월 이후': 'More than 3 months',
  '3개 언어 실시간 통역, 촬영·스트리밍, 프롬프트 및 현장 운영': 'Live interpretation in three languages, filming and streaming, prompting, and on-site operations',
  'JW 메리어트 호텔 살롱3 · 신라호텔 영빈관': 'JW Marriott Hotel Salon 3 · Yeong Bin Gwan, Shilla Hotel',
  '스크린·포토부스·백월 제작, 촬영, MC 및 특산품·기념품 준비': 'Screen, photo booth, and backdrop production; filming; MC coordination; and local gifts',
  '음향·영상 시스템, 국제 화상회의 양방향 송출 및 프레젠테이션': 'Audio and video systems, two-way international video conferencing, and presentation operation',
  '음향·영상 시스템, 전광판 설치, PPT 동시 송출 및 프레젠테이션': 'Audio and video systems, LED display installation, simultaneous slide output, and presentation operation',
  '음향·전광판, 실시간 촬영, 진행 인력, DJ·조명·안개효과': 'Audio and LED systems, live filming, event staff, DJ, lighting, and haze effects',
  '음향·전광판, 촬영, 진행 인력, 구조물·부스·백월 설치': 'Audio and LED systems, filming, event staff, and structure, booth, and backdrop installation',
  '전체 음향, 모니터, 카메라, 양방향 국제회의 및 통역 시스템': 'Complete audio, monitor, and camera setup with two-way international conferencing and interpretation',
  '캠페인 부스·백월 제작, 촬영, 운영 인력 및 키오스크 대여': 'Campaign booth and backdrop production, filming, operations staff, and kiosk rental',
  '(바닥에서 1미터 목공구조물 위에 전광판 설치)': '(LED display installed on a one-meter-high timber structure)',
  '1차: 2024. 06. 28 / 2차: 2025. 12. 05': 'Phase 1: 2024. 06. 28 / Phase 2: 2025. 12. 05',
  'LANCOME 압솔뤼 롱지비티 라인 런칭 행사': 'Lancôme Absolue Longevity Line Launch'
});

const t = (value) => english[value] || value;

const localizePage = () => {
  if (!isEnglish) return;
  document.documentElement.lang = 'en';
  document.title = t(document.title);
  document.querySelectorAll('title, meta[name="description"]').forEach((element) => {
    if (element.tagName === 'META') element.content = t(element.content);
  });
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const value = node.nodeValue;
    const core = value.trim();
    if (!core || !english[core]) return;
    node.nodeValue = value.replace(core, english[core]);
  });
  document.querySelectorAll('[aria-label], [placeholder], [title], [alt]').forEach((element) => {
    ['aria-label', 'placeholder', 'title', 'alt'].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      let value = element.getAttribute(attribute);
      value = t(value)
        .replace(/이전 사진/g, 'Previous image')
        .replace(/다음 사진/g, 'Next image')
        .replace(/대표 이미지/g, 'featured image')
        .replace(/현장/g, 'on-site')
        .replace(/사진/g, 'photo');
      element.setAttribute(attribute, value);
    });
  });
  const englishAddress = '101-1 Jeongbong-gil, Gongdo-eup, Anseong-si, Gyeonggi-do';
  const encodedAddress = encodeURIComponent(englishAddress);
  const mapFrame = document.querySelector('.map-placeholder iframe');
  if (mapFrame) {
    mapFrame.src = `https://www.google.com/maps?q=${encodedAddress}&output=embed&hl=en`;
    mapFrame.title = 'BIC location map';
  }
  document.querySelectorAll('.location-card a[href*="google.com/maps"]').forEach((link) => {
    link.href = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}&hl=en`;
  });
};

const configureLanguage = () => {
  document.querySelectorAll('.lang').forEach((button) => {
    button.innerHTML = isEnglish ? '<span>KR /</span> EN' : 'KR <span>/ EN</span>';
    button.setAttribute('aria-label', isEnglish ? '한국어 페이지로 전환' : 'Switch to English');
    button.addEventListener('click', () => {
      const url = new URL(location.href);
      if (isEnglish) url.searchParams.delete('lang');
      else url.searchParams.set('lang', 'en');
      location.href = url.href;
    });
  });
  if (!isEnglish) return;
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || /^(https?:)?\/\//.test(href)) return;
    const [pathAndQuery, hash = ''] = href.split('#');
    const url = new URL(pathAndQuery, location.href);
    url.searchParams.set('lang', 'en');
    link.setAttribute('href', `${url.pathname.split('/').pop()}${url.search}${hash ? `#${hash}` : ''}`);
  });
};

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', t(isOpen ? '메뉴 닫기' : '메뉴 열기'));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.classList.remove('open');
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

const businessTabs = [...document.querySelectorAll('.business-tab')];
const businessPanels = [...document.querySelectorAll('.business-panel')];

const openBusinessTab = (tab, updateHash = true) => {
  businessTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-selected', String(isActive));
    item.tabIndex = isActive ? 0 : -1;
  });
  businessPanels.forEach((panel) => {
    const isActive = panel.dataset.panel === tab.dataset.tab;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
  if (updateHash && history.replaceState) history.replaceState(null, '', `#${tab.dataset.tab}`);
};

businessTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => openBusinessTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextTab = businessTabs[(index + direction + businessTabs.length) % businessTabs.length];
    openBusinessTab(nextTab);
    nextTab.focus();
  });
});

if (businessTabs.length) {
  const requestedTab = location.hash.slice(1);
  const initialTab = businessTabs.find((tab) => tab.dataset.tab === requestedTab) || businessTabs[0];
  openBusinessTab(initialTab, false);
  if (['led', 'interior', 'live'].includes(requestedTab)) {
    document.querySelector('#business')?.scrollIntoView();
  }
}

const aboutTabs = [...document.querySelectorAll('.about-tab')];
const aboutPanels = [...document.querySelectorAll('.about-panel')];

const openAboutTab = (tab, updateHash = true) => {
  aboutTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-selected', String(isActive));
    item.tabIndex = isActive ? 0 : -1;
  });
  aboutPanels.forEach((panel) => {
    const isActive = panel.dataset.aboutPanel === tab.dataset.aboutTab;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
  if (updateHash && history.replaceState) history.replaceState(null, '', `#${tab.dataset.aboutTab}`);
};

aboutTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => openAboutTab(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextTab = aboutTabs[(index + direction + aboutTabs.length) % aboutTabs.length];
    openAboutTab(nextTab);
    nextTab.focus();
  });
});

if (aboutTabs.length) {
  const requestedAboutTab = location.hash.slice(1);
  const initialAboutTab = aboutTabs.find((tab) => tab.dataset.aboutTab === requestedAboutTab) || aboutTabs[0];
  openAboutTab(initialAboutTab, false);
  if (['overview', 'history', 'message', 'organization'].includes(requestedAboutTab)) {
    document.querySelector('#about')?.scrollIntoView();
  }
}

const portfolioTabs = [...document.querySelectorAll('.portfolio-tab')];
const projectCards = [...document.querySelectorAll('.project-card')];

portfolioTabs.forEach((tab) => tab.addEventListener('click', () => {
  const filter = tab.dataset.filter;
  portfolioTabs.forEach((item) => {
    const isActive = item === tab;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-pressed', String(isActive));
  });
  projectCards.forEach((card) => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));

const portfolioBriefings = {
  '복합문화공간 대형 LED 미디어월': {
    label: 'LED · DOOH', title: '복합문화공간 대형 LED 미디어월', date: '2025', location: '서울특별시 성동구',
    items: ['공간 특성에 맞춘 대형 LED 미디어월 설계 및 시공', '화면 비율과 관람 동선을 고려한 디스플레이 배치', '콘텐츠 송출 시스템 구축 및 운영 환경 세팅']
  },
  '도심 상업시설 옥외 DOOH 전광판': {
    label: 'LED · DOOH', title: '도심 상업시설 옥외 DOOH 전광판', date: '2025', location: '서울특별시 강남구',
    items: ['건물 외벽 구조에 적합한 옥외용 LED 전광판 설치', '주·야간 시인성을 고려한 밝기와 화면 품질 조정', '안정적인 콘텐츠 송출과 유지관리 환경 구축']
  },
  '컨벤션센터 디지털 배너 시스템': {
    label: 'LED · DOOH', title: '컨벤션센터 디지털 배너 시스템', date: '2026', location: '경기도 고양시',
    items: ['행사 안내와 광고 송출을 위한 디지털 배너 설치', '다수 디스플레이의 통합 콘텐츠 운영 시스템 구성', '행사별 화면 교체와 렌탈 운영이 가능한 구조 적용']
  },
  '리테일 쇼룸 LED 디스플레이 구축': {
    label: 'LED · DOOH', title: '리테일 쇼룸 LED 디스플레이 구축', date: '2026', location: '경기도 하남시',
    items: ['매장 공간과 제품 동선을 고려한 LED 디스플레이 설계', '모듈 조립과 구조물·배선 일체 시공', '영상 테스트와 색상 보정을 포함한 현장 셋업']
  },
  '외교부 아세안회의 국제 컨퍼런스': {
    title: '외교부 아세안회의 국제 컨퍼런스', date: '2022. 06. 15 / 07. 01', location: 'JW 메리어트 호텔 살롱3 / 신라호텔 영빈관',
    items: ['컨퍼런스 전체 음향', '모니터 6대, 프롬프터형 거치대', '현장 중계용 카메라', '현장음 및 통역 양방향 실시간 국제회의', '안정적인 백업 시스템', '개개인에게 딜리게이션 마이크 제공']
  },
  '한국 파스퇴르 연구소 세미나': {
    title: '한국 파스퇴르 연구소 세미나', date: '2022. 12. 14', location: '판교 파스퇴르 본사',
    items: ['세미나 전체 음향 및 영상 시스템', '국제 화상회의 양방향 송출', '행사장 내부 음향과 회의 음향의 연결', '프레젠테이션 진행']
  },
  '한국언론진흥재단 AI 빅데이터 컨퍼런스': {
    title: '한국언론진흥재단 AI 빅데이터 컨퍼런스', date: '2023. 12. 06', location: '프레스센터 20층 국제회의장',
    items: ['세미나 전체 음향 및 영상 시스템', '(바닥에서 1미터 목공구조물 위에 전광판 설치)', '세미나 촬영 중계 및 녹화', 'PPT와 발표자 화면 동시송출', '프레젠테이션 진행']
  },
  'Gate.io 2024 Spring VIP Party in Korea': {
    title: 'GATE.io 2024 Spring VIP Party in Korea', date: '2024. 06. 28', location: '워커힐 호텔 애스톤하우스',
    items: ['전체 음향 시스템', '대형 전광판 스크린 설치', '사진 및 영상 촬영', '영어 진행 가능 MC, 아나운서 섭외', '행사장 내,외부 구조물 설치', '참여 부스용 집기 대여 및 백월 설치']
  },
  'BBB Korea 인천공항 캠페인': {
    title: 'BBB Korea 인천공항 캠페인', date: '2024. 08. 20', location: '인천공항 도심공항터미널',
    items: ['캠페인 부스 백월 제작 (백월 내 모니터 삽입)', '사진 및 영상 촬영', '자원봉사자 인솔 요원 섭외', '부스 키오스크 대여', '부스 데스크 및 집기 제작']
  },
  'Gate.io 2024 Summer VIP Party in Korea': {
    title: 'GATE.io 2024 Summer VIP Party in Korea', date: '2024. 09. 05', location: '크레스톤72 Glass Hall',
    items: ['전체 음향 시스템', '대형 전광판 스크린 설치', '사진 및 영상 촬영 (실시간 업로드)', '영어 진행 가능 MC, 아나운서 섭외', 'DJ 턴테이블 시스템', '스테이지 조명 및 안개효과']
  },
  'LANCOME 압솔뤼 롱제비티 라인 론칭 행사': {
    title: 'LANCOME 압솔뤼 롱지비티 라인 런칭 행사', date: '2025. 01. 15', location: '푸투라 서울',
    items: ['실시간 통역 (3개 언어)', '실시간 촬영 및 스트리밍', '진행자용 프롬프터 출력', '현장 진행 감독 및 스텝 섭외']
  },
  '주한외교단 K-Local Pavilion 지자체 홍보': {
    title: '주한외교단 K-Local Pavilion 지자체 홍보', date: '1차: 2024. 06. 28 / 2차: 2025. 12. 05', location: '신라호텔 영빈관',
    items: ['스크린 삽입 포토부스 백월 설치', '언론보도용 사진 촬영', '영어 진행 가능 MC 섭외', '지자체 부스 목공제작 및 백월 패널 제작', '특산품 디피 및 구디백 준비']
  }
};

const interiorPortfolioProjects = {
  '01': {
    title: '무인카페', location: '경기 군포시 당동', label: 'INTERIOR PROJECT', heading: '프로젝트 개요',
    items: ['담당 범위 · 공간 기획, 3D 디자인, 실내 시공 및 가구·조명 설치', '주요 마감 · 도장, 우드 패턴 마감, 테라조 패턴 바닥, 금속·유리', '곡선형 간접조명과 밝은 색감을 적용해 작은 공간을 편안하고 선명하게 구성했습니다.'],
    stages: { '3d': 4, construction: 4, completed: 4 }
  },
  '02': {
    title: '앙호두 인천 간석점', location: '인천광역시 남동구 간석동', label: 'INTERIOR PROJECT', heading: '프로젝트 개요',
    items: ['담당 범위 · 3D 디자인, 매장 동선 계획, 카운터·주방 시공, 전기·조명 및 사인 설치', '주요 마감 · 도장, 우드 루버, 인조대리석 상판, 타일, 스테인리스', '밝은 뉴트럴 톤과 브랜드 포인트 컬러를 활용해 주문과 제조 동선이 명확한 소형 매장으로 완성했습니다.'],
    stages: { '3d': 3, construction: 5, completed: 2 }
  },
  '03': {
    title: '성수 크리에이티브 오피스', location: '서울특별시 성동구 성수동', label: 'INTERIOR PROJECT', heading: '프로젝트 개요',
    items: ['담당 범위 · 업무공간 구획, 회의실·라운지 계획, 천장·조명, 제작 가구 및 마감 시공', '주요 마감 · 웜그레이 도장, 오크 무늬목, 카펫 타일, 유리 파티션, 금속 프레임', '집중 업무공간과 협업 라운지를 분리하고 유리 파티션과 연속된 소재를 적용해 개방감과 업무 효율을 함께 높였습니다.'],
    stages: { construction: 1, completed: 1 }
  },
  '04': {
    title: '건물관리 회사 오피스', location: '경기도 평택시 비전동', label: 'INTERIOR PROJECT', heading: '프로젝트 개요',
    items: ['담당 범위 · 사무공간 구획, 유리 파티션, 천장·바닥, 제작 가구 및 조명 시공', '주요 마감 · 도장, 타일, 유리, 금속 프레임, 우드 마감', '투명 파티션으로 채광과 개방감을 유지하고, 짙은 우드 제작 가구와 간접조명으로 안정감 있는 업무 공간을 완성했습니다.'],
    stages: { construction: 3, completed: 4 }
  }
};

const interiorStageLabels = { '3d': '3D DESIGN', construction: 'CONSTRUCTION', completed: 'COMPLETED' };

document.querySelectorAll('[data-interior-project]').forEach((card) => {
  const projectNumber = card.dataset.interiorProject;
  const project = interiorPortfolioProjects[projectNumber];
  const track = card.querySelector('.project-slides');
  if (!project || !track) return;
  card.portfolioBriefing = project;
  card.interiorStageSlides = {};
  Object.entries(project.stages).forEach(([stage, count]) => {
    card.interiorStageSlides[stage] = Array.from({ length: count }, (_, index) => {
      const image = document.createElement('img');
        image.src = `assets/interior/project-${projectNumber}-${stage}-${String(index + 1).padStart(2, '0')}.webp?v=20260824-2`;
      image.alt = `${project.title} ${interiorStageLabels[stage]} ${index + 1}`;
      image.dataset.stageLabel = interiorStageLabels[stage];
      image.loading = 'eager';
      return image;
    });
  });
  track.replaceChildren(...Object.values(card.interiorStageSlides).flat());
});

projectCards.forEach((card) => {
  const currentTitle = card.querySelector('h2')?.textContent.trim();
  const briefing = portfolioBriefings[currentTitle];
  if (!briefing) return;
  const summary = card.querySelector('h2').parentElement;
  const date = document.createElement('small');
  const title = document.createElement('h2');
  const location = document.createElement('p');
  date.textContent = `${t(briefing.label || 'LIVE EVENT')} · ${briefing.date}`;
  title.textContent = t(briefing.title);
  location.className = 'project-location';
  location.textContent = t(briefing.location);
  summary.replaceChildren(date, title, location);
  card.portfolioBriefing = briefing;
});

const projectSliders = [...document.querySelectorAll('.project-slider')];
let lightboxSlides = [];
let lightboxIndex = 0;
let lightbox;
let showLightboxSlide;
let lightboxProjectCard;

if (projectSliders.length) {
  lightbox = document.createElement('div');
  lightbox.className = 'portfolio-lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', '프로젝트 사진 크게 보기');
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="닫기">×</button><div class="lightbox-scroll"><div class="lightbox-visual"><button class="lightbox-prev" type="button" aria-label="이전 사진">‹</button><img class="lightbox-image" alt=""><button class="lightbox-next" type="button" aria-label="다음 사진">›</button></div><article class="lightbox-project-info" hidden><div class="lightbox-stage-tabs" role="tablist" aria-label="작업 단계" hidden></div><small></small><h2></h2><p class="lightbox-location"></p><h3>업무 브리핑</h3><ul></ul></article></div><span class="lightbox-count" aria-live="polite"></span>';
  document.body.append(lightbox);

  showLightboxSlide = (nextIndex) => {
    lightboxIndex = (nextIndex + lightboxSlides.length) % lightboxSlides.length;
    const source = lightboxSlides[lightboxIndex];
    const image = lightbox.querySelector('.lightbox-image');
    image.src = source.getAttribute('src') || source.src;
    image.alt = source.alt;
    const briefing = lightboxProjectCard?.portfolioBriefing || source.closest('.project-card')?.portfolioBriefing;
    const projectInfo = lightbox.querySelector('.lightbox-project-info');
    projectInfo.hidden = !briefing;
    if (briefing) {
      const stageTabs = projectInfo.querySelector('.lightbox-stage-tabs');
      stageTabs.hidden = !lightboxProjectCard?.interiorStageSlides;
      if (lightboxProjectCard?.interiorStageSlides) {
        stageTabs.replaceChildren(...Object.keys(lightboxProjectCard.interiorStageSlides).map((stage) => {
          const button = document.createElement('button');
          const isActive = source.dataset.stageLabel === interiorStageLabels[stage];
          button.type = 'button';
          button.textContent = interiorStageLabels[stage];
          button.classList.toggle('active', isActive);
          button.setAttribute('aria-selected', String(isActive));
          button.addEventListener('click', () => {
            lightboxSlides = lightboxProjectCard.interiorStageSlides[stage].map((sourceImage) => {
              const stageImage = document.createElement('img');
              stageImage.src = sourceImage.getAttribute('src') || sourceImage.src;
              stageImage.alt = sourceImage.alt;
              stageImage.dataset.stageLabel = sourceImage.dataset.stageLabel;
              stageImage.loading = 'eager';
              return stageImage;
            });
            showLightboxSlide(0);
          });
          return button;
        }));
      } else {
        stageTabs.replaceChildren();
      }
      const stageLabel = source.dataset.stageLabel;
      projectInfo.querySelector('small').textContent = [t(briefing.label || 'LIVE EVENT'), t(stageLabel || briefing.date)].filter(Boolean).join(' · ');
      projectInfo.querySelector('h2').textContent = t(briefing.title);
      projectInfo.querySelector('.lightbox-location').textContent = t(briefing.location);
      projectInfo.querySelector('h3').textContent = t(briefing.heading || '업무 브리핑');
      projectInfo.querySelector('ul').replaceChildren(...briefing.items.map((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = t(item);
        return listItem;
      }));
    }
    lightbox.querySelector('.lightbox-count').textContent = `${lightboxIndex + 1} / ${lightboxSlides.length}`;
  };
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  };
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showLightboxSlide(lightboxIndex - 1));
  lightbox.querySelector('.lightbox-next').addEventListener('click', () => showLightboxSlide(lightboxIndex + 1));
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showLightboxSlide(lightboxIndex - 1);
    if (event.key === 'ArrowRight') showLightboxSlide(lightboxIndex + 1);
  });
}

projectSliders.forEach((slider) => {
  const track = slider.querySelector('.project-slides');
  const firstImage = track.querySelector('img');
  const isLiveSlider = firstImage?.getAttribute('src')?.includes('assets/live-slides/project-');
  const projectMatch = isLiveSlider ? firstImage?.getAttribute('src')?.match(/project-(\d{2})-/) : null;
  const projectImageCounts = { '01': 9, '02': 7, '03': 7, '04': 7, '05': 4, '06': 8, '07': 7, '08': 5 };
  const projectNumber = projectMatch?.[1];
  const imageCount = projectImageCounts[projectNumber];

  if (imageCount && firstImage) {
    const altPrefix = firstImage.alt.replace(/\s*\d+$/, '');
    const images = Array.from({ length: imageCount }, (_, index) => {
      const image = document.createElement('img');
      image.src = `assets/live-slides/project-${projectNumber}-${String(index + 1).padStart(2, '0')}.webp`;
      image.alt = `${altPrefix} ${index + 1}`;
      if (index > 0) image.loading = 'lazy';
      return image;
    });
    track.replaceChildren(...images);
  }

  let slides = [...track.querySelectorAll('img')];
  const counter = slider.querySelector('.slider-count');
  let current = 0;
  let touchStartX = 0;

  const showSlide = (nextIndex) => {
    if (!slides.length) return;
    current = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    counter.textContent = `${current + 1} / ${slides.length}`;
  };

  slider.querySelector('.slider-prev').addEventListener('click', () => showSlide(current - 1));
  slider.querySelector('.slider-next').addEventListener('click', () => showSlide(current + 1));
  slides.forEach((image, index) => image.addEventListener('click', () => {
    lightboxSlides = slides;
    lightboxProjectCard = image.closest('.project-card');
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    showLightboxSlide(index);
    lightbox.querySelector('.lightbox-scroll').scrollTop = 0;
    lightbox.querySelector('.lightbox-close').focus();
  }));
  slider.setSlides = (nextSlides) => {
    slides = nextSlides;
    track.replaceChildren(...slides);
    showSlide(0);
  };
  slider.addEventListener('touchstart', (event) => { touchStartX = event.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) showSlide(current + (distance < 0 ? 1 : -1));
  }, { passive: true });
  showSlide(0);
});

document.querySelectorAll('[data-interior-project]').forEach((card) => {
  const slider = card.querySelector('.project-slider');
  const summaryLabel = card.querySelector('small');
  const completedSlides = card.interiorStageSlides.completed || Object.values(card.interiorStageSlides)[0];
  slider.setSlides(completedSlides);
  summaryLabel.textContent = 'INTERIOR PROJECT';
});

const inquiryForm = document.querySelector('.inquiry-form');
const attachmentInput = inquiryForm?.querySelector('input[type="file"]');
const fileDrop = inquiryForm?.querySelector('.file-drop');
const updateAttachmentLabel = () => {
  const label = inquiryForm.querySelector('.file-label');
  const files = [...attachmentInput.files];
  label.textContent = files.length ? files.map((file) => file.name).join(', ') : t('파일 선택 또는 드래그');
};
attachmentInput?.addEventListener('change', () => {
  updateAttachmentLabel();
});
fileDrop?.addEventListener('dragover', (event) => { event.preventDefault(); fileDrop.classList.add('dragging'); });
fileDrop?.addEventListener('dragleave', () => fileDrop.classList.remove('dragging'));
fileDrop?.addEventListener('drop', (event) => {
  event.preventDefault();
  fileDrop.classList.remove('dragging');
  attachmentInput.files = event.dataTransfer.files;
  updateAttachmentLabel();
});
inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const notice = inquiryForm.querySelector('.form-notice');
  notice.textContent = t('문의 접수 기능은 최종 이메일 확정 후 연결될 예정입니다.');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

configureLanguage();
localizePage();
