import {Component, OnInit} from '@angular/core';
import {ShopService} from "../service/shop.service";

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrl: './computers.component.scss'
})
export class ComputersComponent implements OnInit{
  constructor(private shopService : ShopService) {
  }
  ngOnInit() {
  }
}
