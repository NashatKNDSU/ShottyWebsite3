import { Component } from '@angular/core';
import { SociallinksComponent } from "../sociallinks/sociallinks.component";
import { ToplefthomeComponent } from "../toplefthome/toplefthome.component";

@Component({
  selector: 'app-minigame',
  imports: [SociallinksComponent, ToplefthomeComponent],
  templateUrl: './minigame.component.html',
  styleUrl: './minigame.component.css'
})
export class MinigameComponent {

}
