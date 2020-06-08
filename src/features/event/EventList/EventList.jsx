import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

export default class EventList extends Component {
    render() {
        const {events, deleteEvent} = this.props
        return (
            <Fragment>
                {events.map(event => (
                    <EventListItem 
                    event={event} key={event.id} 
                    deleteEvent={deleteEvent}/>
                ))}
            </Fragment>
        )
    }
}
