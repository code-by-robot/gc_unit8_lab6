import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ListOfPosts:Post[] = [
    {
      title: "Mondays",
      thought: "I hate Mondays."
    },
    {
      title: "Stupid dog",
      thought: "I should kick Odie."
    }
  ]

  AddToPosts(newPost:Post){
    //unshift adds to start of array
    this.ListOfPosts.unshift(newPost);
  }

}
