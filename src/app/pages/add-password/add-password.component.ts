import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/requests.service';

@Component({
  selector: 'app-add-password',
  templateUrl: './add-password.component.html',
  styleUrls: ['./add-password.component.scss']
})
export class AddPasswordComponent implements OnInit {

  constructor(private service: RequestsService, private router: Router) { }

  ngOnInit(): void {
  }

  addPassword(website: HTMLInputElement, username: HTMLInputElement) {
    console.log(`website: ${website.value}, username: ${username.value}, password: ${this.password}`)
    if (website.value && username.value && this.password) {
      this.service.addRow({
        "website": website.value,
        "username": username.value,
        "password": this.password
      }).subscribe((response) => {
        alert("Sucessfully Added new Password!")
        console.log(JSON.parse(JSON.stringify(response)))
        this.router.navigate(['/all-passwords']);
      })
    } else {
      alert("Please fill all input fields")
    }
  }

  password: string;
  getNewPassword() {
    this.service.getPassword().subscribe((response) => {
      this.password = JSON.parse(JSON.stringify(response))["password"];
    })
  }
}
