import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { Commercant } from 'app/models/commercant';

@Component({
  selector: 'app-table',
  templateUrl: './commercant.component.html',
  styleUrls: ['./commercant.component.css']
})
export class CommercantComponent implements OnInit {
  commercants: Commercant[];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getCommercants().subscribe((res)=>{
      this.commercants = res; 
    });
  }

}
