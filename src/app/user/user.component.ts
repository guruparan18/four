import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'hash-location',
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  template: `
    <h1>HashLocationStrategy</h1>
    Current URL is: <code>{{location.path()}}</code><br>
    Normalize: <code>/foo/bar/</code> is: <code>{{location.normalize('foo/bar')}}</code><br>
  `
})
export class UserComponent implements OnInit {
  location: Location;
  constructor(location: Location) { this.location = location; };
  ngOnInit() {
  };
}

/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
*/