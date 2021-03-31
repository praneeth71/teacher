import { Link } from "react-router-dom";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import "./SideBar.css";

const SideBar = ({ active }) => {
  return (
    <div className="sidebar">

      <div className="sidebar-menu">

        <div id={active === "teacherdashboard" ? "active" : ""} className="menu">
          <Link to="/teacherdashboard">
            <DashboardOutlinedIcon />
              Teacher Dashboard
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SideBar;
