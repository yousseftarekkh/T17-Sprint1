import { NbMenuItem } from '@nebular/theme';
import { StoreComponent } from './store/store.component';

export const MENU_ITEMS: NbMenuItem[] = [

   { title: 'Dashboard', icon: 'nb-paper-plane', link: '/dashboard', home: true },
   {
     title: 'Store',
     icon: 'fa fa-shopping-basket',
     link: '/dashboard/store',
     children: [
       {
         title: 'All Products',
         icon: 'fa fa-list',
         link: '/dashboard/store/allproducts',
       },
       {
       title: 'Fashion Store (C1)',
       icon: 'fa fa-female',
       link: '/dashboard/store/fashionstore',
     },
       {
         title: 'Sports Store (C2)',
         icon: 'fa fa-soccer-ball-o',
         link: '/dashboard/store/sportstore',
       },
       {
         title: 'Food Store (C3)',
         icon: 'fa fa-cutlery',
         link: '/dashboard/store/foodstore',

       },
       {
         title: 'Toys Store (C4)',
         icon: 'fa fa-gamepad',
         link: '/dashboard/store/toystore',

       },
       {
         title: 'Electronics Store (C5)',
         icon: 'fa fa-plug',
         link: '/dashboard/store/electronics',

       },


   ]
   },
  {
    title: 'My Items',
    icon: 'fa fa-shopping-bag	',
    link: '/dashboard/myitems'

  },
  {
    title: 'Cart',
    icon: 'fa fa-cart-arrow-down',
    link: '/dashboard/items'
  },

];
