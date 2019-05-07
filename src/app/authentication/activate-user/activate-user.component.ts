import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { SnakbarService } from 'src/app/shared/service/snakbar.service';
import { AuthenticationService } from '../authentication.service';
import { Messages } from 'src/app/shared/constants/messages.constants';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html'
})

export class ActivateUserComponent implements OnInit, OnDestroy {

  key: string;
  subscriptionManager = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private snakbarService: SnakbarService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.filter(params => params.key).subscribe(params => {
      this.key = params.key;
      this.activateUser();
    });
  }

  activateUser() {
    this.subscriptionManager.add(this.authenticationService.activateUser(this.key).subscribe((res) => {
      this.snakbarService.success(Messages.LOGIN.activate);
      this.router.navigate(['/login']);
    }, (err) => {
    }));
  }

  ngOnDestroy() {
    if (this.subscriptionManager) {
      this.subscriptionManager.unsubscribe();
    }
  }

}
