import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData! : FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormData = this.fb.group(
      {
       Fullname: new FormControl('', [Validators.required]),
       Email: new FormControl('', Validators.compose( [Validators.required, Validators.email] )),
       Comment: new FormControl('', [Validators.required])
      }
    )
  }


  
  onSubmit(FormData : FormGroup) {
    console.log(FormData)
    /*
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })*/

  }
  

}