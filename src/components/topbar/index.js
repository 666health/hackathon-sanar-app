import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // position: 'fixed',
    // top: 0,
    // width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const routesTitlesMap = {
  "/": "Agenda",
  "/tratamentos": "Meus tratamentos",
  "/alarmes": "Meus alarmes"
};

const ButtonAppBar = props => {
  const classes = useStyles();
  const { pathname } = props.history.location;
  const title = routesTitlesMap[pathname];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(ButtonAppBar);
