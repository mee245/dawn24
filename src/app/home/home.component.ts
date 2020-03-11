import { Component, OnInit } from "@angular/core";
import { UserService } from '../service/user.service';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private userService:UserService) { }

  message:string;

ngOnInit(){
    this.userService.delete()
    .subscribe
    (
      data=>
      {
      this.message="Data Deleted Successfully!"
      }
    )

}
}