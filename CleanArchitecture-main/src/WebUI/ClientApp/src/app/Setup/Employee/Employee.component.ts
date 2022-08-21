import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateEmployee, EmployeesClient, SetupDTo, StatusResult, UpdateEmployee } from 'src/app/web-api-client';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-Employee',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  EmployeesData: SetupDTo[]=[];
  TempEmployeesData: SetupDTo[]=[];

  saveIsDone:boolean=true;
  isEdit=false;
  isLoading=true;
  isExist=false;
  showNoData=false;
  FiliterValue:string;

  pageNumber=0;
  pageSize=10;

  displayedColumns: string[] = ['CODE', 'LATIN_NAME', 'ARABIC_NAME','ACTIVE','ACTION'];//'ACTIVECheck',

  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor( private EmployeesControllerClient:EmployeesClient) { }

  ngOnInit() {
    this.getSetupPageData(0,10);
  }
    //start Generic Setup services

//load data at html
getSetupPageData(pageNumber:number,pageSize:number )
{
  debugger

  this.EmployeesControllerClient.getAllEmployees(1,10).subscribe(res=>{
    // console.log(allInsuranceCompanyData);

    this.EmployeesData= res.items as SetupDTo[];
    this.EmployeesData.forEach(element => {
      element.isOpenForEdit=false;
    });
    this.TempEmployeesData= this.EmployeesData.map(x => Object.assign({}, x));
    this.refreshDataSource()
    this.isLoading = false;
    if (this.saveIsDone == false) {
      this.CancelItem();
    }
    if (this.FiliterValue) {
      this.applyFilter(this.FiliterValue);
    }

  },err=>{
    // console.log("error")
    console.log(err);
  })

}
//add new item at database
postNewSetupPageData(newEmployee:SetupDTo)
{
  debugger;
  newEmployee = newEmployee as CreateEmployee;
  this.EmployeesControllerClient.createEmployee(newEmployee).subscribe(res=>{

    if(res.statusResult!=StatusResult.Exist)//exist
    {
      this.saveIsDone=true;
      this.resetAllData();
      this.getSetupPageData(this.pageNumber,this.pageSize);
    }
    else
    {
      this.isExist=true;
    }
  },err=>{
    console.log(err);
  })
}
//update item at database
putCurrentSetupPageData(updateEmployee:SetupDTo)
{
  updateEmployee = updateEmployee as UpdateEmployee;

  this.EmployeesControllerClient.updateEmployee(updateEmployee).subscribe(res=>{
    if(res.statusResult!=StatusResult.Exist)//exist
    {
      this.saveIsDone=true;
      this.resetAllData();
      this.getSetupPageData(this.pageNumber,this.pageSize);
    }
    else
    {
      this.isExist=true;
    }
  },err=>{
    console.log(err);
  })
}
//delete item
deleteCurrentSetupPageData(employeeId:number)
{
  this.EmployeesControllerClient.deleteEmployee(employeeId).subscribe(res=>{
    this.getSetupPageData(this.pageNumber,this.pageSize);
    },err=>{
    console.log(err);
  })
}

//close all recorde for edit and open one pased on index
EditItem(index:number)
{
// console.log(index)
// console.log(this.saveIsDone)
debugger;
let checkIfCancel:boolean=false
  if(this.saveIsDone==false)
  {
    checkIfCancel=true;
    index=index-1;
    this.CancelItem();
    // console.log("cancel");
  }
  if(!checkIfCancel)
  {
    this.resetAllData();
    // console.log("reset All Data without cancel");
  }
  this.isEdit=true;
  this.EmployeesData[index].isOpenForEdit=true;
}
deleteItem(currentSetupPageObjectID:number)
  {
    this.deleteCurrentSetupPageData(currentSetupPageObjectID);
  }
//mean function that fire when click button save but
//1)if edit fire function putCurrentSetupPageData
//2)if edit and not change anything will refresh only and not going to database
//3)if new item firepostNewSetupPageData
saveItem(newEmployee:SetupDTo,index:number)
{

  if(this.isEdit==true)
  {
    newEmployee=newEmployee as UpdateEmployee;

      this.putCurrentSetupPageData(newEmployee);
  }
  else
  {
    newEmployee=newEmployee as CreateEmployee;
    // console.log("add new item so that we will must going to database")
      this.postNewSetupPageData(newEmployee);
  }





}
//add new recorde virtual from html
PlusItem()
{
  // pageSetupAllData
  this.saveIsDone=false;
  this.resetAllData();
  const newEmployee=new SetupDTo();
  newEmployee.isOpenForEdit=true;
  this.EmployeesData.splice(0,0,newEmployee)
  this.refreshDataSource()
}
//remove  virtual record from html
CancelItem()
{
  debugger;
  this.saveIsDone=true;
  this.resetAllData();
  this.EmployeesData.splice(0,1)
  this.refreshDataSource()
  this.getSetupPageData(this.pageNumber,this.pageSize);

}
//reset All data
resetAllData()
{
  this.isEdit=false;
  this.isExist=false;
  this.showNoData=false;
  this.EmployeesData.forEach(element => {
    element.isOpenForEdit=false;
  });
}
//--------------------------------------------------------------
//dataSource
applyFilter(filterValue: any, event?:boolean) {
  debugger;
  let checkIfCancel:boolean=false
  if(this.saveIsDone==false)
  {
    checkIfCancel=true;
    this.CancelItem();
    // console.log("cancel");
  }
  if(!checkIfCancel)
  {
    this.resetAllData();
  }
  // let filteredword=filterValue.value
  this.dataSource.filter =filterValue.value.trim().toLowerCase();
  this.EmployeesData=this.dataSource.filteredData;
  if(this.dataSource.filteredData.length==0)
  {
    this.showNoData=true;
  }
  else
  {
    this.showNoData=false;

  }
}
refreshDataSource()
{
  debugger;
  this.dataSource = new MatTableDataSource<SetupDTo>(this.EmployeesData);
  this.dataSource.paginator = this.paginator;
    this.filterPredicate2();
}
filterPredicate2()
{
  debugger
  this.dataSource.filterPredicate = function(data, filter: string): boolean {
    return data.code.toLowerCase().includes(filter)||
            data.latinName.toLowerCase().includes(filter)||
            data.arabicName.toLowerCase().includes(filter);
  };
}
}
