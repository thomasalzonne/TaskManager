import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/services/mission.service';
import {Mission} from 'src/app/models/mission.model';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.css']
})
export class MissionsListComponent implements OnInit {
  constructor( private missionService: MissionService) { }
  missions = [];
  missionsended = [];
  ngOnInit(): void {
    this.getMissions();
  }
  getMissions(){
    this.missionService.getAll().subscribe(
      data => {
        this.missions = [];
        this.missionsended = [];
        data.map( mission => {
          if(mission['done'] === false){
            console.log(typeof(mission))
            this.missions.push(mission)
          }else{
            this.missionsended.push(mission)
          }
        })
      },
      error => {
        console.log(error)
      }
    );
  }
  supprMission(id){
    this.missionService.delete(id.id).subscribe(
      response => {
        console.log(response);
        this.getMissions();
      },
      error => {
        console.log(error)
      }
    )
  }
  endTask(mission){
    mission.done = true
    this.missionService.update(mission.id , mission.done).subscribe(
      response => {
        console.log(response);
        this.getMissions();
      },
      error => {
        console.log(error)
      }
    )
  }
}
