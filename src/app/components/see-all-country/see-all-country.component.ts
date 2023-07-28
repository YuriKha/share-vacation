import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddVacationService } from 'src/app/services/add-vacation.service';
import { CountryRating } from 'src/app/models/country-rating';

@Component({
  selector: 'app-see-all-country',
  templateUrl: './see-all-country.component.html',
  styleUrls: ['./see-all-country.component.css']
})
export class SeeAllCountryComponent implements OnInit {

  allCountry:any;
  CountryRating:CountryRating[]=[];
  
  constructor(private addVacationService:AddVacationService, private router: Router) { }

  ngOnInit(): void {
    
    this.getallinfo();
   
  }
  
  // פונקציה שמחלצת את שתי האותיות האחרונות בהם אני אשתמש ב api
  getCountryCode(country: string): string {
    return country.substr(country.length - 2);
  }

  navigateToCountry(country: string) {
    this.router.navigate(['/see-country', country]);
  }

  getallinfo() {
    this.addVacationService.getVacation().subscribe(data =>{
      this.allCountry = data;
      this.sumRating();
    });
    
  }

  sumRating(){
    for(let i = 0; i < this.allCountry.length; i++){
      let found = false;
      for(let j=0 ; j < this.CountryRating.length ; j++){
        if(this.CountryRating[j].Country === this.allCountry[i].data.Country){
          this.CountryRating[j].TotalRating += this.allCountry[i].data.Rating;
          found = true;
          break;
        }
      }
      if(!found){
        this.CountryRating.push({ Country: this.allCountry[i].data.Country, TotalRating: this.allCountry[i].data.Rating });
      }
    }
  }
}
