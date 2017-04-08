import { Injectable } from '@angular/core';
import { Post } from '../shared/post';
import { POSTS } from '../shared/mock-posts';



@Injectable()
export class BlogPostsService {

  constructor() { }

  getPosts():Promise<Post[]>{
    //TODO : This is temp for the MOCK data
    return Promise.resolve(POSTS);
  }
}
