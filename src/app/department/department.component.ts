import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {Posts} from '../classes/posts'


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(private userService:UserService) { }
  objPosts:Posts[];

  ngOnInit() {
    var opost = new Posts();
    opost.body="Testbody";
    opost.title="Testtitle"
    opost.userId=5;

    this.userService.post(opost)
    .subscribe
    (
      data=>
      {
        this.objPosts = data;
      }
    )

  }

}
