import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isDisabled = true;
  text = '';

  constructor() {}

  onChangeText() {
    this.isDisabled = false;
  }

}
