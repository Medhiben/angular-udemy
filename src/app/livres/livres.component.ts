import { Component, OnInit } from '@angular/core';
import { LivreService } from '../services/livre.service';
import { Livre } from '../model/livre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html'
})
export class LivresComponent implements OnInit {
  
  livres: Livre[];

  constructor(private livreService: LivreService,
    private router: Router) { }

  ngOnInit(): void {
    this.livreService.listLivre().subscribe(prods => {
      console.log(prods);
      this.livres = prods;
    });
  }

  deleteLivre(p: Livre)
{
  console.log(" supprimé");
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.livreService.deleteLivre(p.id).subscribe(() => {
  console.log("produit supprimé");
  this.SuprimerProduitDuTableau(p);
});
}

SuprimerProduitDuTableau(prod : Livre) {
  this.livres.forEach((cur, index) => {
  if(prod.id=== cur.id) {
  this.livres.splice(index, 1);
  }
  });
  }

}

