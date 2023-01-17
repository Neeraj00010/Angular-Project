import { Component } from '@angular/core';
import { Purchases } from './purchases.model';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})

export class PurchasesComponent {

  constructor(){
    this.randomLogos();
  }

  puchases: Purchases[] = [];
  
  amazonLogo = "https://www.the-sun.com/wp-content/uploads/sites/6/2022/02/NINTCHDBPICT000561981244.jpg";
  amazonPrime = "https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg";


  randomLogos() {
    for (let i = 0; i < 12; i++) {
      let image: string =  i % 2 === 0 ? 'https://www.the-sun.com/wp-content/uploads/sites/6/2022/02/NINTCHDBPICT000561981244.jpg' : 
      'https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg';

      this.puchases.push(new Purchases ('{date}', '{cardName}', 30, 123, image));
    } 
  }
}

