import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import swal from 'sweetalert';

@Component({
  selector: 'app-parent-register',
  templateUrl: './parent-register.component.html',
  styleUrls: ['./parent-register.component.css']
})
export class ParentRegisterComponent implements OnInit {
  public info: Array<Info>;
  public form: Info;
  public notified: string;
  public submitclick = true;
  public editclick = false;

  
  constructor() { 
    this.info = new Array<Info>();
    this.form = new Info();
  }

  ngOnInit() {
  }
  onSubmit(form){
    swal({
      title: "Submitted Successfully!",
      text: "Thank you for registering!You're information has been sent.",
      icon:"success"
    });
    this.info.push(form.form.value);
    form.form.reset();
    this.submitclick = false;
    this.editclick = true;
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
