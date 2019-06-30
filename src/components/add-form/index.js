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
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Modal from "@material-ui/core/Modal";

import TestCodeScanner from "../../components/qr-code-scanner/test";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    height: "100vh",
    width: "100%"
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  qrcodeWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    paddingTop: "24px"
  },
  qrcode: {
    width: "90%",
    objectFit: "cover",
    height: "300px",
    border: "3px dotted red",
    padding: "8px"
  },
  inputWrapper: {
      width: '100%',
      padding: '16px 0',
  }
});

class AddForm extends Component {
  state = {
    medicineName: "",
    description: "",
    hasError: false,
    isRegister: false,
    checkboxValue: "qr"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeRadio = event => {
    this.setState({ checkboxValue: event.target.value });
  };

  onSubmit = async () => {
    console.log("on submit");
  };

  render() {
    const { classes, isOpen, handleClose } = this.props;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={handleClose}
        style={{ zIndex: "10000000000000000000" }}
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
                Adicionar
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.root}>
            <div className={classes.paper}>
              <div className={classes.formWrapper}>
                <RadioGroup
                  aria-label="Gender"
                  name="gender1"
                  className={classes.group}
                  value={this.state.checkboxValue}
                  onChange={this.handleChangeRadio}
                >
                  <FormControlLabel
                    value="qr"
                    control={<Radio />}
                    label="QR Code e Código de barras"
                  />
                  <FormControlLabel
                    value="manual"
                    control={<Radio />}
                    label="Manual"
                  />
                </RadioGroup>
                {this.state.checkboxValue === "qr" && (
                  <div className={classes.qrcodeWrapper}>
                    <TestCodeScanner className={classes.qrcode} />
                  </div>
                )}
                {this.state.checkboxValue === "manual" && (
                  <div>
                    <div className={classes.inputWrapper}>
                      <TextField
                        fullWidth
                        id="medicine-name"
                        label="Nome do medicamento"
                        autoComplete="off"
                        placeholder="Ex: Diazepam"
                        InputLabelProps={{
                          shrink: true
                        }}
                        value={this.state.medicineName}
                        onChange={this.handleChange("medicineName")}
                        margin="normal"
                      />
                    </div>
                    <div className={classes.inputWrapper}>
                      <TextField
                        fullWidth
                        id="description"
                        label="Descrição"
                        autoComplete="off"
                        InputLabelProps={{
                          shrink: true
                        }}
                        placeholder="Ex: ********"
                        value={this.state.description}
                        onChange={this.handleChange("description")}
                        margin="normal"
                      />
                    </div>
                    <div className={classes.inputWrapper}>
                      <TextField
                        fullWidth
                        id="time"
                        label="Alarm clock"
                        type="time"
                        defaultValue="07:30"
                        // className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        inputProps={{
                          step: 300 // 5 min
                        }}
                      />
                    </div>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      onClick={this.onSubmit}
                    >
                      Adicionar
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(AddForm);
