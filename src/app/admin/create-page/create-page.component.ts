import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/environments/interface';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form!: FormGroup
  // title!: string
  // author!:  string
  // text!: string

  
  constructor() { }

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
    console.log(post);
    
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
