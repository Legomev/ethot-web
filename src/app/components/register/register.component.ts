import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserRegisterModel } from '../../models/userregister.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData! : FormGroup;
  
  constructor(private fb: FormBuilder, private contactService: RegisterService) { }

  ngOnInit(): void {
    this.formData = this.fb.group(
      {
       username: new FormControl('', [Validators.required]),
       email: new FormControl('', Validators.compose( [Validators.required, Validators.email] )),
       password: new FormControl('', [Validators.required]),
       phone: new FormControl('', [Validators.required]),
       address: new FormControl('', [Validators.required])
      }
    )
  }

  onSubmit(formData : FormGroup)  {
    let userRegister : UserRegisterModel = {
      username : formData.controls['username'].value, 
      email : formData.controls['email'].value,
      password : formData.controls['password'].value,
      phone : formData.controls['phone'].value,
      address : formData.controls['address'].value
    }
    
    this.contactService.sendEmail(userRegister);    
  }

}
