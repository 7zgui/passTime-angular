import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor( private router: Router,private storageService:StorageService,private classToggler: ClassToggleService) {
    super();
  }

  logout(){
    this.storageService.clean();
    this.router.navigate(['login'])
  }
}
