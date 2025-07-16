import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-musicpage',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './musicpage.component.html',
  styleUrl: './musicpage.component.css'
})
export class MusicpageComponent {

}
