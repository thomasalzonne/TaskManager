import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import {Mission} from 'src/app/models/mission.model';

@Component({
  selector: 'add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {
  mission: Mission = {
    title : '',
    description : '',
    done : false,
    published: false
  };
  submitted = false

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
  }
  savemission(data):void {
    const query = {
      title : data.missionName,
      description : data.description,
    }
    this.missionService.create(query)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error)
          }
        )
    document.querySelector("form").reset();
  }
}
