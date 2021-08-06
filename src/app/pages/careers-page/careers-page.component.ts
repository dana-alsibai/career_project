import { Component, OnInit } from '@angular/core';
import Job from 'src/app/models/Job';
import { JobDataManagerService } from 'src/app/services/job-data-manager.service';
@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.css']
})
export class CareersPageComponent implements OnInit {
  jobsList:Job[] = []
  constructor(private jobService:JobDataManagerService) { }

  ngOnInit(): void {
    this.jobsList = this.jobService.getAllJob();
  }

  buttonPressed = (city:string) => {

    this.jobsList = this.jobService.getJobBycity(city);

  }

}
