import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
declare const $: any;

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user : User;
  nom : any;
  prenom : any;
  sexe : any;

  constructor() { }

  ngOnInit() {
  }

  addUser(){
    this.user.nom = this.nom;
    this.user.prenom = this.prenom;
    this.user.sexe = this.sexe;
    alert(this.user);
  }

  btnClick(position) { 
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
      message: 'Utilisateur ajouté avec succès !',
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
