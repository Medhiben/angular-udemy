import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';


@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private livreService: LivreService) { }

  ngOnInit(): void {
    this.livreService.displayLivre(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentLivre = prod; });
  }

 
  updateLivre() {
    this.livreService.updateLivre(this.currentLivre).subscribe(() => {
    this.router.navigate(['livres']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
