import { Component, Input,Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'events-thumbnail',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr>
        <h4>{{event.name}}</h4>
        <button class="btn btn-primary" (click)="handleClick()">Submit</button>
    </div>
    `
})

export class EventsThumbnailComponent {
    @Input() event: any
  @Output() eventClick = new EventEmitter()  
    
  handleClick() {
      this.eventClick.emit('foo')
  }
}