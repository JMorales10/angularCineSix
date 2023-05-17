import { Router } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{

  public userLoggued: any = false;

  constructor (private router: Router){}

  ngAfterViewInit(): void {
    this.loggued();
  }

  public loggued () {
    if(localStorage.getItem('jwt')) {
      this.userLoggued = true;
    }
  }

  public logout () {
    localStorage.removeItem('jwt');
    location.reload()
  }
}
