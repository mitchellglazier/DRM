import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import ExampleControlSlot from './exampleControlSlot';
import * as moment from 'moment';

const propTypes = {}

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(...args) {
        super(...args)

        this.state = { events }
    }
    
    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        start,
                        end,
                        title,
                    },
                ],
            })
    }

    render() {
        return (
            <>
                <ExampleControlSlot.Entry waitForOutlet>
                    <strong>
                        Click an event to see more info
                    </strong>
                </ExampleControlSlot.Entry>
                <BigCalendar
                    selectable
                    localizer={localizer}
                    events={this.state.events}
                    defaultView={BigCalendar.Views.WEEK}
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2019, 3, 12)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={this.handleSelect}
                />
            </>
        )
    }
}

Calendar.propTypes = propTypes

export default Calendar;