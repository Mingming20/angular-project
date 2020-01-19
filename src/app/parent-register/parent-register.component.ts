import { Component, OnInit } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-parent-register',
  templateUrl: './parent-register.component.html',
  styleUrls: ['./parent-register.component.css']
})
export class ParentRegisterComponent implements OnInit {
  public info: Array<Info>;
  public form: Info;

  
  constructor() { 
    this.info = new Array<Info>();
    this.form = new Info();
  }

  ngOnInit() {
  }
  onSubmit(form){
    this.info.push(form.form.value);
    form.form.reset();
  }

  editForm(info) {
    this.form = info;
    this.info = this.info.filter(item => {
      if (item != info) {
        return item;
      }
    })
  }
}
