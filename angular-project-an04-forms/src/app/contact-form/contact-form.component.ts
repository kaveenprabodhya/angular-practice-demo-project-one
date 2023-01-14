import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  firstName: any = 'kaveen';

  model: any = {
    firstName: '',
    comment: '',
    isSubscribed: false,
    contactMethod: '2',
  };

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  constructor() {}

  ngOnInit(): void {}

  log(firstsName: any) {
    console.log(firstsName);
  }

  submit(f: any) {
    console.log(f);
  }
}
