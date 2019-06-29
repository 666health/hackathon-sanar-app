import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { authOperator, authAdmin } from '../../fetches';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: theme.spacing.unit * 3,
  },
  formWrapper: {
    width: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit * 2,
  },
  register: {
    cursor: 'pointer',
    marginTop: theme.spacing.unit * 2,
  },
});

class BaseLogin extends Component {
  state = {
    user: '',
    pass: '',
    hasError: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSubmit = async () => {
    console.log('on submit')
    // const { user, pass } = this.state;

    // if (this.props.type === 'admin') {
    //   const res = await authAdmin({ user, pass });
    //   if ((user === 'admin' && pass === 'admin') || !!res) {
    //     this.props.history.push('/cadastro');
    //   } else {
    //     this.setState({ hasError: true });
    //   }
    // } else {
    //   const res = await authOperator({ user, pass });
    //   if ((user === 'caixa' && pass === '123') || !!res) {
    //     this.props.history.push('/caixa');
    //   } else {
    //     this.setState({ hasError: true });
    //   }
    // }
  };

  render() {
    const { classes, type } = this.props;
    const isDoctor = type === 'doctor';

    return (
      <div className={classes.root}>
        <div className={classes.formWrapper}>
          <Typography
            color={isDoctor ? 'primary' : 'secondary'}
            className={classes.title}
            variant="h4"
          >
            Logar como {isDoctor ? 'Médico' : 'Paciente'}
          </Typography>
          <TextField
            id="user"
            label="Usuário"
            autoComplete="off"
            placeholder="Ex: John Doe"
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.user}
            onChange={this.handleChange('user')}
            margin="normal"
          />
          <TextField
            id="pass"
            label="Senha"
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Ex: ********"
            type="password"
            value={this.state.pass}
            onChange={this.handleChange('pass')}
            margin="normal"
          />
          {this.state.hasError && (
            <Typography color="error" variant="subtitle1">
              Usuario ou senha incorreta
            </Typography>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color={isDoctor ? 'primary' : 'secondary'}
            onClick={this.onSubmit}
          >
            Entrar
          </Button>
          <Typography
            color={isDoctor ? 'secondary' : 'primary'}
            className={classes.register}
            variant="body1"
            onClick={() => {
              console.log('onclick')
              this.props.history.push(isDoctor ? '/paciente/login' : '/medico/login')
            }
            }
          >
            {isDoctor ? 'Usar como paciente' : 'Usar como médico'}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BaseLogin);