import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    QuillModule.forRoot(),

  ],
  exports: [
    HttpClientModule,
    QuillModule,
  ]
})
export class SharedModule { }
