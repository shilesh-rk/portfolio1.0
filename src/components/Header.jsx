import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import ReactTyped from "react-typed";
import avatarJPG from '../assets/avatar.png'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
    },
    title: {
      color: "tomato",
    },
    subtitle: {
      color: "tan",
      textTransform: "uppercase",
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1,
    },
  }));
  
  const Header = () => {
    const classes = useStyles();
  
    return ( 
      <Box className={classes.typedContainer}>
        <Grid container justifyContent="center">
          <Avatar className={classes.avatar} src={avatarJPG} alt="shilesh rk" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <ReactTyped strings={["I'm Shilesh Rk"]} typeSpeed={40} />
        </Typography>
  
        <Typography className={classes.subtitle} variant="h5">
          <ReactTyped
            strings={[
              "A Frontend Developer",
              "A MERN STACK Developer",
              "I Love Coding...",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    );
  };
  
  export default Header;
  