import { AlertService } from './../shared/services/alert.service';
import { PostsService } from './../../shared/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form!: FormGroup

  constructor(
    private postsService: PostsService,
    private alertService: AlertService,
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      text: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
    })
  }

  submit(){
    if(this.form.invalid){
      return
    }
    const post: Post = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    }

    this.postsService.create(post).subscribe(()=>{
      this.form.reset()
      this.alertService.success('Пост успешно создан!')
    })    
  }

  get title() {
    return this.form.get('title')
  }
  get author() {
    return this.form.get('author')
  }
  get text() {
    return this.form.get('text')
  }

}
