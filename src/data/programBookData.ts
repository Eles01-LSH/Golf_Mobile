// 제24회 영·호남 친선골프대회 프로그램북 데이터
// 출처: source/detail.docx (제23회 프로그램북 원문 텍스트) + 사용자 제공 2026년 행사 정보
// ⚠️ "확인 필요"로 표시된 항목은 원본 이미지/자료가 아직 제공되지 않아 실제 데이터를 넣지 않았습니다.
//    임의의 이름·금액·조 편성을 지어내지 않았으니, 원본을 받는 대로 이 파일만 채우면 됩니다.

import photoJeongJongMan from "../assets/speakers/정종만.jpg";
import photoLeeJaeSik from "../assets/speakers/이재식.jpg";
import photoKangJeongHun from "../assets/speakers/강정훈.jpg";
import photoKimSangHo from "../assets/speakers/김상호.jpg";
import photoKimJungGi from "../assets/speakers/김중기.jpg";
import photoLeeYongHo from "../assets/speakers/이용호.jpg";
import photoKimYoungCheol from "../assets/speakers/김영철.jpg";
import photoJeongJongManFull from "../assets/speakers/정종만-full.jpg";
import photoLeeJaeSikFull from "../assets/speakers/이재식-full.jpg";
import photoKangJeongHunFull from "../assets/speakers/강정훈-full.jpg";
import photoKimSangHoFull from "../assets/speakers/김상호-full.jpg";
import photoKimJungGiFull from "../assets/speakers/김중기-full.jpg";
import photoLeeYongHoFull from "../assets/speakers/이용호-full.jpg";
import photoKimYoungCheolFull from "../assets/speakers/김영철-full.jpg";

export type AssociationKey = "초청인사" | "통우회" | "정록회" | "정통회" | "전통회";

export interface EventInfo {
  editionNumber: number;
  editionLabel: string; // 제24회
  editionOrdinal: string; // 24TH
  title: string; // 영·호남 친선골프대회
  date: string; // 2026-09-30
  dateLabel: string; // 2026. 9. 30. 10:00
  venueName: string; // 골드레이크CC
  venueAddress: string; // 전남광주통합특별시 나주시 남평읍 나주호로 442-129
  venuePhone: string; // 061-339-3000
  teamCount: number; // 43
  playerCount: number; // 166
  teeOffTime: string; // 13:00 샷건 스타트
}

export const eventInfo: EventInfo = {
  editionNumber: 24,
  editionLabel: "제24회",
  editionOrdinal: "24TH",
  title: "영·호남 친선골프대회",
  date: "2026-09-30",
  dateLabel: "2026. 9. 30. 10:00",
  venueName: "골드레이크CC",
  venueAddress: "전남광주통합특별시 나주시 남평읍 나주호로 442-129",
  venuePhone: "061-339-3000",
  teamCount: 43,
  playerCount: 166,
  teeOffTime: "13:00 샷건 스타트",
};

// 지난 대회(제23회, 2025) 정보 — 대회 연혁/히스토리 카드에서 참고용으로 사용
export const previousEventInfo = {
  editionLabel: "제23회",
  dateLabel: "2025. 10. 27.",
  venueName: "골프존카운티 드래곤",
};

// ---------------------------------------------------------------------------
// 대회 연혁
// ---------------------------------------------------------------------------

export interface HistoryMilestone {
  id: string;
  year: string;
  text: string;
}

export const historyIntro =
  "1998년 부산·경남 정록회와 대구·경북 정통회의 친선 라운딩에서 출발해, 영남과 호남 정보통신업계가 함께 어울리는 전국 최대 규모의 친선 골프대회로 자리잡았습니다.";

export const historyMilestones: HistoryMilestone[] = [
  {
    id: "h1998",
    year: "1998",
    text: "부산·경남 정록회와 대구·경북 정통회가 '영남지역 통신업체 친선골프대회'라는 이름으로 시작.",
  },
  {
    id: "h2000",
    year: "2000",
    text: "부산·경남 이정부·전지원 회장, 광주·전남 김만웅 회장, 대구·경북 황보유·서동천 회장 다섯 명이 모여 영·호남 정보통신업체 교류의 장을 만들자는 뜻을 모음.",
  },
  {
    id: "h2001",
    year: "2001",
    text: "10월 15일 광주·전남 통우회 주최로 클럽900CC에서 정통회·정록회·통우회 회원 70여 명이 참여해 제1회 대회 개최.",
  },
  {
    id: "h2002",
    year: "2002",
    text: "부산 지역으로 순회 개최.",
  },
  {
    id: "h2003",
    year: "2003",
    text: "대구 지역으로 순회 개최.",
  },
  {
    id: "h2004",
    year: "2004",
    text: "전북 전통회가 발족하며 4개 시·도회가 순회하는 '영·호남 정보통신사업자 친선골프대회'로 확대.",
  },
  {
    id: "h2025",
    year: "2025",
    text: "제23회 대회를 골프존카운티 드래곤에서 개최.",
  },
  {
    id: "h2026",
    year: "2026",
    text: "제24회 대회를 골드레이크CC에서 개최.",
  },
];

export const historyFullText = `본 대회는 1998년 당시 부산·경남의 정록회와 대구·경북의 정통회가 영남지역 통신업체 친선골프대회라는 대회명으로 시작이 되었으며, 2000년 부산·경남의 이정부·전지원 회장님과 광주·전남의 김만웅 회장님과 대구·경북의 황보유·서동천 회장님 다섯 분이 모여 영·호남 정보통신업체 간의 상호 교류의 장을 만들어 동과 서의 화합과 친목을 도모하자는 의견으로 태동하였습니다.

그 이듬해인 2001년 10월 15일 광주·전남 통우회 주최로 클럽900CC에서 정통회, 정록회, 통우회 회원 70여 명이 참여하여 제1회 대회를 개최하였으며 2002년 부산, 2003년 대구 지역으로 순회하게 되었습니다.

전북은 개인 자격으로 참여를 해오다 2004년에 전통회가 발족되면서 4개 시·도회가 순회하는 영·호남 정보통신사업자 친선골프대회로 시작하여 올해로 24회째를 맞이 하게 되었습니다.

역대 회장님과 선배님들의 열정과 헌신적인 노력으로 결성된 본 대회는 영·호남의 화합과 친목을 가장 우선시하는 전국 정보통신업계의 가장 모범적인 대회임을 소개해 드립니다.`;

// ---------------------------------------------------------------------------
// 인사말 / 축사
// ---------------------------------------------------------------------------

export interface Speech {
  id: string;
  title: string;
  authorName: string;
  authorRole: string;
  photoUrl?: string; // 작은 원형 아바타용 (정사각형 크롭)
  photoFullUrl?: string; // 확대 보기(라이트박스)용 원본 비율 이미지
  preview: string[]; // 앞부분 3~4줄
  fullParagraphs: string[]; // 전문
  needsVerification?: boolean;
}

