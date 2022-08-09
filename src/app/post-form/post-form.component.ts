import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  public title = '';
  public thought = '';
  @Output() SelectPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost(p:Post):void{
    this.SelectPost.emit(p)
  }
}
