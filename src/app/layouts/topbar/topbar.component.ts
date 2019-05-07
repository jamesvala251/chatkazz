import { Component, EventEmitter, Output } from '@angular/core';
import * as screenfull from 'screenfull';
import { SharedService } from '../../shared/service/shared.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class TopbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private sharedService: SharedService
  ) { }

  fullScreenToggle(): void {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }

  logout() {
    this.sharedService.logout();
  }

}
