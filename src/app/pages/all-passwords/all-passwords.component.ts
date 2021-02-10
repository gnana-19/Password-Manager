import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/requests.service';

@Component({
  selector: 'app-all-passwords',
  templateUrl: './all-passwords.component.html',
  styleUrls: ['./all-passwords.component.scss']
})
export class AllPasswordsComponent implements OnInit {

  allRows: any[];

  constructor(private service: RequestsService) { }

  ngOnInit(): void {
    // this.allRows = [
    //   {
    //     "id": 1,
    //     "website": "Hi",
    //     "username": "Hello",
    //     "password": "bye"
    //   },
    //   {
    //     "id": 2,
    //     "website": "Hi",
    //     "username": "Hello",
    //     "password": "bye"
    //   },
    //   {
    //     "id": 3,
    //     "website": "Hi",
    //     "username": "Hello",
    //     "password": "bye"
    //   }
    // ],
    //   console.log(this.allRows)
    this.service.getAllRows().subscribe((response) => {
      console.log(response);
      this.allRows = (JSON.parse(JSON.stringify(response))["passwords"])
    })
  }

}