// 제24회(2026) 대회사 원문
export const hostSpeech: Speech = {
  id: "host-speech-2026",
  title: "대회사",
  authorName: "정종만",
  authorRole: "통우회 회장",
  photoUrl: photoJeongJongMan,
  photoFullUrl: photoJeongJongManFull,
  preview: [
    "안녕하십니까?",
    "존경하고 사랑하는 영·호남 회원 여러분!!",
    "그리고 뜻깊은 자리를 빛내주시기 위해 참석해 주신, 존경하는 이재식 중앙회장님, 강정훈 이사장님, 그리고 전국 시·도 회장님과 내외 귀빈 여러분!",
  ],
  fullParagraphs: [
    "안녕하십니까?",
    "존경하고 사랑하는 영·호남 회원 여러분!!",
    "그리고 뜻깊은 자리를 빛내주시기 위해 참석해 주신, 존경하는 이재식 중앙회장님, 강정훈 이사장님, 그리고 전국 시·도 회장님과 내외 귀빈 여러분!",
    "오늘 제24회 영호남 친선교류 골프대회에 함께해 주셔서 진심으로 감사드립니다.",
    "오늘 하루 함께 운동하고, 웃고, 정을 나누면서 역시 사람과 사람의 인연이 참 소중하다는 생각을 했습니다.",
    "대구·경북, 부울경, 전북, 광주·전남이 지역은 달라도 정보통신이라는 하나의 울타리 안에서 앞으로도 좋은 우정, 좋은 인연 계속 이어가기를 바랍니다.",
    "오늘 함께해 주신 모든 분들께 다시 한번 감사드리고, 맛있는 음식 드시면서 즐거운 시간 보내시기 바랍니다.",
    "감사합니다.",
  ],
};

