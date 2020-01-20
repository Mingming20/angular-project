import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-child-register',
  templateUrl: './child-register.component.html',
  styleUrls: ['./child-register.component.css']
})
export class ChildRegisterComponent implements OnInit {
  @Input() registered: Array<Info>;
  @Output() submit = new EventEmitter();
  // @Output() notify = new EventEmitter();

  constructor() { 
    this.registered = new Array<Info>();
  }

  edit(form) {
    this.submit.emit(form);
  }
  ngOnInit() {
  }
  // Notify(){
  //   this.notify.emit("Thank you for registering!Your information was recieved.")
  // }
  

}