import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { stringify } from '@angular/compiler/src/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputProject';
  personForm
  detail = []

  //details: string;
  //name: string;
  //surname: string;
  //age: number;
  //email: string;
  //contact: number;



  constructor(public formBuilder: FormBuilder) {
    this.personForm = formBuilder.group({
      name: ["", Validators.required],
      Surname: ["", Validators.required],
      Age: ["", Validators.required],
      Email: ["", Validators.email],
      Telephone: ["", Validators.required],
    })
  }

  AddDetails(){
    this.detail.push({
      myname:this.personForm.value.name,
      mySurname:this.personForm.value.Surname,
      myAge:this.personForm.value.Age,
      myEmail:this.personForm.value.Email,
      myTelephone:this.personForm.value.Contact

    })
  }
  
}