import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddVacationService } from 'src/app/services/add-vacation.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {

  // יכיל את המידע שעבר דרך ה url
  countryUrl: string;
  // לפה אני מביא את כל המידע
  allCountry:any;
  // יכיל את המידע המסונן 
  filteredCountry: any;
  

  constructor(private route: ActivatedRoute ,private addVacationService:AddVacationService) { }

  ngOnInit(): void {

    this.filterCountry();
  }

  // פונקציה שמביא את כל המידע ומסננת בהתאם לערך שהתקבל ב URL
  filterCountry() {
    this.route.paramMap.subscribe(params => {
      this.countryUrl = params.get('country');});

    this.addVacationService.getVacation().subscribe((data)=> {
      this.allCountry = data;
      this.filteredCountry = this.allCountry.filter(item => item.data.Country === this.countryUrl);
    });
  }
}
