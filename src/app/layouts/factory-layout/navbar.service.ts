
import { MenuItems } from '../../shared/constants/common.constants';
import { Injectable } from '@angular/core';

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
    state: '/factory/dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'dashboard',
  },
  {
    state: '/factory/order',
    name: 'Order',
    type: 'link',
    icon: 'dashboard',
  },
  {
    state: '/factory/stock',
    name: 'Stock',
    type: 'link',
    icon: 'dashboard',
  },
  {
    state: '/factory/report',
    name: 'Report',
    type: 'link',
    icon: 'dashboard',
  }
];

@Injectable()
export class FactoryMenuService {
  menus = MENU_ITEMS;

  getAll(): Menu[] {
    return this.menus;
  }

  add(menu) {
    this.menus.push(menu);
  }
}
