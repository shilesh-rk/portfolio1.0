import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
    "&:hover": {
        background:'tan',
        color:"#222",
        borderColor: "tan",
    }
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
    const yourEmail = 'rkshilesh140@gmail.com';
    const [emailSubject, setEmailSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
  
    const handleEmailClick = () => {
      const subjectParam = emailSubject ? `?subject=${encodeURIComponent(emailSubject)}` : '';
      const bodyParam = emailMessage ? `&body=${encodeURIComponent(emailMessage)}` : '';
      const mailtoLink = `mailto:${yourEmail}${subjectParam}${bodyParam}`;
      window.location.href = mailtoLink;
    };
  const classes = useStyles();
  
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justifyContent="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            label="Subject"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            minRows={4}
            inputProps={{ className: classes.input }}
            value={emailMessage}
        onChange={(e) => setEmailMessage(e.target.value)}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={handleEmailClick}
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
