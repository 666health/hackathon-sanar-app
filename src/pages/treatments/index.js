import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
    
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  fab: {
    position: "fixed",
    right: "24px",
    bottom: "80px"
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="http://eibneti.com.br/wp-content/uploads/2016/08/018-medica-grande.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Tratamento para febre"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Doutoura Maria 
              </Typography>
              <br />
              {" Muito repouso e hidratação. Alimentação saudável e leve…"}
              {/* — I'll be in your neighborhood doing errands this… */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <Icon>add</Icon>
      </Fab>
    </List>
  );
}
