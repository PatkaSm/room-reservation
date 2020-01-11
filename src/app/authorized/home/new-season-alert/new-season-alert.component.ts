import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewSeasonService } from './new-season.service';
import { DatePipe } from '@angular/common';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-new-season-alert',
  templateUrl: './new-season-alert.component.html',
  styleUrls: ['./new-season-alert.component.css']
})
export class NewSeasonAlertComponent implements OnInit {
  @Output() refresh = new EventEmitter();
  @Output() hideAlert = new EventEmitter();
  @Output() showSeasonMessage = new EventEmitter();
  newSeasonForm;
  constructor(private newSeasonService: NewSeasonService, public datepipe: DatePipe) { }

  ngOnInit() {
    this.newSeasonForm = new FormGroup({});
    this.newSeasonForm.addControl('seasonBeginField', new FormControl(new Date(), [Validators.required]));
    this.newSeasonForm.addControl('seasonEndField', new FormControl(new Date(), [Validators.required]));
    this.newSeasonForm.addControl('winterSemesterStartField', new FormControl(new Date(), [Validators.required]));
    this.newSeasonForm.addControl('winterSemesterEndField', new FormControl(new Date(), [Validators.required])),
      this.newSeasonForm.addControl('summerSemesterStartField', new FormControl(new Date(), [Validators.required]));
    this.newSeasonForm.addControl('summerSemesterEndField', new FormControl(new Date(), [Validators.required]));
  }

  get seasonBeginField() {
    return this.newSeasonForm.get('seasonBeginField');
  }
  get seasonEndField() {
    return this.newSeasonForm.get('seasonEndField');
  }
  get winterSemesterStartField() {
    return this.newSeasonForm.get('winterSemesterStartField');
  }
  get winterSemesterEndField() {
    return this.newSeasonForm.get('winterSemesterEndField');
  }
  get summerSemesterStartField() {
    return this.newSeasonForm.get('summerSemesterStartField');
  }
  get summerSemesterEndField() {
    return this.newSeasonForm.get('summerSemesterEndField');
  }
  getData = () => (
    {
      season_start: this.datepipe.transform(this.seasonBeginField.value, 'yyyy-MM-dd'),
      season_end: this.datepipe.transform(this.seasonEndField.value, 'yyyy-MM-dd'),
      winter_semester_start: this.datepipe.transform(this.winterSemesterStartField.value, 'yyyy-MM-dd'),
      winter_semester_end: this.datepipe.transform(this.winterSemesterEndField.value, 'yyyy-MM-dd'),
      summer_semester_start: this.datepipe.transform(this.summerSemesterStartField.value, 'yyyy-MM-dd'),
      summer_semester_end: this.datepipe.transform(this.summerSemesterEndField.value, 'yyyy-MM-dd')}
  )

  beginSeason = () => {
    this.newSeasonService.newSeason(this.getData()).subscribe(response => {
      this.hideAlert.emit();
      this.refresh.emit();
      this.showSeasonMessage.emit();
    }, error => {
      throwError(error);
    })
  }
}
