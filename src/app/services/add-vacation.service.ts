import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // שומר את הנתונים
import { AngularFireStorage } from '@angular/fire/compat/storage'; // שומר את התמונות
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddVacationService {

  constructor(private AngularFirestor:AngularFirestore,private AngularFireStorage: AngularFireStorage, private toastr:ToastrService) { }

  saveVacation(newVacation){
    this.AngularFirestor.collection('all-vacations').add(newVacation).then(test => {
      console.log("You just save new vacation : " ,test);
      this.toastr.success('you saved the new vacation details');

    }).catch(error =>{
      console.log("could NOT save this vacation : " ,error);
      this.toastr.warning("Could NOT save this vacation");
    });
  }
  
  uploadImage(uploadPicture, newVacation) {
    // מזהה ייחודי לתמונה שאני הולך לעלות
    const filePath = `postIMG/ ${Date.now()}`;
    this.AngularFireStorage.upload(filePath, uploadPicture).then(() => {
      // קבלה של הנתיב בו נמצאה התמונה שלי כסטרינג
      this.AngularFireStorage.ref(filePath).getDownloadURL().subscribe((URL) => {
        newVacation.postPic = URL; // אני שומר את הסטרינג באחד השדות שלי
          this.saveVacation(newVacation); // מזמן את הפונקציה ששומרת את המידע
        });
    });
  }

  getVacation():Observable<object>{
    return this.AngularFirestor.collection('all-vacations').snapshotChanges().pipe(
      map(action =>{
        return action.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,data}
        })
      })
    )
  }
}
