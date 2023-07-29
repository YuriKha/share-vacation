import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AddVacationService } from 'src/app/services/add-vacation.service';


@Component({
  selector: 'app-see-all-vacation',
  templateUrl: './see-all-vacation.component.html',
  styleUrls: ['./see-all-vacation.component.css']
})
export class SeeAllVacationComponent implements OnInit {

  // לפה אני מביא את כל המידע
  allCountry$: Observable<any>;

  constructor(private addVacationService:AddVacationService) { }

  ngOnInit(): void {
    this.allCountry$ = this.addVacationService.getVacation();
    
  }

  

}
