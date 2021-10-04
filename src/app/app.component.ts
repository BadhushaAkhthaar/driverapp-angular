import { Component } from '@angular/core';
import { MainserviceService } from './services/mainservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  
  constructor(private service: MainserviceService){
  }
  ngOnInit(){
    
  }
}
