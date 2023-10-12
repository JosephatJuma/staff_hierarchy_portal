import React, { useState } from "react";
import { Card, Avatar, ListItemIcon } from "@mui/material";
import { MenuItem, Menu, IconButton, Typography } from "@mui/material";
import { Person } from "@mui/icons-material";

import { MoreVert, Visibility } from "@mui/icons-material";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import {
  toggleShowDeleteModal,
  toggleShowEditModal,
  toggleShowViewModal,
  setSelectedStaff,
} from "../redux/slices/staffSlice";

function StaffCard(props) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteStaff = (staff) => {
    handleClose();
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowDeleteModal());
  };
  const viewStaff = (staff) => {
    handleClose();
    dispatch(setSelectedStaff(staff));
    dispatch(toggleShowViewModal());
  };
  return (
    <Card
      sx={{
        margin: 1,
        flex: 1,
        padding: 1,
        minWidth: "48%", // Default width for small screens
        "@media (min-width: 600px)": {
          width: "20%", // Adjust the width for larger screens
          minWidth: "200px", // Set a minimum width for the card
        },
        "&:hover": {
          boxShadow: "3px 5px 10px 0px #72c1c6",
        },
      }}
    >
      <div>
        <IconButton
          aria-controls={anchorEl ? "action-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? "true" : undefined}
          onClick={handleOpen}
          size="small"
          sx={{ alignSelf: "flex-end" }}
        >
          <MoreVert />
        </IconButton>
      </div>

      <center>
        <Avatar sx={{ width: 100, height: 100 }}>
          <Person sx={{ width: 100, height: 100 }} />
        </Avatar>
      </center>
      <center>
        <Typography>{props.staff.name}</Typography>
        <Typography>{props.staff.role}</Typography>
      </center>

      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          Edit
        </MenuItem>
        <MenuItem onClick={() => viewStaff(props.staff)}>
          <ListItemIcon>
            <Visibility />
          </ListItemIcon>
          Details
        </MenuItem>
        <MenuItem onClick={() => deleteStaff(props.staff)}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </Card>
  );
}

export default StaffCard;
