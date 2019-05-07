import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-unauthorise',
  templateUrl: './unauthorise.component.html'
})
export class UnauthoriseComponent {

  constructor(
    public router: Router,
    private location: Location
  ) { }

  goBack() {
    this.location.back();
  }

}
