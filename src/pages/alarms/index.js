import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  fab: {
    position: "fixed",
    right: "24px",
    bottom: "80px"
  }
}));

const alarms = [
  {
    title: "Minoxidil",
    schedule: "A cada 8 horas"
  },
  {
    title: "Antibiótico",
    schedule: "A cada 6 horas"
  },
  {
    title: "Outro antibiótico",
    schedule: "A cada 12 horas"
  }
];

export default function FolderList() {
  const classes = useStyles();

  return (
    <div>
    <List className={classes.root}>
      {alarms.map(a => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Icon>alarm</Icon>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={a.title} secondary={a.schedule} />
        </ListItem>
      ))}
    </List>
    <Fab color="primary" aria-label="Add" className={classes.fab}>
      <Icon>add</Icon>
    </Fab>
    </div>
  );
}
