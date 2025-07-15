import { Component } from '@angular/core';
import { MusicpageComponent } from '../musicpage/musicpage.component';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FlashingTitleComponent } from "../flashing-title/flashing-title.component";

@Component({
  selector: 'app-homepage',
  imports: [MusicpageComponent, RouterOutlet, RouterLink, RouterLinkWithHref, NavbarComponent, FlashingTitleComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
