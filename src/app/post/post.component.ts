import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data: Object;
  loading: boolean;
  username: Object;
  loadingUser: boolean;
  constructor(private http: Http) { }

  ngOnInit() {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loadingUser = false;
      });
  }

}
