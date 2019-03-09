
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class TesterService {

    // isOpen = false;

    @Output() change: EventEmitter<boolean> = new EventEmitter();
  
    toggle(flag: boolean) {
        console.log('toggle tester');
    //   this.isOpen = !this.isOpen;
      this.change.emit(flag);//this.isOpen);
    }
}