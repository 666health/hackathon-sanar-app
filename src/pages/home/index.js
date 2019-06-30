import React, { useEffect } from 'react';
import Calendar from 'react-big-calendar';

import { askForPermissioToReceiveNotifications } from '../../config/firabase-config';
import NotificationService from '../../services/NotificationService';

import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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
    title: 'Minoxidil',
    start: new Date(moment().subtract(3, 'hours')),
    end: new Date(moment().subtract(2.5, 'hours'))
  },
  {
    title: 'Minoxidil',
    start: new Date(moment().subtract(6.5, 'hours')),
    end: new Date(moment().subtract(6, 'hours'))
  },
  {
    title: 'Minoxidil',
    start: new Date(moment().subtract(8.5, 'hours')),
    end: new Date(moment().subtract(8, 'hours'))
  }
];

class Home extends React.Component {
  async componentDidMount() {
    const token = await askForPermissioToReceiveNotifications();

    NotificationService.setPushToken(token).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          views={['day']}
          view={'day'}
          events={events}
          startAccessor='start'
          endAccessor='end'
          messages={{
            allDay: 'Dia inteiro',
            previous: 'Anterior',
            next: 'Próximo',
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            agenda: 'Lista',
            date: 'Dia',
            time: 'Horário',
            event: 'Compromisso'
          }}
        />
      </div>
    );
  }
}

export default Home;
