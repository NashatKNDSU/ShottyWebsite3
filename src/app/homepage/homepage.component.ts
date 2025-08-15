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
import { GuitarcursorComponent } from '../guitarcursor/guitarcursor.component';
import { ExtragifsComponent } from "../extragifs/extragifs.component";
import { EarthComponent } from "../earth/earth.component";
import { ThumbsupComponent } from "../thumbsup/thumbsup.component";
import { CowComponent } from "../cow/cow.component";
import { TylerComponent } from "../tyler/tyler.component";
import { NyancatComponent } from "../nyancat/nyancat.component";
import { KissComponent } from "../kiss/kiss.component";

@Component({
  selector: 'app-homepage',
  imports: [MusicpageComponent, RouterOutlet, RouterLink, RouterLinkWithHref, NavbarComponent, FlashingTitleComponent, TitlecardComponent, FooterComponent, SociallinksComponent, FrontpageComponent, MaintextComponent, GuitarcursorComponent, ExtragifsComponent, EarthComponent, ThumbsupComponent, CowComponent, TylerComponent, NyancatComponent, KissComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
