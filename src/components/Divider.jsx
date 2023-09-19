import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  length: "100%",
  marginLeft: "20px",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function ListDividers() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button className="list-item">
        <ListItemText className="font-bold text-base" primary="Home" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="FAQ's" />
      </ListItem>
      <Divider light />
      <ListItem component="a" href="tel:054-193-0635" button>
        <ListItemText primary="Speak To Sales" />
      </ListItem>
    </List>
  );
}
