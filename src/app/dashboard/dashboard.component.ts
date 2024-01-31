import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { EmployeeService } from '../services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreService } from '../core/core.service';
import { DialogService } from '../services/dialog.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  displayedColumns: string[] = [
  'id',
  'firstName',
  'lastName', 
  'email',
   'dob',
   'gender',
   'education',
   'company',
   'experience',
  'package',
  'action',
];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private _notification: any;
  constructor(
    private _dialog: MatDialog,
    private _empService: EmployeeService,
    private _coreService : CoreService,
    private _dialogService: DialogService
    ){}
  
    ngOnInit(): void {
      this.getEmployeeList();
    }
    openAddEditEmpForm(){
   
      const dialogRef = this._dialog.open(AddEmpComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if (val){
          this.getEmployeeList();
        }
      }
      });
    }

    getEmployeeList(){
      this._empService.getEmployeeList().subscribe({
        next: (res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort= this.sort ;
          this.dataSource.paginator = this.paginator;
        },
        // error:console.log,
        error: (err)=>
{
  console.log(err)
}      
}); 
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
//     deleteEmployee(id: number){
//       if(confirm("are you sure delete this data"+id))
//       this._empService.deleteEmployee(id).subscribe({
//         next:(res)=>{
//            this._coreService.openSnackBar('Employee deleted!','done');
//            this.getEmployeeList();
//           },
       
//         error: console.log,     
// });
//     }
deleteEmployee(row:any){
  this. _dialogService.openConfirmDialog("Are you sure you want to delete this record")
  .afterClosed().subscribe(res =>{
    if(res){
      this._empService.deleteEmployee(row.id).subscribe(
        data =>{
          this._coreService.openSnackBar(":: Deleted Successfully");
          // this._empService.filter('');
          this.getEmployeeList();
        }
          );
          
        }
});
    }


  

    openEditForm(data:any){
  
      const dialogRef= this._dialog.open(AddEmpComponent,{
        data,

      });
      
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if (val){
          this.getEmployeeList();
        }
      }
      });
    }
    
  // opened:any;

  // get(){
  //   this.opened=true;
  // }

  // close(){
  //   this.opened=false;
  // }
}