// 제24회(2026) 축사 원문 모음 — 사용자가 순서대로 전달한 6편 전문 반영
export const congratulatorySpeeches: Speech[] = [
  {
    id: "speech-central-chairman",
    title: "중앙회장 축사",
    authorName: "이재식",
    authorRole: "한국정보통신공사협회 중앙회장",
    photoUrl: photoLeeJaeSik,
    photoFullUrl: photoLeeJaeSikFull,
    preview: ["영·호남 회원 여러분! 안녕하십니까? 한국정보통신공사협회 중앙회장 이재식입니다."],
    fullParagraphs: [
      "영·호남 회원 여러분! 안녕하십니까? 한국정보통신공사협회 중앙회장 이재식입니다.",
      "영·호남 회원 친선 골프대회의 성대한 개최를 진심으로 축하드립니다.",
      "이번 행사가 성공적으로 개최될 수 있도록 물심양면으로 애써주신 광주·전남도회 정종만 통우회 회장님을 비롯하여 부산·울산·경남도회 김영철 정록회 회장님, 대구·경북도회 김중기 정통회 회장님, 전북특별자치도회 이용호 전통회 회장님께 깊은 감사의 말씀 드립니다.",
      "아울러, 바쁜 일정에도 불구하고 귀한 발걸음을 해주신 영·호남 회원 여러분께도 진심으로 환영과 감사의 인사를 전합니다.",
      "영·호남 친선 골프대회는 지역의 경계를 넘어 회원님들이 한자리에 모이는 소중한 자리로서, 우리 정보통신공사업계가 함께 성장하고 발전해 나가는 뜻깊은 화합의 장입니다.",
      "오늘 이 자리를 통해 영·호남 회원 여러분께서 서로를 격려하며 공사업계의 희망찬 미래를 함께 열어나가는 든든한 동반자가 되어주시기를 기대합니다.",
      "저 역시 중앙회장으로서 회원 여러분의 권익을 보호하고 경영환경을 개선하는 데 최선의 노력을 다하겠습니다.",
      "끝으로, 풍성한 결실의 계절인 가을처럼 회원 여러분의 가정마다 행복이 가득하시고, 하시는 모든 사업이 번창하시기를 진심으로 기원합니다.",
      "감사합니다.",
    ],
  },
  {
    id: "speech-gongje-chairman",
    title: "정보통신공제조합 이사장 축사",
    authorName: "강정훈",
    authorRole: "정보통신공제조합 이사장",
    photoUrl: photoKangJeongHun,
    photoFullUrl: photoKangJeongHunFull,
    preview: ["안녕하십니까? 영·호남 통신가족 여러분! 정보통신공제조합 이사장 강정훈입니다."],
    fullParagraphs: [
      "안녕하십니까? 영·호남 통신가족 여러분! 정보통신공제조합 이사장 강정훈입니다.",
      "풍요로운 결실의 계절을 맞아 아름다운 나주 골드레이크CC에서 「영·호남 친선 골프대회」가 개최된 것을 진심으로 축하드립니다.",
      "먼저, 바쁘신 일정에도 불구하고 오늘 이 자리를 함께 빛내주신 제가 늘 존경하는 이재식 중앙회장님, 그리고 이번 행사를 정성껏 준비해 주신 통우회 정종만 회장님과 광주·전남도회 김상호 도회장님께 깊은 감사의 말씀을 드립니다.",
      "아울러 뜻 깊은 자리에 함께 해 주신 전통회 이용호 회장님 / 정록회 김영철 회장님 / 정통회 김중기 회장님을 비롯한 모든 회원사 여러분께도 진심으로 감사를 드립니다.",
      "존경하는 영·호남 통신가족 여러분!",
      "영·호남의 우정과 화합으로 이어온 이 대회가 어느덧 24년의 역사와 전통을 이어오고 있습니다.",
      "지역은 달라도 우리는 정보통신산업의 발전을 위해 함께 걸어가는 든든한 동반자라고 생각합니다.",
      "저에게도 오늘 이 자리는 남다른 의미가 있습니다. 여러분의 성원 속에 시작한 3년의 이사장 임기도 어느덧 마지막 해를 맞았습니다.",
      "그동안 보내주신 따뜻한 격려와 신뢰에 진심으로 감사드리며, 남은 임기에도 초심을 잃지 않고 조합과 조합원의 발전을 위해 끝까지 최선을 다하겠습니다.",
      "오늘 푸른 필드에서 승패보다는 서로의 우정을 나누고, 영·호남의 정을 더욱 돈독히 하는 뜻깊은 시간이 되시기를 바랍니다.",
      "여러분의 건승과 회원사의 무궁한 발전을 기원드립니다.",
      "감사합니다.",
    ],
  },
  {
    id: "speech-gwangju-jeonnam",
    title: "한국정보통신공사협회 광주·전남도회 회장 축사",
    authorName: "김상호",
    authorRole: "한국정보통신공사협회 광주·전남도회 회장",
    photoUrl: photoKimSangHo,
    photoFullUrl: photoKimSangHoFull,
    preview: [
      "존경하는 영호남 정보통신 가족 여러분, 환영합니다. 풍요로운 결실의 계절을 맞아 영호남 지역의 화합과 발전을 위한 '영호남 골프대회'를 이곳 빛고을 광주의 골드레이크 CC에서 개최하게 되어 매우 뜻깊게 생각합니다. 바쁘신 일정 중에도 자리를 빛내 주신 내외 귀빈 여러분께 광주전남도회를 대표하여 진심으로 환영의 인사를 드립니다.",
    ],
    fullParagraphs: [
      "존경하는 영호남 정보통신 가족 여러분, 환영합니다. 풍요로운 결실의 계절을 맞아 영호남 지역의 화합과 발전을 위한 '영호남 골프대회'를 이곳 빛고을 광주의 골드레이크 CC에서 개최하게 되어 매우 뜻깊게 생각합니다. 바쁘신 일정 중에도 자리를 빛내 주신 내외 귀빈 여러분께 광주전남도회를 대표하여 진심으로 환영의 인사를 드립니다.",
      "먼저, 우리 협회의 수장이신 이재식 중앙회장님과 정보통신 금융을 선도하시는 정보통신공제조합 강정훈 이사장님의 귀한 발걸음에 깊은 감사를 드립니다. 또한 이번 대회를 주관해서 준비한 우리 광주전남도회 통우회 정종만 회장님 그리고 대구경북도회 정통회 김중기 회장님, 부산울산경남도회 정록회 김영철 회장님과 전북특별자치도회 전통회 이용호 회장님을 비롯한 영호남 4개 단체 회원 여러분의 뜨거운 열정과 성원에 진심으로 감사드립니다.",
      "영남과 호남은 대한민국 정보통신 산업의 뼈대를 이루며 국가 경제 발전의 핵심적인 역할을 수행해 왔습니다. 지금의 급변하는 초연결 AI의 대변혁 시대까지, 우리 영호남 정보통신인들이 보여준 굳건한 연대와 상생의 정신은 업계의 크고 작은 위기를 극복하는 가장 강력한 원동력이었습니다. 오늘 행사는 단순한 친목 도모를 넘어, 영남과 호남이 다시 한번 마음을 열고 소통하며 미래의 동반자로서 상생 발전을 다짐하는 귀중한 연대의 장입니다. 푸른 필드 위에서 그동안 쌓인 현업의 스트레스를 모두 날려버리시고, 서로의 지혜와 우정을 나누는 따뜻하고 행복한 시간이 되시기를 바랍니다.",
      "끝으로 이번 대회를 위해 아낌없는 후원과 성원을 보내주신 모든 분께 다시 한번 머리 숙여 감사드립니다. 오늘 함께하신 모든 분의 가정과 일터에 늘 건강과 만복이 가득하시기를 기원하며, 영호남 정보통신 가족 모두의 무궁한 발전을 기원합니다.",
      "감사합니다.",
    ],
  },
  {
    id: "speech-jeongnokhoe",
    title: "정록회장 축사",
    authorName: "김영철",
    authorRole: "부산·울산·경남도회 정록회 회장",
    photoUrl: photoKimYoungCheol,
    photoFullUrl: photoKimYoungCheolFull,
    preview: ["부·울·경 정록회 회장 김영철입니다."],
    fullParagraphs: [
      "부·울·경 정록회 회장 김영철입니다.",
      "존경하는 영·호남 골프 회원 여러분 그리고 귀한 자리에 함께해 주신 내빈 여러분 반갑습니다.",
      "천년 역사를 자랑하는 이곳 나주에 자리잡은 골드레이크CC에서 영호남 대회를 준비해 주신 통우회 회장님과 통우회 회원님들께 감사드립니다.",
      "영호남 골프대회를 통해서 서로 소통하고 화합하는 정보통신인들의 축제가 되기를 바라면서, 참가하신 모든 분들의 건강과 행운을 기원하며, 웃음과 우정이 가득한 자리가 되기를 바랍니다.",
      "마지막으로, 참석하신 모든 분들의 가정에 화목과 사업 번창하시기를 기원하며, 오늘의 진정한 우승자는 이 자리에 함께한 여러분 모두입니다.",
      "감사합니다.",
    ],
  },
  {
    id: "speech-jeongtonghoe",
    title: "정통회장 축사",
    authorName: "김중기",
    authorRole: "대구·경북도회 정통회 회장",
    photoUrl: photoKimJungGi,
    photoFullUrl: photoKimJungGiFull,
    preview: [
      "안녕하십니까. 대구·경북 정보통신 골프회 '정통회' 회장 김중기입니다.",
    ],
    fullParagraphs: [
      "안녕하십니까. 대구·경북 정보통신 골프회 '정통회' 회장 김중기입니다.",
      "먼저 결실의 계절을 맞아, 30여년의 긴 시간 동안 변함없는 우정을 이어온 '영·호남 정보통신사업자 친선 골프대회'를 성대히 개최하게 되어 매우 기쁘고 뜻깊게 생각합니다.",
      "아울러 먼 길을 마다하지 않고 한걸음에 달려와 함께해 주신 영호남지역 회원 여러분께 진심으로 감사의 인사를 드립니다.",
      "지난 1990년대 첫걸음을 뗀 우리 친선 골프대회가 어느덧 31년이라는 깊은 역사를 쌓았습니다. 빠르게 변화하는 정보통신 산업의 최전선에서 바쁜 나날을 보내면서도, 영·호남의 정보통신인들이 한자리에 모여 서로를 격려하고 소통할 수 있었던 것은 모두 여러분의 깊은 애정과 적극적인 참여 덕분입니다.",
      "오늘 이 자리는 단순한 승패를 겨루는 운동의 장이 아닙니다. 지난 30여년의 추억을 나누고, 앞으로 다가올 새로운 30년의 상생과 협력을 다짐하는 '화합과 우정의 축제'입니다.",
      "녹음이 짙은 필드 위에서 그동안 쌓였던 스트레스는 모두 날려버리시고, 서로 따뜻한 정과 덕담을 나누는 보람찬 하루가 되시기를 바랍니다.",
      "오늘 대회를 준비해 주신 광주·전남 통우회 관계자 여러분의 노고에 깊이 감사드리며, 참석하신 모든 영·호남 정보통신 가족 여러분의 사업에 무궁한 발전과 가정에 건강과 행복이 늘 가득하시기를 기원합니다.",
      "감사합니다.",
    ],
  },
  {
    id: "speech-jeontonghoe",
    title: "전통회장 축사",
    authorName: "이용호",
    authorRole: "전북특별자치도회 전통회 회장",
    photoUrl: photoLeeYongHo,
    photoFullUrl: photoLeeYongHoFull,
    preview: ["전북특별자치도 골프동호회 전통회 회장 이용호 인사드립니다!"],
    fullParagraphs: [
      "전북특별자치도 골프동호회 전통회 회장 이용호 인사드립니다! 존경하는 영호남 골프 동회인 여러분! 오늘 이 자리를 함께 해 주셔서 진심으로 감사드립니다. 아울러 이번 영호남대회가 성공적인 개최를 위해 애써주신 전남광주통우회 정종만 회장님과 회원 여러분의 노고에도 박수를 보냅니다.",
      "오늘 이 자리는 영호남 정보통신회원간의 소통하고 우정을 깊게 나누는 화합의 자리입니다. 오늘만큼은 승패에 연연하지 않고 푸른 잔디위에 서로를 격려하며, 참석하신 회원분들 모두 부상없이 즐겁게 라운딩하고 평소 실력을 발휘하시길 바랍니다.",
      "다시 한번 영호남친선골프대회 개최를 축하드리며, 지속적인 영호남 회원간의 우정이 꾸준히 이어지기를 기원합니다.",
      "함께하신 모든 영호남회원 여러분 사업의 건승과 가정의 행복이 가득하시길 바라며 인사에 가름합니다.",
    ],
  },
];

