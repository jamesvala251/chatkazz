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
  icon: string;
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
    state: '/franchise/dashboard',
    name: 'Dashboard',
    type: 'link',
    icon: 'dashboard',
  },
  {
    state: '/franchise/sale',
    name: 'Sale',
    type: 'sub',
    icon: 'group',
    children: [
      {
        state: '/franchise/create',
        name: 'Create Sale',
        type: 'link',
        icon: 'dashboard'
      },
      {
        state: '/franchise/saleBill',
        name: 'View Sale Bill',
        type: 'link',
        icon: 'pages',
      }
    ]
  },
  {
    state: '/franchise/stock',
    name: 'Stock',
    type: 'link',
    icon: 'dashboard',
  },
  {
    state: '/franchise/order',
    name: 'Order',
    type: 'sub',
    icon: 'group',
    children: [
      {
        state: '/franchise/orderList',
        name: 'Order List',
        type: 'link',
        icon: 'ballot'
      },
      {
        state: '/franchise/newOrder',
        name: 'New Order',
        type: 'link',
        icon: 'ballot'
      }
    ]
  },
  {
    state: '/franchise/customer',
    name: 'Customer',
    type: 'link',
    icon: 'dashboard',
  },
  // {
  //   state: '/franchise/Franchise',
  //   name: 'Franchise',
  //   type: 'link',
  //   icon: 'dashboard',
  // },
  {
    state: '/franchise/reports',
    name: 'Reports',
    type: 'link',
    icon: 'dashboard',
  }
];

@Injectable()
export class FranchiseMenuService {
  menus = MENU_ITEMS;

  getAll(): Menu[] {
    return this.menus;
  }

  add(menu) {
    this.menus.push(menu);
  }
}
