import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Driver } from './driver'; 
import 'rxjs/add/operator/map';

@Injectable()
export class F1SimpleServiceService {
  private request$: Observable<Driver[]>
  constructor(private http: Http) { 
    this.request$ = http.get(`http://ergast.com/api/f1/2017/drivers.json`)
      .map(response => response.json().MRData.DriverTable.Drivers)
  }

public getDrivers(): Observable<Driver[]> {
  return this.request$;
}

}