// ---------------------------------------------------------------------------
// 행사 일정
// ---------------------------------------------------------------------------

export interface ScheduleItem {
  id: string;
  start: string; // "09:30"
  end?: string; // "10:00"
  title: string;
  location: string;
  detail?: string[];
}

// 원본: 행사 개요 및 행사 시간계획표 이미지 (2026.9.30(수) 기준)
export const scheduleItems: ScheduleItem[] = [
  {
    id: "s1",
    start: "10:00",
    end: "11:40",
    title: "도착 및 참가자 등록(환복) · 중식",
    location: "클럽하우스 1층 로비 · 골드레이크 1층 레스토랑",
  },
  {
    id: "s2",
    start: "11:40",
    end: "12:10",
    title: "내빈소개 및 개회사",
    location: "힐코스 1번홀",
  },
  {
    id: "s3",
    start: "12:10",
    end: "12:40",
    title: "경기방식소개, 사진촬영 및 시타(2그룹)",
    location: "힐코스 1번홀",
  },
  {
    id: "s4",
    start: "13:00",
    end: "18:00",
    title: "운동",
    location: "단체전 · 개인전",
  },
  {
    id: "s5",
    start: "18:30",
    end: "19:00",
    title: "만찬장 이동 및 식전공연",
    location: "중흥골드스파리조트 1층 대연회장",
  },
  {
    id: "s6",
    start: "18:40",
    end: "19:10",
    title: "만찬",
    location: "중흥골드스파리조트 1층 대연회장",
  },
  {
    id: "s7",
    start: "19:10",
    end: "20:30",
    title: "의전행사 및 시상식 등",
    location: "중흥골드스파리조트 1층 대연회장",
    detail: [
      "통우회장 대회사",
      "축사(중앙회장, 조합이사장, 김상호 도회장)",
      "찬조금품 협찬자(업체) 소개",
      "시상식",
      "이벤트(경품 추첨 등)",
    ],
  },
  {
    id: "s8",
    start: "20:30",
    title: "폐회 및 해산",
    location: "",
  },
];

// ---------------------------------------------------------------------------
// 참가자 명단 (2026년 제24회 확정 명단, 사용자 제공 원문 그대로 반영)
// ---------------------------------------------------------------------------

export interface Participant {
  id: string;
  no: number;
  name: string;
  company: string;
  association: AssociationKey;
}

// 초청인사 — 원문 번호에 빠진 번호(3,5,6,7,8,10)가 있어 확인 필요할 수 있으나,
// 지어내지 않고 전달받은 번호 그대로 반영했습니다.
const guestRaw: [number, string, string][] = [
  [1, "이재식", "중앙회장님"],
  [2, "강정훈", "조합이사장님"],
  [4, "남궁훈", "경기도회장님"],
  [9, "유수상", "인천광역시회장님"],
  [11, "김형민", "충북도회장님"],
  [12, "양방훈", "제주특별자치도 회장님"],
  [13, "전광찬", "협회 중앙회 이사"],
  [14, "이은수", "협회 경기도회 전 회장"],
  [15, "송혜선", "경기도회 부회장"],
  [16, "박민우", "경기도회 부회장"],
  [17, "김만웅", "전 광주전남도회장님"],
  [18, "최공호", "(주)엔탑엔지니어링"],
  [19, "윤종아", "아라텔레콤(유)"],
  [20, "윤풍식", "㈜국민"],
];

const tongwooRaw: [number, string, string][] = [
  [1, "김상호", "(주)온시스템즈"],
  [2, "정종만", "(유)지원통신"],
  [3, "채강석", "㈜코리아넷"],
  [4, "김정기", "(주)산들네트웍스"],
  [5, "이건국", "(주)정인이엔시"],
  [6, "이종모", "(주)메가정보통신"],
  [7, "이인중", "㈜부원정보통신"],
  [8, "진승원", "케이탑솔루션 주식회사"],
  [9, "김정훈", "한양공영(주)"],
  [10, "김용우", "(주)정보통신공사"],
  [11, "기승주", "대신티엔아이(주)"],
  [12, "김대희", "(주)동아이앤씨"],
  [13, "박기만", "디유씨앤아이티(유)"],
  [14, "양해용", "주식회사 영풍"],
  [15, "윤영규", "유한회사 에이탑"],
  [16, "박화진", "(주)화인미디어텍"],
  [17, "구학인", "㈜구성이엔씨"],
  [18, "김정곤", "대신네트웍스㈜"],
  [19, "김현종", "세은정보기술"],
  [20, "최수형", "㈜커넥트온"],
  [21, "변경덕", "㈜위즈씨엔아이"],
  [22, "서정", "(유)다담정보통신"],
  [23, "서영균", "동양인터엠"],
  [24, "김순식", "아주통신㈜"],
  [25, "장준옥", "㈜동양이앤티"],
  [26, "김필호", "(주)원네트웍"],
  [27, "손대겸", "태건(주)"],
  [28, "양경호", "유한회사 광명이엔시"],
  [29, "신일식", "㈜미래정보"],
  [30, "이준철", "㈜정보시스템"],
  [31, "김민수", "빛고을정보통신"],
  [32, "이상호", "㈜유진시스템"],
  [33, "이승호", "㈜조인테크"],
  [34, "박승수", "유현정보통신"],
  [35, "김종필", "(주)아이티벨리"],
  [36, "이동기", "㈜대덕전산"],
  [37, "범중철", "중앙티디아이㈜"],
  [38, "권필준", "㈜이노탑"],
  [39, "황해은", "에이치테크㈜"],
  [40, "임용관", "서경정보통신"],
  [41, "양총모", "㈜동부이엔씨"],
  [42, "노정만", "(주)제이엠정보통신"],
  [43, "이태주", "㈜이지정보통신"],
  [44, "조병훈", "㈜금광"],
  [45, "김호정", "주식회사 에스엠"],
  [46, "송진용", "보선㈜"],
  [47, "김철수", "㈜에스디"],
  [48, "최진기", "㈜백심"],
  [49, "문병대", "(주)비온시이노베이터"],
  [50, "양성윤", "㈜세원씨엔에스"],
  [51, "채종원", "㈜나노텔레콤"],
  [52, "안현선", "㈜백림정보"],
  [53, "조용오", "㈜호경"],
  [54, "이다솔", "아나운서"],
];

