import { Injectable } from '@angular/core';
import { Datamodel } from '../datamodel';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {


  items:Datamodel[]=[
    {
      'id': "1",
      'name': "Dudnge sokmati ",

      'title': "Eye specialist",
      'imageurl':"https://res.cloudinary.com/demo/image/upload/c_scale,w_0.25/c_crop,g_auto,h_160,w_255/dpr_2.0,f_auto/standing_woman.jpg",
      'location':"Mans",
      'rate':3
    },
    {
      'id': "2",
      'name': "Dudnge sokmati ",

      'title': "Eye specialist",
      'imageurl':"https://res.cloudinary.com/demo/image/upload/c_scale,w_0.25/c_crop,g_auto,h_160,w_255/dpr_2.0,f_auto/standing_woman.jpg",
      'location':"Mans",
      'rate':3
    },
    {
      'id': "3",
      'name': "Dudnge sokmati ",

      'title': "Eye specialist",
      'imageurl':"https://res.cloudinary.com/demo/image/upload/c_scale,w_0.25/c_crop,g_auto,h_160,w_255/dpr_2.0,f_auto/standing_woman.jpg",
      'location':"Mans",
      'rate':3
    },
    {
      'id': "4",
      'name': "udin badakoran ",

      'title': "Eye specialist",
      'imageurl':"https://res.cloudinary.com/demo/image/upload/c_crop,h_700,w_800,x_350,y_300/c_fill,h_160,w_255/q_40/dpr_auto/bike.jpg",
      'location':"Mans",
      'rate':3
    },
    {
      'id': "5",
      'name': "udin badakoran ",

      'title': "Eye specialist",
      'imageurl':"https://res.cloudinary.com/demo/image/upload/c_crop,h_700,w_800,x_350,y_300/c_fill,h_160,w_255/q_40/dpr_auto/bike.jpg",
      'location':"Mans",
      'rate':3
    },
  ]

  constructor() { }


  createItem(name,title,imageurl,location,rate){

    let randomId = Math.random().toString(36).substr(2, 5);

    this.items.push({
      'id': randomId,
      'name':name,
      'title': title,
      'imageurl':imageurl,
      'location':location,
      'rate': rate
    });
  }

  getItems(){
    return this.items;
  }

  getItemById(id){
    return this.items.filter(item => item.id === id);
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }

  deleteItem(id){

     return this.items.filter( h =>{ h.id !== id});


  }

}
