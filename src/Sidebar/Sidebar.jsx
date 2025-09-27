import { HiFolderAdd } from "react-icons/hi";
import StaffPicks from "../StaffPicks/StaffPicks";
import TopicsSection from "../TopicsSection/TopicsSection";
import FollowSection from "../FollowSection/FollowSection";
import './Sidebar.css';

const Sidebar = ({ staffs, topics, follows, isMobile = false }) => {
  return (
    <div className={`sidebar ${isMobile ? 'mobile-sidebar' : 'desktop-sidebar'}`}>
      <StaffPicks staffs={staffs} />
      <TopicsSection topics={topics} />
      <FollowSection follows={follows} />
      
      <div className="reading-list">
        <p>Click the <HiFolderAdd size={16} className="icon" /> on any story to easily add it to your reading list or a custom list that you can share.</p>
      </div>

      <footer className="sidebar-footer">
        <div className="footer-links">
          <span>Help</span>
          <span>Status</span>
          <span>About</span>
          <span>Careers</span>
          <span>Press</span>
          <span>Blog</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Text to speech</span>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;