import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { GitHub, LinkedIn, WhatsApp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
    height: "65px",
    overflow: "hidden",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      fontSize:"1.6rem",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
  <a href="https://github.com/shilesh-rk" target="_blank">
    <BottomNavigationAction icon={<GitHub />} className={classes.root} />
  </a>
  <a href="https://www.linkedin.com/in/shilesh-rachakonda-283149229?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHdFHOVwiQPGUtwxb4t%2FwSw%3D%3D" target="_blank">
    <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
  </a>
  <a href="https://wa.me/919160838533?text=Hi, I contacted you through your website" target="_blank">
    <BottomNavigationAction icon={<WhatsApp />} className={classes.root} />
  </a>
</BottomNavigation>

  );
};
export default Footer;
