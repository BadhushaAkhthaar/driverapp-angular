import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../../services/mainservice.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  _freightOrders: any[] = [];
  constructor(private mainService: MainserviceService,private router: Router) { }

  ngOnInit(): void {
    this.mainService.getFreightOrders().subscribe((data: any)=>{
      console.log(data.d.results);
      this._freightOrders = data.d.results;
    })
  }

  toggleCheck(fo: any): void {
    this.router.navigate(['/freightorder/detail',fo.tor_id]);
  }
  
}
