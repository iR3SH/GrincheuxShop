import {AfterViewInit, Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements AfterViewInit{
  @ViewChild("sidenav") child : any
  constructor() {
  }

  ngAfterViewInit() {
    if(this.child !== undefined) {
      this.child.toggle();
    }
  }
}
