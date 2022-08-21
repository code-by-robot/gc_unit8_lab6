import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { SocialPostsComponent } from './social-posts/social-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePostComponent,
    SocialPostsComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }