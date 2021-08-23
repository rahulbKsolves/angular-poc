import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => console.log("data.......", data));
    return;
  }
}
