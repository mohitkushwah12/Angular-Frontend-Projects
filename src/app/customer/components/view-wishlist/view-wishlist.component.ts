import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(600, style({ opacity: 1 })),
        ]),
      ]),
    ],
})
export class ViewWishlistComponent {

  products: any[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getWishlistByUserId();
  }

  getWishlistByUserId() {
    this.customerService.getWishlistByUserId().subscribe(res => {
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.products.push(element);
      });
    })
  }
}
