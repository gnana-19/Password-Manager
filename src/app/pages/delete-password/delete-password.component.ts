import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/requests.service';

@Component({
  selector: 'app-delete-password',
  templateUrl: './delete-password.component.html',
  styleUrls: ['./delete-password.component.scss']
})
export class DeletePasswordComponent implements OnInit {

  allRows: any[];

  constructor(private service: RequestsService) { }

  updateData(): any {
    this.service.getAllRows().subscribe((response) => {
      console.log(response);
      this.allRows = (JSON.parse(JSON.stringify(response))["passwords"])
    })
  }

  ngOnInit(): void {
    this.updateData();
    // this.getData().

  }

  delete(id: HTMLInputElement) {
    this.service.delete(id.value).subscribe((response) => {
      if (JSON.parse(JSON.stringify(response))["result"] == "not found") {
        alert("Please Enter a valid ID");
      } else {
        alert("Deleted Successfully");
        this.updateData();
      }
    })
  }
}
