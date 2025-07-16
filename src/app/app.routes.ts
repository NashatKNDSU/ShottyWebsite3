import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MusicpageComponent } from './musicpage/musicpage.component';
import { GuestbookComponent } from './guestbook/guestbook.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'music', component: MusicpageComponent },
    { path: 'guestbook', component: GuestbookComponent}
];
