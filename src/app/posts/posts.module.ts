import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule }  from '@angular/http';
import {
  MdCardModule,
  MdListModule,
  MdInputModule,
  MdButtonModule,
  MdSnackBarModule
 } from '@angular/material';

import { routes } from './posts.routes';
import { PostListComponent } from './post-list/post-list.component';
import { postDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import {PostsFilterPipe} from './posts-filter/posts-filter.pipe';
import {MySortPipe} from './MySortPipe';

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    MySortPipe,
    PostListComponent,
    NewPostComponent,
    EditPostComponent,
    PostsFilterPipe,
    postDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MdCardModule,
    MdListModule,
    MdInputModule,
    MdButtonModule,
    MdSnackBarModule
    // ApolloModule.forRoot(client)
  ],
})
export class PostsModule {
  public static routes = routes;
}
