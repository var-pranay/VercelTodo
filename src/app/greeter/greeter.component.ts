import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.component.html',
  styleUrl: './greeter.component.css'
})
export class GreeterComponent {
  msg = input();
}
