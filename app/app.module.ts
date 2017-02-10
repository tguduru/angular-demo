import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventAppComponent } from './events.app.component'
import {EventsListComponent} from './events/events.list.component'
import { EventsThumbnailComponent } from './events/events.thumbnail.components'


@NgModule({
    imports: [BrowserModule],
    declarations: [EventAppComponent,
        EventsListComponent,
    EventsThumbnailComponent],
    bootstrap: [EventAppComponent]
})

export class AppModule{}