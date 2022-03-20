import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from './../../shared/posts.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form!: FormGroup
  post!: Post
  submitted = false
  uSub!: Subscription

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postsService.getById(params['id'])
      })
    ).subscribe((post: Post) => {
      this.post = post
      this.form = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        text: new FormControl(post.text, Validators.required)
      })
    })
  }
  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    this.uSub = this.postsService.update({
      ...this.post,
      title: this.form.value.title,
      text: this.form.value.text,
    }).subscribe(() => {
      this.submitted = false
    })
  }

  get title() {
    return this.form.get('title')
  }
  get text() {
    return this.form.get('text')
  }
  ngOnDestroy(): void {
    if(this.uSub){
      this.uSub.unsubscribe()
    }
  }

}
