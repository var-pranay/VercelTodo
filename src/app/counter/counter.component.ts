import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = signal(0);
   add = () : void=>{
    this.counter.update((val)=>val+1);
  }
  substract = () : void=>{
    this.counter.update((val)=>val-1);
  }
  reset = () : void =>{
    this.counter.set(0);
  }
}
