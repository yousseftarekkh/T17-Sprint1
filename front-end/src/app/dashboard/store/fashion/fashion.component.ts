import { Component, OnInit } from '@angular/core';
import { LocalDataSource,Ng2SmartTableModule } from 'ng2-smart-table';
import { FashionService } from './fashion.service';

@Component({
  selector: 'app-electronics',
  template: `<h1>
  Fashion Products

 </h1>

 <h3>To add products to your Cart, just click on the product! ;)</h3>

 <ng2-smart-table [settings]="settings" [source]="data"  (userRowSelect)="onUserRowSelect($event)"></ng2-smart-table>


 `,
  styleUrls: ['./fashion.component.scss'],
  providers:[FashionService]
})
export class FashionComponent implements OnInit {

  source : LocalDataSource;

 settings = {


    actions:false,

    columns: {

      name: {
        title: 'Name',
        filter:String
      },
      price: {
        title: 'Price',
        filter:String
      },

      seller: {
        title: 'Seller Name',
        filter:String
      },
      createdAt: {
        title: 'CreatedAt',
        filter:false
      },
      updatedAt: {
        title: 'UpdatedAt',
        filter:false
      }


    }
  };

  data = [];


  constructor(private fashionService:FashionService) { }

  ngOnInit() {

    this.fashionService.getProducts().subscribe(
      (res: any) => {
       // console.log(res.data)
       if(res.hasOwnProperty('data')){console.log(res);console.log(res.data);
       this.data = res.data;}
      }
   );
  }

  onUserRowSelect(event):void
  {
    alert('Added to Cart');
    
      this.fashionService.createProduct(window.sessionStorage.email,event.data.name, event.data.price,event.data.component,event.data.seller).subscribe();
  }

  }
