import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss'
})
export class AddressesComponent implements OnInit{
  addresses : any = []
  selectedAddress : any = {}
  useUpdate : Boolean = true;

  constructor(private profileService : ProfileService) {
  }

  ngOnInit() {
    this.updateAddresses();
  }

  updateAddresses() {
    this.profileService.getAddresses().subscribe({
      next : (result) => {
        this.addresses = result;
      }
    });
  }

  updateAddress() {
    this.profileService.updateAddress(this.selectedAddress).subscribe({
      next: () => {
        this.updateAddresses();
      }
    })
  }

  changeModel(addresse : any) {
    this.selectedAddress = addresse;
  }

  setUpdate(b: boolean) {
    this.useUpdate = b;
  }
}
