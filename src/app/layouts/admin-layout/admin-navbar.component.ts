import { Component } from '@angular/core';
import { AdminMenuService } from './navbar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-admin-navbar',
    templateUrl: './admin-navbar.component.html'
})

export class AdminNavbarComponent {
    currentPath: string;
    constructor(
        public menuService: AdminMenuService,
        public router: Router
    ) { }

    ngOnInit() {
        this.currentPath = this.router.url;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currentPath = event.url;
            }
        });
    }

    checkForActive(item) {
        if (item) {
            if (this.currentPath.endsWith(item.state)) {
                return 'active';
            }
        } else {
            return '';
        }
    }
    addMenuItem(): void {
        this.menuService.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timeline', name: 'MENU' }
            ]
        });
    }
}
