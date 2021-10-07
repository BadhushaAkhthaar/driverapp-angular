import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainserviceService } from '../../services/mainservice.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  _foid: any;
  _fo: any;
  _fo_Stop: any;
  _dataFetched: boolean = false;
  constructor(private route: ActivatedRoute,private service: MainserviceService) {}

  ngOnInit(): void {
    this._foid = this.route.snapshot.params['foid'];
    this.service.getFreightOrderUsingId(this._foid).subscribe((data: any)=>{
      this._dataFetched = true;
      console.log(data)
      this._fo = data.d;
      console.log(this._fo)
    })
    this.service.getStopsofFO(this._foid).subscribe((data: any)=>{
      this._fo_Stop = data.d.results;
      console.log(this._fo_Stop)
    })
  }

}
