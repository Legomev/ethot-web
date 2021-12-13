import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CredentialsModel } from '../../models/credentials.model';
import { TokenModel } from '../../models/token.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  formData! : FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.formData = this.fb.group(
      {
       email: new FormControl('', Validators.compose( [Validators.required, Validators.email] )),
       password: new FormControl('', [Validators.required])
      }
    )
  }

    
  onSubmit(formData : FormGroup)  {
    let credentials : CredentialsModel = {
      email : formData.controls['email'].value, 
      password : formData.controls['password'].value
    }
    
    this.loginService.login(credentials).subscribe(
      (data: TokenModel) => {
        console.log(data)
        this.localStorageService.SaveSession(data);
      }
    ); 
  }

  logout(){
    
  }

}
