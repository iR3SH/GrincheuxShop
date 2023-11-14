export class User {
  username : string;
  lastName : string;
  firstName : string;
  email : string;
  password : string;
  constructor(username : string = "", lastName : string = "", firstName :string = "", mail : string = "", password : string = "") {
    this.username = username;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = mail;
    this.password = password;
  }
}
