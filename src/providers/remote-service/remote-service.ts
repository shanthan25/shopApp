import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RemoteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getApiUrl : string = "https://jsonplaceholder.typicode.com/posts";
  //getApiUrl : string = "http://127.0.0.1:8000/getProducts";

  getPosts() {
    return  this.http.get(this.getApiUrl)
      .do((res : Response ) => console.log(res.json()))
        .map((res : Response ) => res.json())
        .catch(error => "console.log(error)");
  }
}
