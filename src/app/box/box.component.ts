import { Component, ViewChild, OnInit, ElementRef, Inject } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '@syncfusion/ej2-ng-buttons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  public data: string[] = ['Mr.', 'Mrs.', 'Ms.'];
  public dateValue: Date = new Date("12/1/1905");
  public minDate : Date = new Date ("12/1/1905");
  public maxDate : Date = new Date ("12/12/2020");

  @ViewChild('ejDatePicker') ejDatePicker: DatePickerComponent;
    public targetElement: HTMLElement;
    public placeholder: String = 'Date of Birth';
    skillForm: FormGroup;
    build: FormBuilder;
    
  constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.build = builder;
        this.createForm();
    }
    createForm() {
        this.skillForm = this.build.group({
            datepicker: ['', Validators.required],
            lastname: ['', Validators.required],
            title: [''],
        });
    }
    get lastname() {
        return this.skillForm.get('lastname');
    }
    get datepicker() {
        return this.skillForm.get('datepicker');
    }

    onSubmit() {
        console.log(this.skillForm.value);
    }

  ngOnInit(): void {}

}

/**
  public data: string[] = ['Mr.', 'Mrs.', 'Ms.'];
  public dateValue: Date = new Date("12/1/1905");
  public minDate : Date = new Date ("12/1/1905");
  public maxDate : Date = new Date ("12/12/2020");
  
  on_ChangeInput() {
    this.lname = true
  }
  lname = false;
**/