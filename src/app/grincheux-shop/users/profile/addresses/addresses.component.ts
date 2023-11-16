import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {Router} from "@angular/router";
import {Dialog} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.scss'
})
export class AddressesComponent implements OnInit{
  addresses : any = []
  selectedAddress : any = {}
  useUpdate : Boolean = true;
  newAddress : any = {}
  dialogRef: any
  @ViewChild("modalAddAddress") child! : TemplateRef<any>

  constructor(private profileService : ProfileService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.updateAddresses();
  }

  updateAddresses() {
    this.profileService.getAddresses().subscribe({
      next : (result) => {
        this.addresses = result;
        this.addresses.sort((a : any, b : any) => a.label.localeCompare(b.label))
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

  newAdresse() {
    this.profileService.newAddress(this.newAddress).subscribe({
      next: (res) => {
        this.addresses = [...this.addresses, res];
        this.addresses.sort((a : any, b : any) => a.label.localeCompare(b.label))
        this.dialogRef = null;
        this.dialog.closeAll();
      }
    })
  }

  toogleModal() {
    this.dialogRef = this.dialog.open(this.child)
  }
}
