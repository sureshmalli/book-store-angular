import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name : string='';
  constructor(private route: ActivatedRoute,private router:Router){}
ngOnInit(): void {
  this.route.queryParams.subscribe((queryParam)=>{
    this.name=queryParam.name;
  });
  
}
goToSignup():void{
  this.router.navigate(['/auth/signup']);
}
goTobookDeatils():void{
  this.router.navigate(['/auth/signup']);
}
}
