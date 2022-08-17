import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  posts: Post[] = [];

  constructor(private postservice: PostService) {}

  ngOnInit(): void {
    this.postservice.getPosts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const post = res[index];
        post["votes"] = 1;
      }

      this.posts = res;
    });
  }

  hidePost(post: Post):void {
    this.posts = this.posts.filter(p=>p.id !== post.id);
  }

  addPost(post: Post): void {
    this.posts.unshift(post);
    alert("post added!");

  }

}
