import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  empForm: FormGroup;

  
education:string[]=[
  'Matric',
  'Diploma',
  'Intermediate',
  'graduate',
  'Post Graduate',
];

 constructor(
  private _fb: FormBuilder,
  private _empservice:EmployeeService, 
  private _dialogRef: MatDialogRef<AddEmpComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private _coreService: CoreService
  ){
  this.empForm= this._fb.group({
 firstName:'',
 lastName:'',
 email:'',
 dob:'',
 gender:'',
 education:'',
 company:'',
 experience:'',
 package:'',

  });
 }

 ngOnInit(): void {
   this.empForm.patchValue(this.data)
 }
 onFormSubmit(){
  if(this.empForm.valid){
    if(this.data){
      this. _empservice.updateEmployee(this.data.id, this.empForm.value).subscribe({
        next:(val: any) =>{
          
          this._coreService.openSnackBar('Employee Detail updated ');
          this._dialogRef.close(true);
    
        },
        error: (err: any)=> {
          console.error(err);
        },
       });
    }else{
      this. _empservice.addEmployee(this.empForm.value).subscribe({
        next:(val: any) =>{
         
          this._coreService.openSnackBar('Employee added successfully ');

          this._dialogRef.close(true);
    
        },
        error: (err: any)=> {
          console.error(err);
        },
       });
    }
   
  }
 }
}
