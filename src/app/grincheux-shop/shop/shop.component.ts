import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  @ViewChild("sidenav") child : any
  constructor() {
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.child.toggle();
  }
}
