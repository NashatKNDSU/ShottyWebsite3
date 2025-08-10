import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SociallinksComponent } from '../sociallinks/sociallinks.component';

@Component({
  selector: 'app-aboutmepage',
  imports: [NavbarComponent, SociallinksComponent],
  templateUrl: './aboutmepage.component.html',
  styleUrl: './aboutmepage.component.css'
})
export class AboutmepageComponent {

}
