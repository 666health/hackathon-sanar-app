import React from "react";
import Calendar from "react-big-calendar";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";

import { askForPermissioToReceiveNotifications } from "../../config/firabase-config";
import NotificationService from "../../services/NotificationService";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import AddForm from "../../components/add-form";

const localizer = Calendar.momentLocalizer(moment);

// Event {
//     title: string,
//     start: Date,
//     end: Date,
//     allDay?: boolean
//     resource?: any,
//   }

const events = [
  {
    title: "Minoxidil",
    start: new Date(moment().subtract(3, "hours")),
    end: new Date(moment().subtract(2.5, "hours"))
  },
  {
    title: "Minoxidil",
    start: new Date(moment().subtract(6.5, "hours")),
    end: new Date(moment().subtract(6, "hours"))
  },
  {
    title: "Minoxidil",
    start: new Date(moment().subtract(8.5, "hours")),
    end: new Date(moment().subtract(8, "hours"))
  }
];

const styles = theme => ({
  fab: {
    position: "fixed",
    right: "24px",
    bottom: "80px"
  }
});

class Home extends React.Component {
  state = {
    showAddForm: false,
  };

  async componentDidMount() {
    const authToken = localStorage.getItem("token");
    const notificationToken = authToken
      ? await askForPermissioToReceiveNotifications()
      : null;

    if (notificationToken) {
      NotificationService.setPushToken(notificationToken).catch(err => {
        console.log(err);
      });
    }
  }

  toggleAddForm = () => {
    this.setState({
      showAddForm: !this.state.showAddForm
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Calendar
          localizer={localizer}
          views={["day"]}
          view={"day"}
          events={events}
          startAccessor="start"
          endAccessor="end"
          messages={{
            allDay: "Dia inteiro",
            previous: "Anterior",
            next: "Próximo",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            agenda: "Lista",
            date: "Dia",
            time: "Horário",
            event: "Compromisso"
          }}
        />
        <Fab
          onClick={this.toggleAddForm}
          color="primary"
          aria-label="Add"
          className={classes.fab}
        >
          <Icon>add</Icon>
        </Fab>
        <AddForm  
          handleClose={this.toggleAddForm}
          isOpen={this.state.showAddForm}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
