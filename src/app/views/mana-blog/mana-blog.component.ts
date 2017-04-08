import { Component, OnInit } from '@angular/core';
//Services:
import { BlogPostsService } from '../../services/blog-posts.service';
import { Post } from '../../shared/post';

@Component({
  selector: 'app-mana-blog',
  templateUrl: './mana-blog.component.html',
  styleUrls: ['./mana-blog.component.css'],
  providers: [BlogPostsService]
})
export class ManaBlogComponent implements OnInit {
  posts: Post[];

  constructor(private blogPostsService:BlogPostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts():void{
    this.blogPostsService.getPosts()
        .then((posts) => this.posts=posts);
  }

}
