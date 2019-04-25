import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Commercant} from '../models/commercant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  public getCommercants(url?: string){
    return this.httpClient.get<Commercant[]>(`${this.apiURL}/commercants`);
  }
}
