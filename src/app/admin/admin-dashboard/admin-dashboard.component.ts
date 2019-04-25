import { HttpClient } from '@angular/common/http';
import { AutenticationService } from './../../service/autentication.service';
import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
blog = [
  {
    id : 2,
    task : 'www.google.com',
    status : 'salut3',
    created_at :  'salut4',
  },
  {
    id : 1,
    task : 'salut1',
    status : 'salut1',
    created_at :  'salut1',
  }
];

  constructor(private http: HttpClient) { }
  ngOnInit() {
     
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250, 300, 350, 450, 500, 550, 600],
          ['data2', 50, 20, 10, 40, 15, 25, 30, 35, 40, 45, 50, 55]
        ]
      }
     });
    this.http.get('http://localhost:3000/todos/').subscribe(
     (res) => {
       var Data=res["data"];
       console.log(Data);
       this.blog=Data;
      });

      
  }

}
