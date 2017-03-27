import { Component, OnInit } from '@angular/core';

import { F1SimpleServiceService } from '../f1-simple-service.service';
import { Driver } from '../driver';

@Component({
  selector: 'app-simple-http-service',
  templateUrl: './simple-http-service.component.html',
  styleUrls: ['./simple-http-service.component.css'],
  providers: [F1SimpleServiceService]
})
export class SimpleHttpServiceComponent implements OnInit {
  public drivers : Driver[];
  constructor(private service: F1SimpleServiceService) { 
    service
      .getDrivers()
      .subscribe(response => this.drivers = response);
  }

  ngOnInit() {
    this.drivers
  }

}
