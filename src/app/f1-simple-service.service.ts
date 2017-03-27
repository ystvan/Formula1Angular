import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Driver } from './driver'; 

@Injectable()
export class F1SimpleServiceService {

  constructor(private http: Http) { }

public getDrivers(): Observable<Response> {
  return this.http.get('http://ergast.com/api/f1/2017/drivers.json');
}

}
