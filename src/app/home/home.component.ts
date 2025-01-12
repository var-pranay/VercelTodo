import { Component, signal } from '@angular/core';
import { GreeterComponent } from '../greeter/greeter.component';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-home',
  imports: [GreeterComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // providers:[TodosService]
})
export class HomeComponent {
  message = signal('hello from...');

  eventhandle(event:KeyboardEvent) : void{
    console.log(`user type ${event.key}`);
  }
}
