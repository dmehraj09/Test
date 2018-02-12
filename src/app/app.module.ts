import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import { EventsAppComponent } from './Events-app.component'
import { AppComponent } from './app.component'
import { EventsListComponent} from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumnail.component'

import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppComponent
                  ,EventsListComponent
                  ,EventThumbnailComponent
                  ,NavBarComponent],

    providers: [EventService],
    
    bootstrap : [EventsAppComponent]

})

export class AppModule{

}

