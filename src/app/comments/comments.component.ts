import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})



export class CommentsComponent implements OnInit {
  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';
  data: Object;
  loading: boolean;
  post: Object;
  postLoading: boolean;
  constructor(
    private route: ActivatedRoute, private http: Http
  ) { }
  public id: number;
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/comments?postId=' + this.id)
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
    this.http.request('https://jsonplaceholder.typicode.com/posts/' + this.id)
      .subscribe((postResponse: Response) => {
        this.post = postResponse.json();
        this.postLoading = false;
      });
  }


}
