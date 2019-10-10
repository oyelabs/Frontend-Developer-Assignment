import { map } from 'rxjs/operators';
import { TableService } from './../services/table.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Papa } from "ngx-papaparse";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataList: any;
  constructor(private tblService: TableService){

  }

  ngOnInit(){
    this.tblService.list$.subscribe(data =>{
      this.dataList = data

    })
  }

  convertToInt(val){
    return parseInt(val);
  }
}
