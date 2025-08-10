import { Component } from '@angular/core';
import { MusicpageComponent } from '../musicpage/musicpage.component';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FlashingTitleComponent } from "../flashing-title/flashing-title.component";
import { TitlecardComponent } from "../titlecard/titlecard.component";
import { FooterComponent } from "../footer/footer.component";
import { SociallinksComponent } from "../sociallinks/sociallinks.component";
import { FrontpageComponent } from "../frontpage/frontpage.component";
import { MaintextComponent } from "../maintext/maintext.component";

@Component({
  selector: 'app-homepage',
  imports: [MusicpageComponent, RouterOutlet, RouterLink, RouterLinkWithHref, NavbarComponent, FlashingTitleComponent, TitlecardComponent, FooterComponent, SociallinksComponent, FrontpageComponent, MaintextComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
