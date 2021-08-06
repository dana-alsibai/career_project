import { Injectable } from '@angular/core';
import Job from '../models/Job';
@Injectable({
  providedIn: 'root'
})
export class JobDataManagerService {

  constructor() { }

  //1. the ownership of the jobs data(list all of the jobs)
  jobsList:Job[] = [
    { id:1, title:"Manager, Software Engineering", type:"Full Time", location:"New York City"},
    { id:2, title:"Software Developer, IOS", type:"Full Time", location:"New York City"},
    { id:3, title:"Machine Vision Engineer", type:"Full Time", location:"Paris"},
    { id:4, title:"Test Engineer, Web", type:"Full Time", location:"New York City"}
]

getAllJob = ():Job[] => {
 return this.jobsList
}
  //2. expose the jobs list to other componeent

  getJobBycity = (choosenCity:string):Job[] => {
    if(choosenCity === " "){
      return this.jobsList
    }
    return this.jobsList.filter((currentJob:Job)=> {
      if(currentJob.location === choosenCity) {
        return true
      }
      else {
        return false
      }
    })
  }

  getJobById = (jobId:number):Job => {
    let foundjob:Job = {} as Job
    for(let i =0; i< this.jobsList.length; i++){
      if(this.jobsList[i].id === jobId) {
         foundjob = this.jobsList[i]
         break;
      }
    } 
    return foundjob
  }
}
