import BackToTop from "./components/BackToTop";
import TabBar from "./components/TabBar";
import { PhotoLightboxProvider } from "./components/PhotoLightbox";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ScheduleSection from "./sections/ScheduleSection";
import GroupsSection from "./sections/GroupsSection";
import ParticipantsSection from "./sections/ParticipantsSection";
import FormatSection from "./sections/FormatSection";
import AwardsSection from "./sections/AwardsSection";
import CommitteeSection from "./sections/CommitteeSection";
import SponsorsSection from "./sections/SponsorsSection";
import ClosingSection from "./sections/ClosingSection";
import { eventInfo } from "./data/programBookData";
import "./App.css";

export default function App() {
  return (
    <PhotoLightboxProvider>
      <div className="app-shell">
        <HeroSection />
        <TabBar />

        <div className="page">
          <div className="info-mini-row" style={{ marginTop: 28 }}>
            <div className="info-mini">
              <div className="k">장소</div>
              <div className="v">{eventInfo.venueName}</div>
            </div>
            <div className="info-mini">
              <div className="k">티오프</div>
              <div className="v">{eventInfo.teeOffTime}</div>
            </div>
            <div className="info-mini">
              <div className="k">참가 규모</div>
              <div className="v">
                {eventInfo.teamCount}팀 {eventInfo.playerCount}명
              </div>
            </div>
          </div>
        </div>

        <AboutSection />
        <ScheduleSection />
        <GroupsSection />
        <ParticipantsSection />
        <FormatSection />
        <AwardsSection />
        <CommitteeSection />
        <SponsorsSection />
        <ClosingSection />

        <BackToTop />
      </div>
    </PhotoLightboxProvider>
  );
}
