import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() submit = new EventEmitter();
  city: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    this.submit.emit(this.city);
  }

}
