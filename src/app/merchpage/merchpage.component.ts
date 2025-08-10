import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SociallinksComponent } from '../sociallinks/sociallinks.component';

@Component({
  selector: 'app-merchpage',
  imports: [NavbarComponent, SociallinksComponent],
  templateUrl: './merchpage.component.html',
  styleUrl: './merchpage.component.css'
})
export class MerchpageComponent {

}
