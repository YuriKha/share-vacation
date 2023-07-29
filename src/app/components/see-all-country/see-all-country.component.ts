import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddVacationService } from 'src/app/services/add-vacation.service';
import { CountryRating } from 'src/app/models/country-rating';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vacation } from 'src/app/models/vacation';

@Component({
  selector: 'app-see-all-country',
  templateUrl: './see-all-country.component.html',
  styleUrls: ['./see-all-country.component.css']
})
export class SeeAllCountryComponent implements OnInit {
  allCountry$: Observable<any>;
  CountryRating$: Observable<CountryRating[]>;
  countryData: any = [];

  constructor(private addVacationService: AddVacationService, private router: Router) { }

  ngOnInit():void {
    this.allCountry$ = this.addVacationService.getVacation();

    this.CountryRating$ = this.allCountry$.pipe(
      map(data => this.calculateTotalRating(data))
    );

    this.allCountry$.subscribe(data => {
      this.countryData = data;
    });
  }

  calculateTotalRating(data: any[]): CountryRating[] {
    const countryRatings: CountryRating[] = [];

    data.forEach(item => {
      const existingCountry = countryRatings.find(country => country.Country === item.data.Country);
      if (existingCountry) {
        existingCountry.TotalRating += item.data.Rating;
      } else {
        countryRatings.push({ Country: item.data.Country, TotalRating: item.data.Rating });
      }
    });

    return countryRatings;
  }

  
  getNumberOfPosts(country:string): number {
    let num = 0;
    for(let i=0; i < this.countryData.length; i++){
        if(country === this.countryData[i].data.Country){
          num++;
        }
    }
    return num;
  }

  calculateAverageRating(country:string): number {
    let avg = 0;
    let total = 0;
    for(let i=0; i < this.countryData.length; i++){
      if(country === this.countryData[i].data.Country){
        total++;
        avg += this.countryData[i].data.Rating;
      }
    }
    return avg/total;
  }

  getCountryCode(country: string): string {
    return country.substr(country.length - 2);
  }

  navigateToCountry(country: string) {
    this.router.navigate(['/see-country', country]);
  }
}
