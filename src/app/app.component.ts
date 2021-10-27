import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {passwordMatcher} from './custom-validators/password-match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';

  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.requiredTrue]
    },{
      validators:passwordMatcher('password','confirmPassword')
    });

  }

  onReset(){
    this.submitted=false;
    this.registerForm.reset();
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    
    console.table(this.registerForm.value);
    console.table(this.registerForm);
    alert("Success Signup\n"+JSON.stringify(this.registerForm.value));
    
  }

}
