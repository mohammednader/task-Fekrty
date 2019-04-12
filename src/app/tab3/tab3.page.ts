import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  users=[];
  page=0;
  maximumPage=4;

  constructor(private httpclient:HttpClient){
    this.loadUsers();
  }

  loadUsers(infinitescroll?){
    this.httpclient.get(`https://randomuser.me/api/?results=200`).subscribe(res=>
    {
      this.users=res['results'];

    
    });
  }
  loadMore(infinitescroll){
    this.page++;
    this.loadUsers(infinitescroll);

    if(this.page==this.maximumPage){
      infinitescroll.enable("false");
    }
  }

  ngOnInit(){

    
  }
}
