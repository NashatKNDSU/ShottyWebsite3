import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MusicpageComponent } from './musicpage/musicpage.component';
import { AboutmepageComponent } from './aboutmepage/aboutmepage.component';
import { EventspageComponent } from './eventspage/eventspage.component';
import { MerchpageComponent } from './merchpage/merchpage.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'music', component: MusicpageComponent },
    { path: 'aboutme', component: AboutmepageComponent},
    { path: 'events', component: EventspageComponent},
    { path: 'merch', component: MerchpageComponent}
];
