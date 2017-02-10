import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <events-thumbnail (eventClick) = "handleEventClicked($event)" [event]="eventData"></events-thumbnail>
    </div>
    `
})

export class EventsListComponent {
    eventData = {
        id: 1,
        name: 'Angular Summit',
        price: '699.99',
        location: 'Kansas City'
    }

    handleEventClicked(data) {
        console.log(data)
    }

}