const jeongnokRaw: [number, string, string][] = [
  [1, "김태연", "앤시정보기술㈜"],
  [2, "김정교", "씨오션전자(주)"],
  [3, "김용문", "대은정보"],
  [4, "이해교", "새한정보통신"],
  [5, "최시헌", "(주)두나우"],
  [6, "변현석", "(주)부일아이티"],
  [7, "김종열", "혜인티엔에스㈜"],
  [8, "정길영", "거광이엔티"],
  [9, "김태권", "(주)협성임프"],
  [10, "구태수", "(주)유디피시스"],
  [11, "김성기", "신성아이시티(주)"],
  [12, "강병열", "우주정보통신(주)"],
  [13, "박승진", "(주)경남통신기술"],
  [14, "김진훈", "대원전기통신㈜"],
  [15, "곽기현", "토마토전자㈜"],
  [16, "이영자", "금강통신㈜"],
  [17, "문정애", "(주)부경네트워크"],
  [18, "서재벽", "(주)예섬"],
  [19, "현원태", "하이콤㈜"],
  [20, "한종국", "(주)해림아이티"],
  [21, "김병호", "(주)정호링크"],
  [22, "김영철", "(주)케이씨엠솔루션"],
  [23, "김정갑", "(주)영창시스템"],
  [24, "박기태", "서광인포컴㈜"],
  [25, "박봉근", "(주)동아티엔씨"],
  [26, "박정현", "(주)은성정보통신"],
  [27, "박용득", "(주)동성씨앤티"],
  [28, "박현근", "에스엔티"],
  [29, "이강희", "대성아이넷㈜"],
  [30, "이승래", "(주)에스엠이앤시"],
  [31, "이화원", "(주)동진정보통신"],
  [32, "장금섭", "광진통신㈜"],
  [33, "장민환", "화성아이티(주)"],
  [34, "정병석", "(주)비넷츠"],
  [35, "천도우", "엘토스커뮤니케이션㈜"],
  [36, "한진수", "(주)하나정보통신"],
  [37, "김준식", "튜브솔루션㈜"],
];

const jeongtongRaw: [number, string, string][] = [
  [1, "황보유", "동일통신㈜"],
  [2, "최홍기", "㈜대동정보통신"],
  [3, "김중기", "기남전기통신㈜"],
  [4, "이호신", "다올정보통신㈜"],
  [5, "천승호", "(주)인더텍"],
  [6, "권세기", "㈜제이솔루션"],
  [7, "김영우", "동산통신㈜"],
  [8, "김용균", "금성테크윈"],
  [9, "김종훈", "청우통신㈜"],
  [10, "김현표", "국민정보통신"],
  [11, "박성병", "삼덕정보통신㈜"],
  [12, "박진형", "동서통신㈜"],
  [13, "배창용", "㈜성일"],
  [14, "서춘도", "(주)서경"],
  [15, "신현수", "운산이엔씨"],
  [16, "오차근", "㈜성화이아이"],
  [17, "이서준", "㈜그린네트웍스"],
  [18, "이창우", "달빛테크"],
  [19, "장상구", "삼우아이.티㈜"],
  [20, "장상문", "장원씨앤아이㈜"],
  [21, "장인수", "㈜아이티아이에스"],
  [22, "전홍열", "㈜민이엔씨"],
  [23, "하승용", "(주)테라아이엔씨"],
  [24, "한강식", "㈜한텔"],
  [25, "한재성", "한세정보통신㈜"],
  [26, "허진섭", "한일통신㈜"],
  [27, "황보룡", "우림통신㈜"],
  [28, "황유모", "에스정보통신㈜"],
];

const jeontongRaw: [number, string, string][] = [
  [1, "송현석", "(유)드림테크"],
  [2, "이용호", "(유)서원정보통신"],
  [3, "김통일", "(유)건일시앤시"],
  [4, "최규만", "(유)청림씨에스"],
  [5, "박말규", "(유)쎈스"],
  [6, "정다운", "(유)옥천정보통신"],
  [7, "임성희", "주식회사 도하에스앤디"],
  [8, "정상훈", "㈜엑시냅스"],
  [9, "김승섭", "(유)오성통신"],
  [10, "김형모", "(유)시원"],
  [11, "김기태", "(유)도원정보통신"],
  [12, "김성수", "(유)씨앤에스이엔지"],
  [13, "김인철", "㈜비젼웨이브"],
  [14, "김태형", "주식회사유성전기통신"],
  [15, "김병관", "㈜세이브에너지"],
  [16, "박철현", "(주)경신정보통신"],
  [17, "박래한", "㈜에스에이취(SH)"],
  [18, "송진호", "주식회사 홍석"],
  [19, "신창용", "유한회사 한울"],
  [20, "이상규", "(유)삼일통신"],
  [21, "양규송", "(유)황우엔지니어링"],
  [22, "이희원", "㈜백산기업"],
  [23, "오광호", "(유)세아정보통신공사"],
  [24, "이현정", "그린미디어"],
  [25, "유경노", "(유)시영"],
  [26, "유지선", "주식회사 휴먼이엔지"],
  [27, "진명종", "(주)인컴스"],
  [28, "진용채", "(유)금강시스템"],
  [29, "전상배", "(유)천세"],
  [30, "조익빈", "(유)비츠"],
  [31, "최낙춘", "주식회사비케이솔루션"],
  [32, "최병주", "(유)본테크"],
  [33, "한창희", "주식회사 미래하이테크"],
];

function buildParticipants(
  prefix: string,
  raw: [number, string, string][],
  association: AssociationKey,
): Participant[] {
  return raw.map(([no, name, company]) => ({
    id: `${prefix}-${no}`,
    no,
    name,
    company,
    association,
  }));
}

export const participants: Participant[] = [
  ...buildParticipants("gh", guestRaw, "초청인사"),
  ...buildParticipants("tw", tongwooRaw, "통우회"),
  ...buildParticipants("jn", jeongnokRaw, "정록회"),
  ...buildParticipants("jt", jeongtongRaw, "정통회"),
  ...buildParticipants("jh", jeontongRaw, "전통회"),
];

export interface AssociationMeta {
  regionLabel: string;
  count: number;
}

export const associationMeta: Record<AssociationKey, AssociationMeta> = {
  초청인사: { regionLabel: "초청 인사", count: guestRaw.length },
  통우회: { regionLabel: "광주·전남도회", count: tongwooRaw.length },
  정록회: { regionLabel: "부산·울산·경남도회", count: jeongnokRaw.length },
  정통회: { regionLabel: "대구·경북도회", count: jeongtongRaw.length },
  전통회: { regionLabel: "전북특별자치도회", count: jeontongRaw.length },
};

// ---------------------------------------------------------------------------
// 조 편성 — ⚠️ 확인 필요: 원본 조 편성표 이미지가 제공되지 않았습니다.
// 12개 조 틀만 만들어두고 참가자 배정은 비워두었습니다. 원본을 받는 대로
// 각 조의 course/teeTime/participantIds를 채워주세요.
// ---------------------------------------------------------------------------

export type Course = "벨리" | "힐";

// ---------------------------------------------------------------------------
// 코스 정보 (스코어카드) — 원문: 골드레이크CC Hill(Public) / Valley(Public) 스코어카드 이미지
// ---------------------------------------------------------------------------

