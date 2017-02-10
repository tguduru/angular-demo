import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/event-list.html' // template to display the page, this is good
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Summit',
        price: '699.99',
        location: 'Kansas City'
    }

}