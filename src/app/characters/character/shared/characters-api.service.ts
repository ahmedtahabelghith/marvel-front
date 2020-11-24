import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = 'f01465bfead08c522f32eb8e5f5983ca5223bbdd';
  HASH = '';

 URL_API = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=ed5accb8c7697714ac1dbf1c7584c3c0`;

 //URL_API = `http://localhost:8080/characters`;


  constructor(private http: HttpClient) { }

 

   getAllCharacters(): Observable<any> {
     return this.http.get<any>(this.URL_API)
     .pipe(map((data: any) => data.data.results))
   }
   getTheCharacters(): Observable<any> {
    return this.http
      .get<any>(this.URL_API);
  }
}
