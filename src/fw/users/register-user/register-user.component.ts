import { Component, OnInit } from '@angular/core';
import { Everlive  } from 'angular-everlive';

@Component({
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private el:Everlive) { }

  ngOnInit() {

  }

}
