import { Injectable } from '@angular/core';
import { MenuItems } from '../../shared/constants/common.constants';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENU_ITEMS = [
  {
    state: '/admin/dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'dashboard'
  },
  {
    state: '/admin/master',
    name: 'Master',
    type: 'sub',
    icon: 'group',
    children: [
      {
        state: '/admin/users',
        name: 'Users',
        type: 'link',
        icon: 'dashboard'
      },
      {
        state: '/admin/factory',
        name: 'Factory',
        type: 'link',
        icon: 'pages',
      },
      {
        state: '/admin/dishes',
        name: 'Dishes',
        type: 'link',
        icon: 'group',
      },
      {
        state: '/admin/menu',
        name: 'Menu',
        type: 'link',
        icon: 'group',
      },
      {
        state: '/admin/franchise',
        name: 'Franchise',
        type: 'link',
        icon: 'ballot'
      }
    ]
  },
  {
    state: '/admin/report',
    name: 'Report',
    type: 'link',
    icon: 'dashboard',
  }
];


@Injectable()
export class AdminMenuService {
  menus = MENU_ITEMS;

  getAll(): Menu[] {
    return this.menus;
  }

  add(menu) {
    this.menus.push(menu);
  }
}