export interface CourseHole {
  hole: number;
  meters: number; // M
  yards: number; // Yd
  par: number;
}

export interface CourseScorecard {
  course: Course;
  englishName: string;
  holes: CourseHole[];
}

export const courseScorecards: CourseScorecard[] = [
  {
    course: "힐",
    englishName: "Hill",
    holes: [
      { hole: 1, meters: 400, yards: 437, par: 4 },
      { hole: 2, meters: 566, yards: 619, par: 5 },
      { hole: 3, meters: 407, yards: 445, par: 4 },
      { hole: 4, meters: 195, yards: 213, par: 3 },
      { hole: 5, meters: 353, yards: 386, par: 4 },
      { hole: 6, meters: 521, yards: 570, par: 5 },
      { hole: 7, meters: 168, yards: 184, par: 3 },
      { hole: 8, meters: 368, yards: 402, par: 4 },
      { hole: 9, meters: 352, yards: 385, par: 4 },
    ],
  },
  {
    course: "벨리",
    englishName: "Valley",
    holes: [
      { hole: 1, meters: 364, yards: 398, par: 4 },
      { hole: 2, meters: 157, yards: 172, par: 3 },
      { hole: 3, meters: 377, yards: 412, par: 4 },
      { hole: 4, meters: 500, yards: 547, par: 5 },
      { hole: 5, meters: 346, yards: 378, par: 4 },
      { hole: 6, meters: 321, yards: 351, par: 4 },
      { hole: 7, meters: 361, yards: 395, par: 4 },
      { hole: 8, meters: 153, yards: 167, par: 3 },
      { hole: 9, meters: 492, yards: 538, par: 5 },
    ],
  },
];

export function courseTotals(card: CourseScorecard) {
  return card.holes.reduce(
    (acc, h) => ({
      par: acc.par + h.par,
      meters: acc.meters + h.meters,
      yards: acc.yards + h.yards,
    }),
    { par: 0, meters: 0, yards: 0 },
  );
}

export interface Group {
  id: string;
  groupNo: number; // 1~12
  course: Course | null;
  teeTime: string | null;
  participantIds: string[]; // participants[].id 참조
  needsVerification: boolean;
}

export const groups: Group[] = Array.from({ length: 12 }, (_, i) => ({
  id: `group-${i + 1}`,
  groupNo: i + 1,
  course: null,
  teeTime: null,
  participantIds: [],
  needsVerification: true,
}));

export const groupsDataAvailable = groups.some((g) => g.participantIds.length > 0);

// ---------------------------------------------------------------------------
// 준비위원회
// ---------------------------------------------------------------------------

export interface CommitteeMember {
  id: string;
  role: string;
  name: string;
  description?: string; // 직함/소속
}

export const committeeMembers: CommitteeMember[] = [
  {
    id: "c1",
    role: "대회장",
    name: "정종만",
    description: "한국정보통신공사협회 광주·전남도회 통우회장",
  },
  {
    id: "c2",
    role: "준비위원장",
    name: "채강석",
    description: "한국정보통신공사협회 광주·전남도회 부회장",
  },
  { id: "c3", role: "총무위원장", name: "김정기", description: "통우회 총무" },
  { id: "c4", role: "경기위원장", name: "진승원", description: "운영위원" },
  { id: "c5", role: "준비위원", name: "박승수 · 변경덕 · 최수형" },
  { id: "c6", role: "행사지원", name: "강승훈", description: "사무처장" },
];

// ---------------------------------------------------------------------------
// 경기 방식
// ---------------------------------------------------------------------------

export const gameInfoCards = [
  { id: "g1", label: "참가 규모", value: `${eventInfo.playerCount}명` },
  { id: "g2", label: "경기 장소", value: `${eventInfo.venueAddress} · ☎ ${eventInfo.venuePhone}` },
  { id: "g3", label: "경기 시간", value: eventInfo.teeOffTime },
  { id: "g4", label: "조 편성", value: "경기위원회에서 편성" },
  { id: "g5", label: "점심 및 저녁만찬", value: "클럽하우스 및 리조트 대연회장 제공" },
];

export const gameRules: string[] = [
  "본대회는 순수 아마추어 친선대회로 매너있는 동반자룰을 적용하며, 기본적으로는 대한골프협회에서 승인된 골프규칙 및 골드레이크CC의 로컬룰을 적용합니다.",
  "순위결정은 신페리오 방식으로 진행되고 메달리스트 1명과 신페리오 우승, 준우승, 3위, 롱게스트, 니어리스트와 지역대항 1팀 단체우승과 행운상품 등이 있습니다.",
  "순위결정시 동점, 중복시상 등은 경기위원회에서 결정합니다.",
];

export const specialEvent = {
  title: "특별 이벤트",
  headline: "총상금 1억원 홀인원",
  detail: "Par 3, 4개 홀 모두 적용",
  link: "https://m.sports.naver.com/play/competition/golf/26UGtZ",
};

// ---------------------------------------------------------------------------
// 시상 안내 — 2026년도 한국정보통신공사협회 영·호남친선골프대회 상품목록 원문 반영
// ---------------------------------------------------------------------------

export type AwardPrizeCategory = "상품" | "행운상";

export interface AwardPrizeEntry {
  id: string;
  no: number;
  category: AwardPrizeCategory;
  name: string;
  quantity: number;
  product: string;
  note?: string;
  highlight?: boolean;
}

