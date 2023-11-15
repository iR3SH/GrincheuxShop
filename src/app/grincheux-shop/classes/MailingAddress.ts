export class MailingAddress {
  address : string;
  label : string;
  constructor(address : string = "", label : string = "") {
    this.address = address;
    this.label = label;
  }
}
