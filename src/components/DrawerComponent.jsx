import React, { useEffect } from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Home, Logout, Group, School } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

function DrawerComponent({ drawerWidth, toggleDrawer, logout }) {
  const navigate = useNavigate();
  const [active, setActive] = React.useState("Home");
  const handleChange = (itemName) => {
    setActive(itemName);
    toggleDrawer();
  };

  const drawerItems = [
    {
      name: "Home",
      icon: <Home />,
      link: "/",
    },

    {
      name: "Staff List",
      icon: <Group />,
      link: "/staff",
    },
  ];
  return (
    <div>
      {/* This is the container of the Logo on the Drawer/Sidebar */}
      <Toolbar style={{ backgroundColor: "#0F9D58", margin: 0 }}>
        <div className="topbar-logo">
          <Typography fontWeight="bold">Staff Hierarchy Display</Typography>
        </div>
      </Toolbar>

      <List>
        {drawerItems.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <Link to={item.link} className="link">
                <ListItem
                  disablePadding
                  onClick={() => handleChange(item.name)}
                  sx={
                    active === item.name ? { backgroundColor: "#0F9D58" } : {}
                  }
                >
                  <ListItemButton>
                    <ListItemIcon
                      style={
                        active === item.name
                          ? { color: "#fff" }
                          : { color: "#0F9D58" }
                      }
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      style={
                        active === item.name
                          ? { color: "#fff" }
                          : { color: "#0F9D58" }
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
}

export default DrawerComponent;