// 원문 순서 그대로 순번(no)을 부여했습니다. 화면 표시 순서만 카테고리별로 나눕니다.
export const awardPrizeList: AwardPrizeEntry[] = [
  { id: "ap1", no: 1, category: "상품", name: "신페리오 우승", quantity: 1, product: "코드제로 로봇청소기", highlight: true },
  { id: "ap2", no: 2, category: "상품", name: "준우승", quantity: 1, product: "휴랙 음식물처리기" },
  { id: "ap3", no: 3, category: "상품", name: "메달리스트", quantity: 1, product: "프레 20인치 기내용 풀 알루미늄 파일러 캐리어" },
  { id: "ap4", no: 4, category: "상품", name: "3위", quantity: 1, product: "테팔 인덕션 티타늄 프라이팬 3종 세트" },
  { id: "ap5", no: 5, category: "상품", name: "단체우승", quantity: 4, product: "만다리나덕 Nomad 백팩 GNT31" },
  { id: "ap6", no: 6, category: "상품", name: "롱게스트", quantity: 1, product: "테팔 인덕션 티타늄 프라이팬 3종 세트" },
  { id: "ap7", no: 7, category: "상품", name: "니어리스트", quantity: 1, product: "테팔 인덕션 티타늄 프라이팬 3종 세트" },
  { id: "ap8", no: 8, category: "상품", name: "다버디상", quantity: 1, product: "땡스소윤 냉동용기 베스트팩 A 혼합 13종" },
  { id: "ap9", no: 9, category: "상품", name: "다파상", quantity: 1, product: "땡스소윤 냉동용기 베스트팩 A 혼합 13종" },
  { id: "ap10", no: 10, category: "상품", name: "다보기", quantity: 1, product: "땡스소윤 냉동용기 베스트팩 A 혼합 13종" },
  {
    id: "ap11",
    no: 11,
    category: "행운상",
    name: "행운상 은상",
    quantity: 1,
    product: "딜팡·힐크릭 헤리티지 스퀘어 골프 바퀴형 보스턴백 상단 오픈형 기내용 캐리어 파우치 세트(HCBB41111SET)",
  },
  { id: "ap12", no: 12, category: "행운상", name: "행운상 공산품 2", quantity: 10, product: "긱 파워 드라이어 SGD-4121N" },
  { id: "ap13", no: 13, category: "행운상", name: "행운상 공산품 3", quantity: 10, product: "소싱제로프로 신발건조기" },
  { id: "ap14", no: 14, category: "행운상", name: "행운상 생활용품", quantity: 10, product: "롤링 토드백" },
  { id: "ap15", no: 15, category: "행운상", name: "행운상 생활용품", quantity: 10, product: "아르딘 멀티백" },
  { id: "ap16", no: 16, category: "행운상", name: "행운상 농수산품", quantity: 10, product: "굴비" },
  { id: "ap17", no: 17, category: "행운상", name: "행운상 농수산품", quantity: 10, product: "쌀" },
  { id: "ap18", no: 18, category: "행운상", name: "행운상 농수산품", quantity: 10, product: "멸치" },
  { id: "ap19", no: 19, category: "행운상", name: "행운상 용품", quantity: 5, product: "선크림·클렌징폼 세트" },
  { id: "ap20", no: 20, category: "행운상", name: "행운상 용품", quantity: 5, product: "클렌징폼 세트" },
  { id: "ap21", no: 21, category: "행운상", name: "행운상 용품", quantity: 10, product: "선크림 세트" },
  { id: "ap22", no: 22, category: "행운상", name: "행운상 용품", quantity: 10, product: "보해 매취순 골드 세트", note: "협찬: 이상호" },
  { id: "ap23", no: 23, category: "행운상", name: "행운상 용품", quantity: 2, product: "커피머신", note: "협찬: 김순 지점장" },
  { id: "ap24", no: 24, category: "행운상", name: "행운상 대상", quantity: 1, product: "전기자전거", note: "협찬: 채강석", highlight: true },
];

export const awardMainPrizeList = awardPrizeList.filter((item) => item.category === "상품");

// 행운상 목록: 대상(그랜드 프라이즈)을 맨 위로 올려서 보여준다.
export const awardLuckyPrizeList = awardPrizeList
  .filter((item) => item.category === "행운상")
  .sort((a, b) => Number(b.name === "행운상 대상") - Number(a.name === "행운상 대상"));

export const awardMainPrizeQuantitySum = awardMainPrizeList.reduce((sum, item) => sum + item.quantity, 0);
export const awardLuckyPrizeQuantitySum = awardLuckyPrizeList.reduce((sum, item) => sum + item.quantity, 0);

export const awardPrizeQuantityTarget = 117;
export const awardPrizeQuantitySum = awardPrizeList.reduce((sum, item) => sum + item.quantity, 0);
export const awardPrizeQuantityMatches = awardPrizeQuantitySum === awardPrizeQuantityTarget;

export interface AwardTrophyEntry {
  id: string;
  no: number;
  name: string;
  quantity: number;
}

export const awardTrophyList: AwardTrophyEntry[] = [
  { id: "at1", no: 1, name: "신페리오 우승", quantity: 1 },
  { id: "at2", no: 2, name: "준우승", quantity: 1 },
  { id: "at3", no: 3, name: "3위", quantity: 1 },
  { id: "at4", no: 4, name: "메달리스트", quantity: 1 },
  { id: "at5", no: 5, name: "단체우승", quantity: 1 },
  { id: "at6", no: 6, name: "롱게스트", quantity: 1 },
  { id: "at7", no: 7, name: "니어리스트", quantity: 1 },
];

export const awardTrophyQuantityTarget = 7;
export const awardTrophyQuantitySum = awardTrophyList.reduce((sum, item) => sum + item.quantity, 0);
export const awardTrophyQuantityMatches = awardTrophyQuantitySum === awardTrophyQuantityTarget;

export interface AwardSouvenirEntry {
  id: string;
  provider: string;
  quantity: number;
  product: string;
  note?: string;
}

export const awardSouvenirList: AwardSouvenirEntry[] = [
  { id: "as1", provider: "통우회", quantity: 1, product: "모시잎 떡", note: "행사장" },
  { id: "as2", provider: "김용우", quantity: 1, product: "대형 수건", note: "락카" },
  { id: "as3", provider: "롯데렌트카", quantity: 1, product: "타이틀리스트 골프공 1줄", note: "락카" },
  { id: "as4", provider: "이은수", quantity: 1, product: "골프우산", note: "락카" },
  { id: "as5", provider: "전광찬", quantity: 1, product: "골프우산", note: "락카" },
];

export const awardSouvenirQuantityTarget = 5;
export const awardSouvenirQuantitySum = awardSouvenirList.reduce((sum, item) => sum + item.quantity, 0);
export const awardSouvenirQuantityMatches = awardSouvenirQuantitySum === awardSouvenirQuantityTarget;

// ---------------------------------------------------------------------------
// 협찬 내역 — 광주·전남도회 현금/물품 + 외부 협찬 3개 표 원문 반영
// ---------------------------------------------------------------------------

export type SponsorGroup = "통우회 현금 협찬" | "통우회 물품 협찬" | "외부 협찬";

export interface SponsorEntry {
  id: string;
  no: number; // 각 표 내 원문 순번 (표마다 1부터 다시 시작)
  group: SponsorGroup;
  name: string; // 성명 또는 단체/업체명
  company?: string; // 소속 회사명 (있는 경우)
  role?: string; // 직함/구분
  amount?: number; // 현금 협찬액
  item?: string; // 협찬 물품명
  quantity?: string; // 물품 수량
  itemValue?: number; // 물품 협찬가액
  note?: string; // "금일봉" 등 원문 비고
}

