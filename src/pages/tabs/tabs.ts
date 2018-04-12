import { Component } from '@angular/core';

import { MiningPage } from '../mining/mining';
import { WalletPage } from '../wallet/wallet';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MiningPage;
  tab3Root = WalletPage;

  constructor() {

  }
}
