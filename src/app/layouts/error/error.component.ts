import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {

  constructor(
    public router: Router,
    private location: Location
  ) { }

  goBack() {
    this.location.back();
  }

}
