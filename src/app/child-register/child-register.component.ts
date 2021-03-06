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
  @Output() onsubmit = new EventEmitter();
  @Output() onedit = new EventEmitter();


  constructor() { 
    this.registered = new Array<Info>();
  }

  edit(form) {
    this.submit.emit(form);
    this.onsubmit.emit(true);
    this.onedit.emit(false);
  }
  ngOnInit() {
  }
  back(){
    this.onsubmit.emit(true);
    this.onedit.emit(false);
  }

}