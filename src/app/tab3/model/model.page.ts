import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-model',
  templateUrl: './model.page.html',
  styleUrls: ['./model.page.scss'],
})
export class ModelPage implements OnInit {

  users:[] ;
  item:any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
 
    private httpclient:HttpClient
  ) { }

  ngOnInit() {

    this.loadUsers();
   
  }

  loadUsers(){
    this.httpclient.get(`https://randomuser.me/api/?results.sha256==${ this.route.params.subscribe(data=>this.item==data)}`).subscribe(res=>
    {
      this.users=res['results'];

      console.log(res['results'])
    });
    
  }

}
