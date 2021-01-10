import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';

interface Location {
  name: string;
  address: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})

export class AppComponent implements OnInit {
  userDate: Date;
  userTemp;
  indoor: Location[] = [
    {name: 'Panera Bread',  address: '8 Spit Brook Rd, Nashua, NH 03060'},
    {name: 'Barnes & Noble',  address: '235 Daniel Webster Hwy, Nashua, NH 03060'},
    {name: 'Pheasant Mall',  address: '310 Daniel Webster Hwy, Nashua, NH 03060'},
    {name: 'Tesla',  address: '888 Boylston St, Boston, MA 02199'},
  ];
  outdoor: Location[] = [
    {name: 'Pressed Cafe',  address: '108 Spit Brook Rd, Nashua, NH 03062'},
    {name: 'Umass Amherst',  address: 'Amherst, MA 01003'},
    {name: 'Mines Fall Park',  address: 'Nashua, NH 03060'},
    {name: 'Roby Park',  address: '126 Spit Brook Rd, Nashua, NH 03062'},
  ];

  meetingMessage: string;
  // tslint:disable-next-line:no-inferrable-types
  showUserMessage: boolean = false;

  constructor(private messageService: MessageService) {}
  ngOnInit() {}

  showTopCenter() {
    this.messageService.add({key: 'tc', severity: 'error', summary: 'Error', detail: 'Please enter valid input'});
  }

  onSelection($event) {
    this.showUserMessage = false;
  }

  onFocus($event) {
    this.showUserMessage = false;
  }


  handleClick($event) {
    this.showUserMessage = false;
    let place;

    if (this.userDate === undefined || this.userTemp === undefined){
     this.showTopCenter();
    }

    else {
      if (this.userTemp < 50) {
        place = this.indoor[Math.floor(Math.random() * this.indoor.length)];
      }
      else {
        place = this.outdoor[Math.floor(Math.random() * this.outdoor.length)];
      }

    }


    this.meetingMessage = 'Let\'s meet at ' + place.name + ' on ' + this.userDate + ' located at ' + place.address;
    this.showUserMessage = true;
}

}






