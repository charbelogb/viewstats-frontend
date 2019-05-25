import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Commercant} from '../models/commercant';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  public getCommercants(url?: string){
    return this.httpClient.get<Commercant[]>(`${this.apiURL}/commercant`);
  }

  public getUtilisateurs(url?: string){
    return this.httpClient.get<User[]>(`${this.apiURL}/utilisateur`);
  }

  public addUtilisateur(user: User){
    return this.httpClient.post(`${this.apiURL}/utilisateur/add`, user);
  }
}
