import { Component, OnInit, ViewChild } from '@angular/core';
import { CharactersApiService } from '../characters/character/shared/characters-api.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  displayedColumns = ['id', 'name', 'description', 'thumbnail'];

  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private characterSvc: CharactersApiService) {
    this.getCharacters();
   }

  ngOnInit() {
  }


  getCharacters() {

    this.characterSvc.getTheCharacters().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data.data.results
        
      );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('data', data.data.results)
    }, err => {
      console.log(err);
    });

  }
 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
