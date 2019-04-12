import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../services/itemservice.service';
import { Datamodel } from '../datamodel';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  items:Datamodel[];
  filteritems:Datamodel[];


  item:Datamodel;
  constructor(private itemser:ItemserviceService){
  
  }

  ngOnInit(){
    
   
   this.items= this.itemser.getItems();
  }

  // deleteItem(id){

  //   this.item = this.itemser.getItemById(id)[0];
  //   this.itemser.deleteItem(id);
    
    
  // }


  
  deleteItem(id) {
    console.log(id);
    const index: number = this.items.indexOf(id);
    if (index !== -1) {
        this.items.splice(index, 1);

    
        
    }  


}

}
