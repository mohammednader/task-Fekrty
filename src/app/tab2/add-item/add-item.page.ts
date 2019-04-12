import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemserviceService } from 'src/app/services/itemservice.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  new_item_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private itemService: ItemserviceService
  ) { }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      imageurl: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.required)
    });
  }

  goBack(){
    this.router.navigate(['tabs/tab2']);
  }

  createItem(value){
    this.itemService.createItem(value.name,value.title,value.imageurl,value.location,value.rate);
    this.new_item_form.reset();
    this.goBack();
  }

}
