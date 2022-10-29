import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { DemoService } from '../sevices/demo.service';


// type NewType = Moment;

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  notAllowedNames = ['Codemind', 'Technology']; //
  genders = [
    { id : '1', value: 'Male'},
    {id : '2', value: 'Female'}
  ]
  
   myReactiveForm: FormGroup;
   min:any = " ";//declaire todays date
skills:any[]=[];
  constructor(private fb:FormBuilder , private demo : DemoService ) { 
    this.createForm();
  }

  ngOnInit() {
    this.pastDate();//function call
    // this.ABC.hello();
    // this.demo.hello();
  }

  pastDate(){
var tDate:any= new Date();
var date:any= tDate.getDate();
if (date < 10){
  date = "0" + date;  //for 01,02 etc
}
var month : any=tDate.getMonth() + 1;
if ( month< 10 ){
  month ="0" + month;//array starts from "0" so add "+1"
}
var year:any=tDate.getFullYear();

this.min =year + "-" + month + "-" + date ;
console.log(this.min);


  }
  // onChange(value:any){
  //   var today:any = new Date().getTime();
  //   var selectDate= new Date(value).getTime();
  //   if(today > selectDate){
  //     alert("you cannot choose previous date")
  //   }
  //   console.log(today);
    
// console.log(value);

// }

  createForm() {
    // this.myReactiveForm = new FormGroup({
    //   'userDetail' : new FormGroup({
    //     'username': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),//
    //     'email': new FormControl(null, Validators.required, this.NaEmails),

        
    //   }),
    //   'date' : new FormControl(null),
    //   'gender': new FormControl('Male'),
    //   'course': new FormControl('Angular'),
    //   'skills': new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])

    // })
    this.myReactiveForm=this.fb.group({
      userDetail:this.fb.group({
        username: ['', Validators.required],
        email: ['' , Validators.required]
      }),
      date: [null],
      gender: ['Male'],
      course: ['Anguar'],
      skills: this.fb.array([])

    })
  }

  onSubmit() {
    console.log( this.myReactiveForm.value);
    
  }
  OnRemove(index){
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(index);
  }

  OnAddSkills() {
    const control = new FormControl(null) ;
   (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }
  
  NaNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'nameNotAllowed': true}
    }
    return null;
   }
   NaEmails(control: FormControl) : Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 5000)
    })
    return myResponse;
   }
  
}