export const sponsorEntries: SponsorEntry[] = [
  // ---- 통우회 현금 협찬 (30건) ----
  { id: "s1", no: 1, group: "통우회 현금 협찬", name: "정종만", company: "(유)지원통신", role: "통우회장", amount: 5_000_000 },
  { id: "s2", no: 2, group: "통우회 현금 협찬", name: "김상호", company: "(주)온시스템즈", role: "광주·전남도회장", amount: 2_000_000 },
  { id: "s3", no: 3, group: "통우회 현금 협찬", name: "채강석", company: "㈜코리아넷", role: "광주·전남도회 부회장", amount: 2_000_000 },
  { id: "s4", no: 4, group: "통우회 현금 협찬", name: "운영위원회", amount: 3_000_000 },
  { id: "s5", no: 5, group: "통우회 현금 협찬", name: "윤리위원회", amount: 1_000_000 },
  { id: "s6", no: 6, group: "통우회 현금 협찬", name: "제도개선위원회", amount: 1_000_000 },
  { id: "s7", no: 7, group: "통우회 현금 협찬", name: "박화진", role: "윤리위원장", amount: 1_000_000 },
  { id: "s8", no: 8, group: "통우회 현금 협찬", name: "이승호", role: "제도개선위원장", amount: 1_000_000 },
  { id: "s9", no: 9, group: "통우회 현금 협찬", name: "호남골프회", amount: 1_000_000 },
  { id: "s10", no: 10, group: "통우회 현금 협찬", name: "광전회", amount: 1_000_000 },
  { id: "s11", no: 11, group: "통우회 현금 협찬", name: "박승수", role: "광전회장", amount: 1_000_000 },
  { id: "s12", no: 12, group: "통우회 현금 협찬", name: "이인중", amount: 1_000_000 },
  { id: "s13", no: 13, group: "통우회 현금 협찬", name: "진승원", amount: 1_000_000 },
  { id: "s14", no: 14, group: "통우회 현금 협찬", name: "구학인", amount: 1_000_000 },
  { id: "s15", no: 15, group: "통우회 현금 협찬", name: "이건국", amount: 500_000 },
  { id: "s16", no: 16, group: "통우회 현금 협찬", name: "김정곤", amount: 500_000 },
  { id: "s17", no: 17, group: "통우회 현금 협찬", name: "김만웅", amount: 1_000_000, note: "금일봉" },
  { id: "s18", no: 18, group: "통우회 현금 협찬", name: "최공호", amount: 500_000 },
  { id: "s19", no: 19, group: "통우회 현금 협찬", name: "윤종아", amount: 500_000 },
  { id: "s20", no: 20, group: "통우회 현금 협찬", name: "김필호", amount: 300_000 },
  {
    id: "s21",
    no: 21,
    group: "통우회 현금 협찬",
    name: "양경호",
    role: "광주·전남도회 전 회장단",
    amount: 300_000,
    note: "금일봉",
  },
  { id: "s22", no: 22, group: "통우회 현금 협찬", name: "손대겸", amount: 300_000 },
  { id: "s23", no: 23, group: "통우회 현금 협찬", name: "이영만", amount: 300_000 },
  { id: "s24", no: 24, group: "통우회 현금 협찬", name: "이종모", amount: 300_000 },
  { id: "s25", no: 25, group: "통우회 현금 협찬", name: "김정훈", amount: 500_000 },
  { id: "s26", no: 26, group: "통우회 현금 협찬", name: "서영균", amount: 500_000 },
  { id: "s27", no: 27, group: "통우회 현금 협찬", name: "양해용", amount: 300_000 },
  { id: "s28", no: 28, group: "통우회 현금 협찬", name: "최수형", amount: 300_000 },
  { id: "s29", no: 29, group: "통우회 현금 협찬", name: "김대희", amount: 300_000 },
  { id: "s30", no: 30, group: "통우회 현금 협찬", name: "기승주", role: "서부권 회원사", amount: 1_000_000 },

  // ---- 통우회 물품 협찬 (3건) ----
  {
    id: "s31",
    no: 1,
    group: "통우회 물품 협찬",
    name: "채강석",
    company: "㈜코리아넷",
    item: "전기자전거",
    quantity: "1대",
    itemValue: 1_700_000,
  },
  {
    id: "s32",
    no: 2,
    group: "통우회 물품 협찬",
    name: "김용우",
    company: "㈜정보통신공사",
    item: "수건",
    quantity: "200장",
    itemValue: 2_000_000,
  },
  {
    id: "s33",
    no: 3,
    group: "통우회 물품 협찬",
    name: "이상호",
    company: "㈜유진시스템",
    item: "매취순 골드",
    quantity: "10세트",
    itemValue: 500_000,
  },

  // ---- 외부 협찬 (7건, 현금·물품 혼합) ----
  { id: "s34", no: 1, group: "외부 협찬", name: "이재식", role: "중앙회장", amount: 1_000_000, note: "금일봉" },
  { id: "s35", no: 2, group: "외부 협찬", name: "강정훈", role: "조합이사장", amount: 1_000_000, note: "금일봉" },
  { id: "s36", no: 3, group: "외부 협찬", name: "남궁훈", role: "경기도회장", amount: 500_000, note: "금일봉" },
  {
    id: "s37",
    no: 4,
    group: "외부 협찬",
    name: "이은수",
    role: "전 경기도회장",
    item: "골프우산",
    quantity: "200개",
    itemValue: 3_000_000,
  },
  {
    id: "s38",
    no: 5,
    group: "외부 협찬",
    name: "전광찬",
    role: "중앙회 이사",
    item: "골프우산",
    quantity: "200개",
    itemValue: 3_000_000,
  },
  {
    id: "s39",
    no: 6,
    group: "외부 협찬",
    name: "김순",
    role: "통신공제조합 지점장",
    item: "커피머신",
    quantity: "2대",
    itemValue: 300_000,
  },
  {
    id: "s40",
    no: 7,
    group: "외부 협찬",
    name: "롯데렌트카",
    item: "타이틀리스트 골프공",
    quantity: "1줄 × 180",
    itemValue: 3_600_000,
  },
  { id: "s41", no: 8, group: "외부 협찬", name: "김중수", role: "대구·경북도회장", note: "금일봉" },
];

export function sponsorEntriesByGroup(group: SponsorGroup): SponsorEntry[] {
  return sponsorEntries.filter((e) => e.group === group);
}

export function sponsorGroupCashSum(group: SponsorGroup): number {
  return sponsorEntriesByGroup(group).reduce((sum, e) => sum + (e.amount ?? 0), 0);
}

export function sponsorGroupItemValueSum(group: SponsorGroup): number {
  return sponsorEntriesByGroup(group).reduce((sum, e) => sum + (e.itemValue ?? 0), 0);
}

export const sponsorGrandTotal = sponsorEntries.reduce(
  (sum, e) => sum + (e.amount ?? 0) + (e.itemValue ?? 0),
  0,
);

export function formatSponsorEntryValue(entry: SponsorEntry): string {
  if (entry.item) {
    const value = entry.itemValue != null ? ` (협찬가액 ${entry.itemValue.toLocaleString("ko-KR")}원)` : "";
    return `${entry.item} ${entry.quantity ?? ""}${value}`.trim();
  }
  return entry.amount != null ? `${entry.amount.toLocaleString("ko-KR")}원` : "";
}

// ---------------------------------------------------------------------------
// 검색용 문자열 정규화 (공백 차이 무시)
// ---------------------------------------------------------------------------

export function normalize(value: string): string {
  return value.replace(/\s+/g, "").toLowerCase();
}

// ---------------------------------------------------------------------------
// 참가자 ↔ 조 편성 연결 헬퍼
// ---------------------------------------------------------------------------

export function findGroupByParticipantId(participantId: string): Group | undefined {
  return groups.find((g) => g.participantIds.includes(participantId));
}

export function getGroupParticipants(group: Group): Participant[] {
  return group.participantIds
    .map((id) => participants.find((p) => p.id === id))
    .filter((p): p is Participant => Boolean(p));
}
