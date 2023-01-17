import { Component } from '@angular/core';
import { Rewards } from '../rewards.model';

@Component({
  selector: 'app-rewards-item',
  templateUrl: './rewards-item.component.html',
  styleUrls: ['./rewards-item.component.css']
})
export class RewardsItemComponent {

  cardName: Rewards[] = [
    new Rewards('Air Canada', 10, 50, 10, 'https://logos-world.net/wp-content/uploads/2021/05/Air-Canada-Logo-700x394.png'),
    new Rewards('Amazon', 10, 50, 10, 'https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg'),
    new Rewards('Apple', 10, 50, 10, 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/gifting/giftcardscertificates/gift-cards-app-store-itunes.png')
  ];

  // constructor() {
  //   this.avalaibleGiftCards();
  // }

  // giftCards: Rewards[] = [];

  // avalaibleGiftCards() {
  //   for (let i = 0; i < 6; i++) {
  //     this.giftCards.push(new Rewards('Air Canada', 10, 50, 'https://logos-world.net/air-canada-logo/'));
  //     this.giftCards.push(new Rewards('Amazon', 10, 50, 'https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg'));
  //     this.giftCards.push(new Rewards('Apple', 10, 50, 'https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png'));
  //   }
  // }

}
