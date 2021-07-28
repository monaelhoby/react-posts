import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Color from '../constants/colors'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  navBar : {
    background : Color.primary
  },
  link : {
      color : "#FFF",
      textDecoration : "none",
      marginRight : "20px"
  },
  btn : {
      background : 'rgba(239, 108,100,.9)'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>Home</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
