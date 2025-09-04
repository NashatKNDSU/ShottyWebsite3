import { Component } from '@angular/core';
import { SociallinksComponent } from "../sociallinks/sociallinks.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ToplefthomeComponent } from "../toplefthome/toplefthome.component";

@Component({
  selector: 'app-guestbook',
  imports: [SociallinksComponent, NavbarComponent, ToplefthomeComponent],
  templateUrl: './guestbook.component.html',
  styleUrl: './guestbook.component.css'
})
export class GuestbookComponent {

}
