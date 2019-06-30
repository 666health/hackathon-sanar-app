import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import UserService from '../../services/UserService';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: theme.spacing.unit * 3
  },
  formWrapper: {
    width: 400,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 2
  },
  button: {
    marginTop: theme.spacing.unit * 2
  },
  register: {
    cursor: 'pointer',
    marginTop: theme.spacing.unit * 2
  }
});

class BaseRegister extends Component {
  state = {
    user: '',
    pass: '',
    name: '',
    hasError: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmit = async () => {
    const { user, pass, name } = this.state;

    UserService.register(name, user, pass)
      .then(({ data: { token } }) => this.handleSuccess(token))
      .catch(() => this.setState({ hasError: true }));
  };

  handleSuccess = token => {
    localStorage.setItem('token', token);

    this.props.history.push('/');
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
            variant='h4'
          >
            Registrar como {isDoctor ? 'Médico' : 'Paciente'}
          </Typography>
          <TextField
            id='name'
            label='Nome'
            autoComplete='off'
            placeholder='Ex: John Doe'
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin='normal'
          />
          <TextField
            id='user'
            label='Usuário'
            autoComplete='off'
            placeholder='Ex: JohnDoe'
            InputLabelProps={{
              shrink: true
            }}
            value={this.state.user}
            onChange={this.handleChange('user')}
            margin='normal'
          />
          <TextField
            id='pass'
            label='Senha'
            autoComplete='off'
            InputLabelProps={{
              shrink: true
            }}
            placeholder='Ex: ********'
            type='password'
            value={this.state.pass}
            onChange={this.handleChange('pass')}
            margin='normal'
          />
          {this.state.hasError && (
            <Typography color='error' variant='subtitle1'>
              Dados inválidos
            </Typography>
          )}
          <Button
            className={classes.button}
            variant='contained'
            color={isDoctor ? 'primary' : 'secondary'}
            onClick={this.onSubmit}
          >
            Entrar
          </Button>
          <Typography
            color={isDoctor ? 'secondary' : 'primary'}
            className={classes.register}
            variant='body1'
            onClick={() => {
              console.log('onclick');
              this.props.history.push(
                isDoctor ? '/paciente/register' : '/medico/register'
              );
            }}
          >
            {isDoctor ? 'Registrar como paciente' : 'Registrar como médico'}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(BaseRegister);
