import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html'
})
export class AddLivreComponent implements OnInit {

  newLivre = new Livre();

  message :string;

  constructor(private livreService : LivreService,
              private router :Router) { }

  ngOnInit(): void {
  }

  
  addLivre(){
    this.livreService.addLivre(this.newLivre).subscribe(prod => {
    console.log(prod);
  
    });

    this.router.navigate(['livres']).then(() => {
      window.location.reload();
      });
   
    

}

}