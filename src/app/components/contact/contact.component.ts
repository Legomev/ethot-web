import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ContactInfoModel } from '../../models/contactinfo.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData! : FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.formData = this.fb.group(
      {
       fullname: new FormControl('', [Validators.required]),
       email: new FormControl('', Validators.compose( [Validators.required, Validators.email] )),
       comment: new FormControl('', [Validators.required])
      }
    )
  }


  
  onSubmit(formData : FormGroup)  {
    let contactInfo : ContactInfoModel = {
      email : formData.controls['email'].value, 
      fullName : formData.controls['fullname'].value, 
      comment : formData.controls['comment'].value 
    }
    
    this.contactService.sendEmail(contactInfo);
  }
  

}