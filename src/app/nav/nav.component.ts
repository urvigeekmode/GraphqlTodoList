import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onloginclick()
  {

    const url ="https://amplifyauthurvi.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=1cvm50koi047d94lrcob4crggu&redirect_uri=http://localhost:4200";
    window.location.assign(url);
  }

}
