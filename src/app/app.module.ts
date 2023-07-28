import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// -----------------------------------------------------------------------------
import { AngularFireModule } from '@angular/fire/compat'; // חיבור לבסיס הנתונים
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // חיבור לבסיס הנתונים
import { environment } from 'src/environments/environment.prod'; // תקיית משתני הסביבה שלנו
// -----------------------------------------------------------------------------
import { NavbarComponent } from './components/navbar/navbar.component'; //  הקטע העליון באתר navbar
import { FooterComponent } from './components/footer/footer.component'; // תחתית האתר footer
import { CarouselComponent } from './components/carousel/carousel.component'; // קרוסלה carousel
import { AddVacationComponent } from './components/add-vacation/add-vacation.component'; // אפשרות הוספה חופשה
import { SeeAllVacationComponent } from './components/see-all-vacation/see-all-vacation.component';  // הופסדה של חופשה
import { SeeAllCountryComponent } from './components/see-all-country/see-all-country.component'; // לראות את  המדינות
import { SeeCountryComponent } from './components/see-country/see-country.component';  // לראות לפי מדינה
// -----------------------------------------------------------------------------
import { ReactiveFormsModule } from '@angular/forms'; // נותן לי לעבוד עם form
import { FormsModule } from '@angular/forms'; // נותן לי לעבוד עם form
// -----------------------------------------------------------------------------
import { ToastrModule } from 'ngx-toastr'; // יצירה של טוסט


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    AddVacationComponent,
    SeeAllVacationComponent,
    SeeAllCountryComponent,
    SeeCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule, // נותן לי לעבוד עם form
    FormsModule, // נותן לי לעבוד עם form
    ToastrModule.forRoot(), // טוסט
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
