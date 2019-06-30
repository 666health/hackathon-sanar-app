import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 10000000000,
  },
});

const routesMap = {
  0: '',
  1: 'tratamentos',
  2: 'alarmes',
}

const SimpleBottomNavigation = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const onChange = (event, newValue) => {
    props.history.push(routesMap[newValue])
    setValue(newValue)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={onChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Agenda" icon={<Icon>calendar_today</Icon>} />
      <BottomNavigationAction label="Tratamentos" icon={<Icon>local_hospital</Icon>} />
      <BottomNavigationAction label="Alarmes" icon={<Icon>alarm</Icon>} />
    </BottomNavigation>
  );
}

export default withRouter(SimpleBottomNavigation);