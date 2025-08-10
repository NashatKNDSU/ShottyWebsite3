import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { SociallinksComponent } from "../sociallinks/sociallinks.component";

@Component({
  selector: 'app-musicpage',
  imports: [NavbarComponent, FooterComponent, SociallinksComponent],
  templateUrl: './musicpage.component.html',
  styleUrl: './musicpage.component.css'
})
export class MusicpageComponent {

}
