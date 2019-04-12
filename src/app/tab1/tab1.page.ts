import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators }from '@angular/forms'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  loginform:FormGroup;

  validation_messages = {
   
      'name': [
        { type: 'required', message: 'Name is required.' }
      ],
      'birthDay': [
        { type: 'required', message: 'birthday is required.' }
      ],
      'email': [
        { type: 'required', message: 'email is required.' },
        { type: 'pattern', message: 'Invalid Email' },

      ],
      'phone': [
        { type: 'required', message: 'phone is required.' }
      ],
      'location': [
        { type: 'required', message: 'location is required.' }
      ],

    
    
    }

  constructor(public formBuilder:FormBuilder ,public alertController: AlertController){

    this.loginform = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      birthDay: new FormControl('',Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      phone: new FormControl('',Validators.required),
      location: new FormControl('',Validators.required)


    });
  }

  
    async presentAlert() {
      const alert = await this.alertController.create({
       
        subHeader: 'Congratulation',
        message: 'You Signed successfully ',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  

  ngOnInit(){}
}
