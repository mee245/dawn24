import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
  
export class EmployeeComponent implements OnInit {

  constructor(private userService:UserService) { }
  
  employee = [];

  ngOnInit(){
    this.userService.getcomments()
    .subscribe
    (
      data=>
      {
       this.employee = data;
      }
    );
  }
}

