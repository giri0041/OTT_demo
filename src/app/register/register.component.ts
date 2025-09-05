import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  handleSubmit(registerForm:any){
    alert("Thank you "+registerForm.name+"!! verification link is sent to "+registerForm.email)
  }
 registerForm:FormGroup;
  constructor(){
    this.registerForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required)
    })

  }
  
}
