import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchasesListComponent } from './purchases/purchases-list/purchases-list.component';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardsListComponent } from './rewards/rewards-list/rewards-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { RewardsItemComponent } from './rewards/rewards-item/rewards-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RewardsComponent,
    RewardsListComponent,
    ProfileComponent,
    PurchasesComponent,
    RewardsItemComponent,
    PurchasesListComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
