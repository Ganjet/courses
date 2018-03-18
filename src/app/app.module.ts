import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';
import { CommentsComponent } from './comments/comments.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularPaginatorModule } from 'angular-paginator';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsComponent,
    UserDetailComponent,
    ContactsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
