import { AppBar, Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { Apps, ArrowBack, AssignmentInd, ContactMail, Home, Notes } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import avatarJPG from '../assets/avatar.png'
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    appBar: {
      background: "#222",
      margin: 0,
    },
    arrow: {
      color: "tomato",
    },
    title: {
      color: "tan",
    },
    menuSliderContainer: {
      width: 250,
      background: "#511",
      height: "100%",
    },
    avatar: {
      display: "block",
      margin: "0.5rem auto",
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
    listItem: {
      color: "tan",
    },
  }));
  
  const menuItems = [
    { listIcon: <Home />, listText: "Home", listPath: "/" },
    { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
    { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
    { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
  ];
  
  const Navbar = () => {
    const [ open, setOpen ] = useState(false);
  
    const classes = useStyles();
  
    const sideList = () => (
      <Box className={ classes.menuSliderContainer } component="div">
        <Avatar className={ classes.avatar } src={ avatarJPG } alt="shilesh rk" />
        <Divider />
        <List>
          { menuItems.map((item, i) => (
            <ListItem
              button
              key={ i }
              className={ classes.listItem }
              onClick={ () => setOpen(false) }
              component={ Link }
              to={ item.listPath }
            >
              <ListItemIcon className={ classes.listItem }>
                { item.listIcon }
              </ListItemIcon>
              <ListItemText primary={ item.listText } />
            </ListItem>
          )) }
        </List>
      </Box>
    );
  
    return (
      <>
        <Box component="nav">
          <AppBar position="static" className={ classes.appBar }>
            <Toolbar>
              { !open ? <IconButton onClick={ () => setOpen(true) }>
                  <Notes fontSize='large'className={ classes.arrow } />
                </IconButton>
                : <IconButton onClick={ () => setOpen(true) }>
                  <ArrowBack fontSize='large'className={ classes.arrow } />
                </IconButton> }
              <Typography variant="h5" className={ classes.title }>
                Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Drawer open={ open } anchor="right" onClose={ () => setOpen(false) }>
          { sideList() }
          <Footer />
        </Drawer>
      </>
    );
  };

export default Navbar