import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemserviceService } from 'src/app/services/itemservice.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.page.html',
  styleUrls: ['./update-item.page.scss'],
})
export class UpdateItemPage implements OnInit {

  item: any;
  edit_item_form: FormGroup;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public formBuilder: FormBuilder,
    private itemService: ItemserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.item = this.itemService.getItemById(data.id)[0];
        //if item is undefined, go back to home
        if(!this.item){
          this.goBack();
        } 
        else{
          this.edit_item_form = this.formBuilder.group({
            name: new FormControl(this.item.name, Validators.required),
            title: new FormControl(this.item.title, Validators.required),
            imageurl: new FormControl(this.item.imageurl, Validators.required),
            rate: new FormControl(this.item.rate, Validators.required),

          });
        }
      }
    )
  }

  goBack(){
    this.router.navigate(['tabs/tab2']);
  }

  updateItem(value){
    let newValues = {
      id: this.item.id,
      name: value.name,
      title: value.title,
      imageurl: value.imageurl,
      rate: value.rate,
 
     
    }
    this.itemService.updateItem(newValues);
    this.goBack();
  }
 

}



