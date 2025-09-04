import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MusicpageComponent } from './musicpage/musicpage.component';
import { AboutmepageComponent } from './aboutmepage/aboutmepage.component';
import { EventspageComponent } from './eventspage/eventspage.component';
import { MerchpageComponent } from './merchpage/merchpage.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { MinigameComponent } from './minigame/minigame.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'music', component: MusicpageComponent },
    { path: 'aboutme', component: AboutmepageComponent},
    { path: 'events', component: EventspageComponent},
    { path: 'merch', component: MerchpageComponent},
    { path: 'guestbook', component:GuestbookComponent},
    { path: 'minigame', component: MinigameComponent}
];
