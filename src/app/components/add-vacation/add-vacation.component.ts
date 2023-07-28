import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Vacation } from 'src/app/models/vacation'; // הטיפוס המיוחד שייצרנו
import { AddVacationService } from 'src/app/services/add-vacation.service'; // גישה ל serive
import { countriesList } from 'src/app/models/country';

@Component({
  selector: 'app-add-vacation',
  templateUrl: './add-vacation.component.html',
  styleUrls: ['./add-vacation.component.css']
})
export class AddVacationComponent implements OnInit {

  // addForm מחזיק את כל הפרטים 
  addForm:FormGroup;
  tempPic:any='../assets/image_placeholder.png';
  uploadPicture:any;
  countriesList=countriesList;
  currentRate:any;

  constructor(private FormBuilder:FormBuilder, private addVacationService:AddVacationService) {
    // יצירה התחלתית אובייקט מסוג זה שהשדות שלו כרגע רקים
    this.addForm =this.FormBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      country:['',Validators.required],
      start:['',Validators.required],
      end:['',Validators.required],
      description:['',Validators.required],
      postPic:['',Validators.required]
  })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    // נדפיב על מנת לראות את הפרטים של הטופס
    console.log(this.addForm.value);
    // ניצור משתנה מסוג חופשה ונמלא אותו בפרטים מהטופס
    let newVacation:Vacation={
      FirstName:this.addForm.value.firstname,
      LastName:this.addForm.value.lastname,
      Country:this.addForm.value.country,
      StartDate:this.addForm.value.start,
      EndDate:this.addForm.value.end,
      Rating:this.currentRate,
      Description:this.addForm.value.description,
      postPic:'',
      PostDate:new Date()
    }
    // נזמן את הפונקציה שיודעת לשמור
    this.addVacationService.uploadImage(this.uploadPicture,newVacation);
    // נאפס את הטופס
    this.addForm.reset();
    this.tempPic='../assets/image_placeholder.png';
  }

  showUploadPic($event){
    const reader = new FileReader();
    reader.onload=(e)=>{
      this.tempPic=e.target.result
    }
    reader.readAsDataURL($event.target.files[0]);
    this.uploadPicture=$event.target.files[0];
  }
}
