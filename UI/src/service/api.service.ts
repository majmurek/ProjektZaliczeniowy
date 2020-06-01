import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchApiInitCatalog(search: string = null) {
    const params = search ? new HttpParams().set('searchfor', `${search}`) : new HttpParams();

    return this.http.get<any>(config.catalogApi, {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
      params
    });
  }
}
