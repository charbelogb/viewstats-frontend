import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
import {ApiService} from '../../../services/api.service';
declare const $: any;

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user = new User();
  model : any = {};
  result : any = {};

  constructor(private apiService : ApiService, private router : Router) { }

  ngOnInit() {
    this.model.sexe = "H";
    this.model.role = "1";
  }

  addUser(f: NgForm){
    console.log(this.model);
    this.user.prenom = this.model.prenom;
    this.user.nom = this.model.nom;
    this.user.date_naissance = this.model.date_naissance;
    this.user.sexe = this.model.sexe;
    this.user.email = this.model.email;
    this.user.password = this.model.password;
    this.user.role = this.model.role;
    this.apiService.addUtilisateur(this.user).subscribe((res)=>{ //console.log(res);
      this.result = res;
      if(this.result.status == 200){
        this.showPopPup("top-center", "Utilisateur ajouté avec succès !");
        this.router.navigate(['/dashboard/user'])
        //this.model = {};
      }else{
        this.showPopPup("top-center", "Echec !");
      }
      
    });
    
  }

  reset(){
    
  }

  showPopPup(position, msg) { 
    let from = 'top';
    let align = 'right';
    let type = 'info';
    switch (position) {
      case 'top-left':
        align = 'left';
        type = 'rose';
        break;
      case 'top-center':
        align = 'center';
        type = 'success';
        break;
      case 'bottom-left':
        align = 'left';
        from = 'bottom';
        type = 'primary';
        break;
      case 'bottom-center':
        align = 'center';
        from = 'bottom';
        type = 'warning';
        break;
      case 'bottom-right':
        from = 'bottom';
        type = 'danger';
        break;
    }
    $.notify({
      message: msg,
    }, {
      placement: {from, align},
      offset: {x: 20, y: 35},
      type,
      template: `<div class="alert alert-{0} alert-with-icon col-md-4">
          <button class="close" type="button" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>
          <span>{2}</span>
        </div>`
    });
  }

}
