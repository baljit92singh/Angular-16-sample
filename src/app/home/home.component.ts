import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })
  form = this.formBuilder.group({
    contacts: this.formBuilder.array([])
  });
  todos: any = [];

  message = 'Hello from Parent';
  receivedMessage: any;
  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {

  }

  ngOnInit() {
    this.commonService.getTodos().subscribe(response => {
      this.todos = response;
      console.log(response)
    });
  }

  onSubmit() {

  }

  deleteLesson(lessonIndex: any) {
    this.contacts.removeAt(lessonIndex);
  }

  get contacts() {
    return this.form.controls["contacts"] as FormArray;
  }

  addLesson() {
    const contactForm = this.formBuilder.group({
      title: [''],
      level: ['']
    });
    this.contacts.push(contactForm);
  }

  receiveMessage($event: any) {
    this.receivedMessage = $event;
  }
}
