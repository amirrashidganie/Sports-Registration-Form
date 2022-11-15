import { Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  txt='text';

  brdr = 4;



  k = 0;

  bt() {
    // this.k++;
    // console.log("Submit Successfully", this.k);
    alert("Register Successfully")
  }

  username = "Enter Username!";
  password = "Enter password!";
  number = +91786238763;

  pass() {
    console.log("", this.password);
  }

  name() {
    console.log(" ", this.username);
  }


  num() {
    console.log("", this.number);
  }


  res() {
    console.log("Reset Successfully");

  }
  my($event: any) {
    console.log("You Pressed a" + $event);
  }

  changeV1(formval:any){

  }
  changeV2(formval2:any){

  }
  changeV3(FormAdd:any){}

  submit(frm:any){
    console.log(frm.value);
  }
  sub=false;
  submitted(){
    this.sub=true;
  }
}
