import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() userId: number;
  data: Object;
  loading: boolean;
  constructor(private http: Http) { }

  ngOnInit() {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/users/' + this.userId)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}


