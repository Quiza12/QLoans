import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  url = 'https://prod-05.australiaeast.logic.azure.com:443/workflows/2ccd5f79a313406ba8d41efba5e9d58b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ek2I_W9-Cf_iUjgbH2T6QmgEDdHrCNAYlaBtwd1-vss';
  
  constructor(private http: HttpClient) { }

  postData(value: any) {
    return this.http.post(this.url, value);
  }

}
