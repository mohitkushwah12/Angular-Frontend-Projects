import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {

  user: any;
  animateProfile: boolean = false;

  constructor(private customerService: CustomerService){}

  ngOnInit(){
    this.customerService.getUserProfileByUserId().subscribe(res => {
      // console.log(res);
      this.user = res;
    });
    setTimeout(() => {
      this.animateProfile = true;
    }, 500);
  }
}
