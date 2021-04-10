import { Link } from "react-router-dom";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";
import "./SideBar.css";

const SideBar = ({ active }) => {
  return (
    <div className="sidebar">

    <div className="sidebar-menu">
      <div id={active === "home" ? "active" : ""} className="menu">
        <Link to="/">
          <HomeOutlinedIcon />
          Home
        </Link>
      </div>

      <div id={active === "dashboard" ? "active" : ""} className="menu">
        <Link to="/teacherdashboard">
          <DashboardOutlinedIcon />
          Dashboard
        </Link>
      </div>

      <div id={active === "enrollment" ? "active" : ""} className="menu">
        <Link to="/enrollment">
          <NoteAddOutlinedIcon />
          My Courses
        </Link>
      </div>
    </div>
    </div>
  );
};

export default SideBar;
