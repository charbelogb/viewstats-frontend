import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { User } from 'app/models/user';

@Component({
  selector: 'app-table',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : User[];

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.apiService.getUtilisateurs().subscribe((res)=>{
      this.users = res; 
    });
  }

}
