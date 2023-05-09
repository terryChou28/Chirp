import React from "react";
import "./Sidebar.css";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import MailIcon from "@mui/icons-material/Mail";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Chirp icon */}
      <FlutterDashIcon className="sidebar__chirpIcon" />

      {/* SidebarOption */}
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={CircleNotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailIcon} text="Messages" />
      <SidebarOption Icon={StarBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PersonIcon} text="Profile" />
      <SidebarOption Icon={ExpandMoreIcon} text="More" />

      {/* Button -> Chirp */}
      <Button variant="outlined" className="sidebar__chirp" fullWidth>
        Chirp
      </Button>
    </div>
  );
}

export default Sidebar;
