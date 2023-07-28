import { Component, OnInit } from '@angular/core';
import { AddVacationService } from 'src/app/services/add-vacation.service';


@Component({
  selector: 'app-see-all-vacation',
  templateUrl: './see-all-vacation.component.html',
  styleUrls: ['./see-all-vacation.component.css']
})
export class SeeAllVacationComponent implements OnInit {

  // לפה אני מביא את כל המידע
  allCountry:any;

  constructor(private addVacationService:AddVacationService) { }

  ngOnInit(): void {
    this.getallinfo();
  }

  getallinfo() {
    this.addVacationService.getVacation().subscribe(data =>{
      this.allCountry = data;
    });
  }

}
