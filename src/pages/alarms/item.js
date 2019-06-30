import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Radio from "@material-ui/core/Radio";
import List from "@material-ui/core/List";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

const products = [
  {
    store: 'Farmacias Santana',
    price: 50.0,
  },
  {
    store: 'Drogasil',
    price: 55.0
  },
  {
    store: 'Farmacias São Paulo',
    price: 42.0
  }
];

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100vh",
    width: "100%"
  },
  card: {
    backgroundColor: "#fafafa",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    maxHeight: "200px",
    boxShadow: "0 1px 3px 0 rgba(0,0,0,.12)"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 200,
    height: 200,
    paddingRight: "16px"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: "16px"
  },
  playIcon: {
    height: 38,
    width: 38
  }
});

class ItemModal extends Component {
  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };

  render() {
    const { classes, isOpen, handleClose, item } = this.props;
    console.log("modal isopen", isOpen);

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
        // style={{ zIndex: "10000000000000000000" }}
      >
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={handleClose}
              >
                <Icon>close</Icon>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {item.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.root}>
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.description}
                  </Typography>
                  <Typography style={{ color: "red" }} variant="subtitle2">
                    {item.schedule}
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                className={classes.cover}
                image={item.image}
                title="Live from space album cover"
              />
            </Card>
            <div style={{ padding: "12px 24px" }}>
              <Typography component="h6" variant="h6">
                Onde comprar
              </Typography>
              <List>
                {products.map(a => (
                  <>
                  <ListItem button href="#">
                    <ListItemAvatar>
                      <Avatar>
                        <Icon>shopping_basket</Icon>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={a.store} secondary={a.price} />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  </>
                ))}
              </List>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(ItemModal);
