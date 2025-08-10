import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SociallinksComponent } from '../sociallinks/sociallinks.component';

@Component({
  selector: 'app-eventspage',
  imports: [NavbarComponent,SociallinksComponent],
  templateUrl: './eventspage.component.html',
  styleUrl: './eventspage.component.css'
})
export class EventspageComponent {

}
