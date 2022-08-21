import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }


  postForm(form:NgForm){
    let newPost:Post = {
      title: form.form.value.title,
      thought: form.form.value.thought
    };

    //line below tells Angular to send this value back
    this.submitted.emit(newPost);
  }
}
