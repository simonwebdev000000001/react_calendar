import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './index.scss';
import CalendatEventsItem from '../Item';


class EventList extends PureComponent {


  static propTypes = {
    day: PropTypes.object.isRequired,
    hour: PropTypes.string,
  };

  render() {
    const { day, hour, events } = this.props;
    let dayStr = (day.date ? day.date.toUTCString() : day.toUTCString()).split(" ").slice(0,4).join("");

    return (
      <div className={styles['events-list']}>
        {
          events
            .filter((event) => {
              for (let i = 0; i < this.props.themes.length; i++) {
                if (this.props.themes[i].id === event.event_theme.id) {
                  return this.props.themes[i].available;
                }
              }
            })
            .filter((event) => {
              return event.day.toUTCString().split(" ").slice(0,4).join("") === dayStr && (hour && hour === event.hour || !hour)
            })
            .map((event) => {
              return (<CalendatEventsItem item={event} key={event.id}/>)
            })
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  events: state.calendar.events,
  themes: state.calendar.themes,
});


export default connect(mapStateToProps)(EventList);
