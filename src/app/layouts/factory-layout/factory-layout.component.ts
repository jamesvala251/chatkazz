import { Component, ElementRef, NgZone, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

const SMALL_WIDTH_BREAKPOINT = 960;

@Component({
    selector: 'app-factory-layout',
    templateUrl: './factory-layout.component.html'
})

export class FactoryLayoutComponent implements OnInit, OnDestroy {
    private _router: Subscription;

    mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
    url: string;
    sidePanelOpened;
    options = {
        collapsed: false,
        compact: false,
        boxed: false,
        dark: false,
        dir: 'ltr'
    };

    @ViewChild('sidemenu') sidemenu;
    @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;

    public config: PerfectScrollbarConfigInterface = {};

    constructor(
        private _element: ElementRef,
        private router: Router,
        zone: NgZone) {
        this.mediaMatcher.addListener(mql => zone.run(() => {
            this.mediaMatcher = mql;
        }));
    }

    ngOnInit(): void {
        this.url = this.router.url;

        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            document.querySelector('.app-inner > .mat-drawer-content > div').scrollTop = 0;
            this.url = event.url;
            this.runOnRouteChange();
        });
    }

    ngOnDestroy(): void {
        this._router.unsubscribe();
    }

    runOnRouteChange(): void {
        if (this.isOver()) {
            this.sidemenu.close();
        }

        this.updatePS();
    }

    receiveOptions($event): void {
        this.options = $event;
    }

    isOver(): boolean {
        return this.mediaMatcher.matches;
    }

    menuMouseOver(): void {
        if (this.mediaMatcher.matches && this.options.collapsed) {
            this.sidemenu.mode = 'over';
        }
    }

    menuMouseOut(): void {
        if (this.mediaMatcher.matches && this.options.collapsed) {
            this.sidemenu.mode = 'side';
        }
    }

    updatePS(): void {
        if (!this.mediaMatcher.matches && !this.options.compact) {
            setTimeout(() => {
                this.directiveScroll.update();
            }, 350);
        }
    }
}
