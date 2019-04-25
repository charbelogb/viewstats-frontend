import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Commercant } from 'app/models/commercant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numberOfComm : any ;
  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getCommercants().subscribe((res)=>{
      this.numberOfComm = res.length; 
    });
  }

}
