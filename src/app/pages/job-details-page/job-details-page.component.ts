import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JobDataManagerService } from 'src/app/services/job-data-manager.service';
import Job from 'src/app/models/Job';
import { Location } from '@angular/common';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {
  job:Job = {} as Job
  constructor(private route:ActivatedRoute, private jobService:JobDataManagerService, private location:Location) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      const jobId = Number(params.get("id"))
      this.job = this.jobService.getJobById(jobId)
    }
    )
  }

  goBackPressed = () =>{
    this.location.back()
  }

}

