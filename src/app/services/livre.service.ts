import { Injectable } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
    headers: new HttpHeaders( {'Content-Type': 'application/json'} )
}

@Injectable({
    providedIn: 'root'
  })
  export class LivreService {
    apiURL: string = 'https://jsonplaceholder.typicode.com/todos/1';
  
    livres: Livre[];
  
  
    constructor(private http : HttpClient) {
    
     }
  
    
     listLivre(): Observable<Livre[]>{
      return this.http.get<Livre[]>(this.apiURL);
      }
  
     
     addLivre( prod: Livre):Observable<Livre>{
      return this.http.post<Livre>(this.apiURL, prod, httpOptions);
      }
  
     
      deleteLivre(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }
  
      
       displayLivre(id: number): Observable<Livre> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Livre>(url);
          }

          updateLivre(prod :Livre) : Observable<Livre>
{
return this.http.put<Livre>(this.apiURL, prod, httpOptions);
}



  
}