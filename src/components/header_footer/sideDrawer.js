import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const sideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      smooth: true,
      duration: 1500,
      delay: 500,
      offset: -100
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List>
        <ListItem button onClick={() => scrollToElement("Header")}>
          Event start in
        </ListItem>
        <ListItem button onClick={() => scrollToElement("VenueNFO")}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => scrollToElement("Highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElement("Pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElement("Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default sideDrawer;
