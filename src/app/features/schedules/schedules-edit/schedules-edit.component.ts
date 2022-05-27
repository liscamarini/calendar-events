import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedules-edit',
  templateUrl: './schedules-edit.component.html',
  styleUrls: ['./schedules-edit.component.css']
})
export class SchedulesEditComponent implements OnInit {

  scheduleId!: number;

  scheduleForm: FormGroup = this.formBuilder.group({
    title: [null, Validators.required],
    date: [null, Validators.required],
    initTime: [null, Validators.required],
    endTime: [null, Validators.required],
    description: [null],
    image: [null]
  });


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
   private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.scheduleId = this.activatedRoute.snapshot.params['id'] as number;
    this.loadSchedule();
  }

  onSubmit() {
    this.scheduleService.update(this.scheduleId, this.scheduleForm.value).subscribe(() => {
      this.router.navigateByUrl('/schedules');
    });
  }

  private loadSchedule() {
    this.scheduleService.findById(this.scheduleId).subscribe(schedule => {
      this.scheduleForm.patchValue({
        title: schedule.title,
        date: schedule.date,
        initTime: schedule.initTime,
        endTime: schedule.endTime,
        description: schedule.description,
        image: schedule.image
      });
    });
  }

}
