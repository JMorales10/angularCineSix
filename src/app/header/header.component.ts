import { UsersService } from 'src/app/shared/services/users.service';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{

  public userLoggued: any = false;

  public isAdmin: any;

  constructor (private userService: UsersService){}

  ngAfterViewInit(): void {
    this.loggued();
    if(localStorage.getItem('jwt')) {
      this.checkRoleUser(localStorage.getItem('jwt'))
    }
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

  public checkRoleUser (jwt: any) {
    this.userService.roleToken(jwt).subscribe(
      (data: any) => {
        if(data.error) {
          localStorage.removeItem('jwt')
          this.userLoggued = false;
        } else {
          this.isAdmin = data.rol
        }
      }
    )
  }
}
