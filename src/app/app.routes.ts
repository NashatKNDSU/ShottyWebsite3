import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MusicpageComponent } from './musicpage/musicpage.component';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'music', component: MusicpageComponent },
];
